import React, { useState, useEffect } from "react";
import MetaTags from 'react-meta-tags';
import SweetAlert from "react-bootstrap-sweetalert";
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
import EditModal from "./EditModal";

const TableHousekeeping = (props) => {
  let deleteData = null;
  const [taskRoom, setTaskRoom] = useState([]);
  const [taskMess, setTaskMess] = useState([]);
  const [success_dlg, setsuccess_dlg] = useState(false);
  const [dynamic_title, setdynamic_title] = useState("");
  const [dynamic_description, setdynamic_description] = useState("");
  const [confirm_both, setconfirm_both] = useState(false);
  const [error_dlg, seterror_dlg] = useState(false);
  const [modal_standard, setmodal_standard] = useState(false);
  const [dataModal, setDataModal] = useState(null);
  const [record, setRecord] = useState(null);

  const breadcrumbItems = [
    { title: "Asa Service", link: "#" },
    { title: "Housekeeping", link: "#" },
    { title: "Task", link: "#" },
  ]

  function countRoom(object) {
    return object.ac + object.cermin + object.gorden + object.jendela + object.keran + object.lantai_kamar + object.lantai_langit_kamar + object.lantai_langit_kamar_mandi + object.lantai_toilet + object.lemari + object.meja + object.selimut + object.shower + object.sprei + object.tempat_sampah + object.tempat_tidur + object.wastafel + object.wc
  }

  function countMess(object) {
    return object.ruang_tv_kaca_jendela_kusen + object.ruang_tv_cermin + object.ruang_tv_dispenser + object.ruang_tv_ac + object.ruang_tv_furniture + object.ruang_tv_rak_tv + object.ruang_tv_tirai_karpet + object.ruang_tv_dinding + object.ruang_tv_lantai + object.koridor_tempat_sampah + object.koridor_pintu + object.koridor_lantai_sudut_lantai + object.koridor_keset + object.koridor_pantry + object.koridor_wastafel_chrome_fixture + object.koridor_peralatan_makan_rak_piring + object.koridor_pintu_dinding + object.koridor_kanca_jendela_kusen + object.toilet_pintu_dinding + object.toilet_tempat_sampah + object.toilet_wastafel_chrome_fixture + object.toilet_urinoir_selang_toilet_bowl + object.toilet_shower_area_curtain + object.toilet_lantai_sudut_lantai + object.toilet_teras
  }

  const fetchData = async () => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"))

      const headers = {
        'Authorization': "Bearer " + obj.access_token,
      };

      const responseRoom = await fetch('http://asabeta.com/api/task/room', { headers });
      const dataRoom = await responseRoom.json();
      setTaskRoom(dataRoom);
      // console.log(data)

      const responseMess = await fetch('http://asabeta.com/api/task/mess', { headers });
      const dataMess = await responseMess.json();
      setTaskMess(dataMess);
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

    if (record.no_kamar) {
      deleteData = "room";
    } else {
      deleteData = "mess";
    }

    axios
      .delete("http://asabeta.com/api/task/" + `${deleteData}` +"-delete/" + `${id}`, config)
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

  function tog_standard() {
    setmodal_standard(!modal_standard)
    removeBodyCss()
  }

  function func_setmodal_standard() {
    setmodal_standard(false);
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }

  useEffect(() => {
    props.setBreadcrumbItems('Task', breadcrumbItems)
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

      {(modal_standard) ?
        <EditModal
          modal_standard={modal_standard}
          tog_standard={tog_standard}
          dataModal={dataModal}
          func_setmodal_standard={func_setmodal_standard}
          fetchData={fetchData}
        />
        : null}

      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Room Housekeeping</CardTitle>
              <p className="card-title-desc">
                Berisi record ruangan yang telah dibersihkan oleh worker
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
                      <th>Mess</th>
                      <th>Kamar</th>
                      <th>Poin</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taskRoom.map((object, i) =>
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{object.user.nrp}</td>
                        <td>{object.user.name}</td>
                        <td>{new Date(object.created_at).toLocaleDateString()}</td>
                        <td>{new Date(object.created_at).toLocaleTimeString()}</td>
                        <td>{object.mess}</td>
                        <td>{object.no_kamar}</td>
                        <td>{countRoom(object)}</td>
                        <td style={{ width: "125px" }}>
                          <Button
                            color="secondary"
                            size="sm"
                            className="waves-effect waves-light"
                            type="button"
                            onClick={() => {
                              tog_standard();
                              setDataModal(object);
                            }}
                            data-toggle="modal"
                            data-target="#myModal"
                          >Edit</Button> <span> </span>
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => {
                              setconfirm_both(true);
                              setRecord(object);
                            }}
                            id="sa-success"
                          >
                            Delete
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


      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Mess Housekeeping</CardTitle>
              <p className="card-title-desc">
                Berisi record mess yang telah dibersihkan
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
                      <th>Mess</th>
                      <th>Poin</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taskMess.map((object, i) =>
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{object.user.nrp}</td>
                        <td>{object.user.name}</td>
                        <td>{new Date(object.created_at).toLocaleDateString()}</td>
                        <td>{new Date(object.created_at).toLocaleTimeString()}</td>
                        <td>{object.mess}</td>
                        <td>{countMess(object)}</td>
                        <td style={{ width: "125px" }}>
                          <Button
                            color="secondary"
                            size="sm"
                            className="waves-effect waves-light"
                            type="button"
                            onClick={() => {
                              tog_standard();
                              setDataModal(object);
                            }}
                            data-toggle="modal"
                            data-target="#myModal"
                          >Edit</Button> <span> </span>
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => {
                              setconfirm_both(true);
                              setRecord(object);
                            }}
                            id="sa-success"
                          >
                            Delete
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

export default connect(null, { setBreadcrumbItems })(TableHousekeeping);
