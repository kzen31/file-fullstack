import React, { Fragment, useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import SweetAlert from "react-bootstrap-sweetalert"
import axios from "axios";

import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap"

import { connect } from "react-redux";
import { setBreadcrumbItems } from "../../../../store/actions";
import BadgeStatus from "./BadgeStatus";
import FormEditStatus from "./FormEditStatus";


const TableMaintenance = (props) => {
  const [complaints, setComplaints] = useState([]);
  const [success_dlg, setsuccess_dlg] = useState(false);
  const [dynamic_title, setdynamic_title] = useState("");
  const [dynamic_description, setdynamic_description] = useState("");
  const [confirm_both, setconfirm_both] = useState(false);
  const [error_dlg, seterror_dlg] = useState(false);
  const [modal_center, setmodal_center] = useState(false);
  const [dataStatus, setDataStatus] = useState(null);
  const [record, setRecord] = useState(null);

  const breadcrumbItems = [
    { title: "Asa Service", link: "#" },
    { title: "Maintenance", link: "#" },
    { title: "Complaints", link: "#" },
  ]

  function tog_center() {
    setmodal_center(!modal_center)
    document.body.setAttribute('style', 'display:inline !important');
  }

  function func_setmodal_center() {
    setmodal_center(false)
  }

  const fetchData = async () => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"))

      const headers = {
        'Authorization': "Bearer " + obj.access_token,
      };

      const response = await fetch(process.env.REACT_APP_DATABASEURL + '/api/maintenance/task', { headers });
      const data = await response.json();
      setComplaints(data);
    }
  }

  function deleteRecord() {
    const obj = JSON.parse(localStorage.getItem("authUser"))
    const config = {
      headers: {
        'Authorization': "Bearer " + obj.access_token
      }
    };
    const id = record.id;

    axios
      .delete("http://asabeta.com/api/maintenance/task-delete/" + `${id}`, config)
      .then((response) => {
        setconfirm_both(false)
        setsuccess_dlg(true)
        setdynamic_title("Deleted")
        setdynamic_description("Record has been deleted.")
      })
      .catch(error => {
        setconfirm_both(false)
        seterror_dlg(true);
        setdynamic_title("Error");
        setdynamic_description("Error Delete Record");
      })
  }

  useEffect(() => {
    props.setBreadcrumbItems('Complaints', breadcrumbItems)
    fetchData()
      .catch(console.error);;
  }, [])

  return (
    <React.Fragment>

      <MetaTags>
        <title>Complaints</title>
      </MetaTags>

      {success_dlg ? (
        <SweetAlert
          success
          title={dynamic_title}
          onConfirm={() => {
            setsuccess_dlg(false);
            fetchData();
          }}
        >
          {dynamic_description}
        </SweetAlert>
      ) : null}

      {error_dlg ? (
        <SweetAlert
          error
          title={dynamic_title}
          onConfirm={() => {
            seterror_dlg(false)
          }}
        >
          {dynamic_description}
        </SweetAlert>
      ) : null}

      {confirm_both ? (
        <SweetAlert
          title="Are you sure?"
          warning
          showCancel
          confirmBtnBsStyle="success"
          cancelBtnBsStyle="danger"
          onConfirm={() => {
            deleteRecord();
          }}
          onCancel={() => {
            setconfirm_both(false)
            setsuccess_dlg(true)
            setdynamic_title("Cancelled")
            setdynamic_description("Be careful when deleting user.")
          }}
        >
          You won't be able to revert this!
        </SweetAlert>
      ) : null}

      {(dataStatus) ?
        <FormEditStatus
          dataStatus={dataStatus}
          modal_center={modal_center}
          tog_center={tog_center}
          func_setmodal_center={func_setmodal_center}
          fetchData={fetchData}
        />
        : null}

      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <CardTitle className="h4">List of Maintenance Complaints </CardTitle>
              <p className="card-title-desc">
                Berisi list dari aduan maintenance dari user
              </p>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>NRP</th>
                      <th>Nama</th>
                      <th>Tanggal</th>
                      <th>Waktu</th>
                      <th>Jenis Aset</th>
                      <th>Lokasi</th>
                      <th>Status</th>
                      <th>Keterangan</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complaints.map((object, i) =>
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{object.user_nrp}</td>
                        <td>{object.user_name}</td>
                        <td>{new Date(object.created_at).toLocaleDateString()}</td>
                        <td>{new Date(object.created_at).toLocaleTimeString()}</td>
                        <td>{object.jenis_aset}</td>
                        <td>{object.lokasi_aset}</td>
                        <td><BadgeStatus status={object.status} /></td>
                        <td>{object.keterangan}</td>
                        <td style={{ width: "125px" }}>
                          <Button
                            color="secondary"
                            size="sm"
                            className="waves-effect waves-light"
                            type="button"
                            onClick={() => {
                              tog_center();
                              setDataStatus(object);
                            }}
                            data-toggle="modal"
                            data-target=".bs-example-modal-center"
                          >Edit</Button> <span> </span>
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => {
                              setconfirm_both(true);
                              setRecord(object);
                            }}
                            id="sa-success"
                          > Delete
                          </Button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(TableMaintenance);
