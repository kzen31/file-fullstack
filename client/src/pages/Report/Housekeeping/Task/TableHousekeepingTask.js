import React, { useState, useEffect } from "react";
import MetaTags from 'react-meta-tags';
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import DataFrame from "dataframe-js";
import * as XLSX from 'xlsx'

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

      const responseRoom = await fetch(process.env.REACT_APP_DATABASEURL + '/api/task/room', { headers });
      const dataRoom = await responseRoom.json();
      setTaskRoom(dataRoom);

      const responseMess = await fetch(process.env.REACT_APP_DATABASEURL + '/api/task/mess', { headers });
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
      .delete("http://asabeta.com/api/task/" + `${deleteData}` + "-delete/" + `${id}`, config)
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
  function boleanToInteger(obj) {
    let tampung = {};

    let entries = Object.entries(obj)
    entries.map(([key, val] = entry) => {
      let temp = {}
      if (val === true) temp = { [key]: 1 }
      else if (val === false) temp = { [key]: 0 }
      else temp = { [key]: val }
      tampung = { ...tampung, ...temp }

    });
    return tampung;
  }
  function createExcel() {
    const objBaru = taskRoom.map(obj => {
      if (obj == true) return '1'
      if (obj == false) return '0'
      else return obj
    })
    let taskRoomNew = taskRoom.map(obj => {
      const temp = {
        'name': obj.user.name,
        'nrp': obj.user.nrp,
        'department': obj.user.department,
        'tanggal': new Date(obj.created_at).toLocaleDateString(),
        'waktu': new Date(obj.created_at).toLocaleTimeString(),
        'total': countRoom(obj)
      }
      const newObj = boleanToInteger(obj)
      return { ...temp, ...newObj }
    })
    let data = taskRoomNew;

    let tampung = {};

    let entries = Object.entries(data[0])
    let header = entries.map(([key, val] = entry) => {
      const temp = { [key]: key }
      tampung = { ...tampung, ...temp }
    });

    data.unshift(tampung);

    const df = new DataFrame(data, ['tanggal', 'waktu', 'name', 'mess', 'no_kamar', 'lantai_kamar', 'lantai_toilet', 'lantai_langit_kamar', 'lantai_langit_kamar', 'wc', 'wastafel', 'tempat_tidur', 'sprei', 'selimut', 'ac', 'meja', 'cermin', 'keran', 'shower', 'tempat_sampah', 'jendela', 'gorden', 'lemari', 'total']);

    const worksheet = XLSX.utils.json_to_sheet(df.transpose().toCollection(), { skipHeader: true });
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Housekeeping Task Room");

    XLSX.writeFile(workbook, "Housekeeping Task Room.xlsx");
  }
  function createExcel2() {
    const objBaru = taskMess.map(obj => {
      if (obj == true) return '1'
      if (obj == false) return '0'
      else return obj
    })
    let taskMessNew = taskMess.map(obj => {
      const temp = {
        'name': obj.user.name,
        'nrp': obj.user.nrp,
        'department': obj.user.department,
        'tanggal': new Date(obj.created_at).toLocaleDateString(),
        'waktu': new Date(obj.created_at).toLocaleTimeString(),
        'total': countMess(obj)
      }
      const newObj = boleanToInteger(obj)
      return { ...temp, ...newObj }
    })
    let data = taskMessNew;

    let tampung = {};

    let entries = Object.entries(data[0])
    let header = entries.map(([key, val] = entry) => {
      const temp = { [key]: key }
      tampung = { ...tampung, ...temp }
    });

    data.unshift(tampung);

    const df = new DataFrame(data, ['tanggal', 'waktu', 'name', 'mess', 'ruang_tv_kaca_jendela_kusen', 'ruang_tv_cermin', 'ruang_tv_dispenser', 'ruang_tv_ac', 'ruang_tv_furniture', 'ruang_tv_rak_tv', 'ruang_tv_tirai_karpet', 'ruang_tv_dinding', 'ruang_tv_lantai', 'koridor_tempat_sampah', 'koridor_pintu', 'koridor_lantai_sudut_lantai', 'koridor_keset', 'koridor_pantry', 'koridor_wastafel_chrome_fixture', 'koridor_peralatan_makan_rak_piring', 'koridor_pintu_dinding', 'koridor_kanca_jendela_kusen', 'toilet_pintu_dinding', 'toilet_tempat_sampah', 'toilet_wastafel_chrome_fixture', 'toilet_urinoir_selang_toilet_bowl', 'toilet_shower_area_curtain', 'toilet_lantai_sudut_lantai', 'toilet_teras', 'total']);

    const worksheet = XLSX.utils.json_to_sheet(df.transpose().toCollection(), { skipHeader: true });
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Housekeeping Task Mess");

    XLSX.writeFile(workbook, "Housekeeping Task Mess.xlsx");
  }

  useEffect(() => {
    props.setBreadcrumbItems('Task', breadcrumbItems)
    fetchData()
      .catch(console.error);;
  }, [])

  return (
    <React.Fragment>

      <MetaTags>
        <title>Task</title>
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
              <div className="row">
                <div className="col-sm">
                  <CardTitle className="h4">Room Housekeeping</CardTitle>
                  <p className="card-title-desc">
                    Berisi record ruangan yang telah dibersihkan oleh worker
                  </p>
                </div>
                <div className="col-sm d-flex flex-row-reverse">
                  <div className="text-center">
                    <Button
                      color="success"
                      size="md"
                      className="waves-effect waves-light"
                      type="button"
                      onClick={() => {
                        createExcel();
                      }}
                      id="sa-success"
                    >
                      Export To xlsx
                    </Button>
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
              <div className="row">
                <div className="col-sm">
                  <CardTitle className="h4">Mess Housekeeping</CardTitle>
                  <p className="card-title-desc">
                    Berisi record mess yang telah dibersihkan
                  </p>
                </div>

                <div className="col-sm d-flex flex-row-reverse">
                  <div className="text-center">
                    <Button
                      color="success"
                      size="md"
                      className="waves-effect waves-light"
                      type="button"
                      onClick={() => {
                        createExcel2();
                      }}
                      id="sa-success"
                    >
                      Export To xlsx
                    </Button>
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
