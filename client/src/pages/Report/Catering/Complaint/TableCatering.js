import React, { useState, useEffect } from "react";
import MetaTags from 'react-meta-tags';
import SweetAlert from "react-bootstrap-sweetalert";
import { connect } from "react-redux";
import axios from "axios";
import Excel from "./xlsxComplntCatering";

import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  Badge,
} from "reactstrap"

import { setBreadcrumbItems } from "../../../../store/actions";
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';
import FormEditStatus from "./FormEditStatus";
import BagdeStatus from "./BagdeStatus";

const TableCatering = (props) => {
  const [complaints, setComplaints] = useState([]);
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  const [confirm_both, setconfirm_both] = useState(false)
  const [error_dlg, seterror_dlg] = useState(false)
  const [modal_center, setmodal_center] = useState(false)
  const [dataStatus, setDataStatus] = useState(null)
  const [record, setRecord] = useState(null)

  const breadcrumbItems = [
    { title: "ASA Website", link: "#" },
    { title: "Catering", link: "#" },
    { title: "Complaints", link: "#" },
  ]

  function tog_center() {
    setmodal_center(!modal_center)
    document.body.setAttribute('style', 'display:inline !important');
  }

  function func_setmodal_center() {
    setmodal_center(false);
  }

  const fetchData = async () => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"))

      const headers = {
        'Authorization': "Bearer " + obj.access_token,
      };
      const response = await fetch(process.env.REACT_APP_DATABASEURL + '/api/catering/all', { headers });
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
      .delete(process.env.REACT_APP_DATABASEURL + "/api/catering/delete-record/" + `${id}`, config)
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
    props.setBreadcrumbItems('Complaints', breadcrumbItems);
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
            setsuccess_dlg(false)
            document.body.setAttribute('style', 'padding-right: 0px;');
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
            document.body.setAttribute('style', 'padding-right: 0px;');
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
          func_setmodal_center={func_setmodal_center}
          tog_center={tog_center}
          modal_center={modal_center}
          fetchData={fetchData}
        />
        : null}

      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <div className="row">
                <div className="col-sm">
                  <CardTitle className="h4">List of Catering Complaints </CardTitle>
                  <p className="card-title-desc">
                    Berisi list dari aduan catering dari user
                  </p>
                </div>
                
                <div className="col-sm d-flex flex-row-reverse">
                  <div className="text-center">
                    {(complaints) ? 
                      <Excel data={complaints} />
                      : null}
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>NRP</th>
                      <th>Nama</th>
                      <th>Tanggal Aduan</th>
                      <th>Lokasi</th>
                      <th>Deskripsi</th>
                      <th>Kirik & Saran</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complaints.map((object, i) =>
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{object.user_nrp}</td>
                        <td>{object.user_name}</td>
                        <td>{new Date(object.tanggal_aduan).toLocaleDateString()}</td>
                        <td>{object.lokasi}</td>
                        <td>{object.deskripsi}</td>
                        <td>{object.kritik_saran}</td>
                        <td><BagdeStatus status={object.status} /></td>
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
                          >Edit</Button>
                          <span> </span>
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => {
                              document.body.setAttribute('style', 'padding-right: 17px;');
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

export default connect(null, { setBreadcrumbItems })(TableCatering);
