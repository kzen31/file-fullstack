import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';

import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
} from "reactstrap"

import { connect } from "react-redux";
import { setBreadcrumbItems } from "../../../../store/actions";
import DetailRating from "./DetailRating";


const TableCatering = (props) => {
  const [data, setData] = useState(null);
  const [record, setRecord] = useState();
  const [modal_center, setmodal_center] = useState(false)


  const breadcrumbItems = [
    { title: "Asa Service", link: "#" },
    { title: "Catering", link: "#" },
    { title: "Rating Caterings", link: "#" },
  ]

  function tog_center() {
    setmodal_center(!modal_center)
    document.body.setAttribute('style', 'display:inline !important');
  }

  function func_setmodal_center() {
    setmodal_center(false);
  }

  useEffect(() => {
    props.setBreadcrumbItems('Rating Caterings', breadcrumbItems);

    const fetchData = async () => {
      if (localStorage.getItem("authUser")) {
        const obj = JSON.parse(localStorage.getItem("authUser"))

        const headers = {
          'Authorization': "Bearer " + obj.access_token,
        };

        const response = await fetch(process.env.REACT_APP_DATABASEURL + '/api/catering/rating-catering-many', { headers });
        const data = await response.json();
        setData(data);
        console.log(data);
      }
    }

    fetchData()
      .catch(console.error);
  }, [])

  return (
    <React.Fragment>

      <MetaTags>
        <title>Rating Caterings</title>
      </MetaTags>


      {(modal_center) ? 
        <DetailRating 
          tog_center={tog_center}
          record={record}
          modal_center={modal_center}
          func_setmodal_center={func_setmodal_center}
        />
      : null }

      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <CardTitle className="h4">List of Rating for Catering</CardTitle>
              <p className="card-title-desc">
                Berisi list rating yang diberikan oleh user kepada layanan catering
              </p>

              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>NRP</th>
                      <th>Nama</th>
                      <th>Tanggal Rating</th>
                      <th>Saran</th>
                      <th>Total Point</th>
                      <th>Detail</th>
                    </tr>
                  </thead>
                  <tbody>

                    {data ? data.map((object, i) =>
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{object.user.nrp}</td>
                        <td>{object.user.name}</td>
                        <td>{new Date (object.created_at).toLocaleDateString()}</td>
                        <td>{object.saran}</td>
                        <td>{object.nilai1 + object.nilai2 + object.nilai3 + object.nilai4 + object.nilai5 + object.nilai6 + object.nilai7 + object.nilai8}</td>
                        <td style={{ width: "1px" }}>
                          <Button
                            color="secondary"
                            size="sm"
                            className="waves-effect waves-light"
                            type="button"
                            onClick={() => {
                              tog_center();
                              setRecord(object)
                            }}
                            data-toggle="modal"
                            data-target=".bs-example-modal-center"
                          >Lihat</Button>
                        </td>
                      </tr>
                    ) : null}
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
