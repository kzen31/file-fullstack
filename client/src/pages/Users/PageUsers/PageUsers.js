import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import SweetAlert from "react-bootstrap-sweetalert"

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
import { setBreadcrumbItems } from "../../../store/actions";
import ModalEditUser from "./ModalEditUser";

const PageUsers = (props) => {
    const [users, setUsers] = useState([]);
    const [userToDelete, setUserToDelete] = useState(null);
    const [success_dlg, setsuccess_dlg] = useState(false)
    const [dynamic_title, setdynamic_title] = useState("")
    const [dynamic_description, setdynamic_description] = useState("")
    const [confirm_both, setconfirm_both] = useState(false)
    const [error_dlg, seterror_dlg] = useState(false)
    const [modal_center, setmodal_center] = useState(false)
    const [dataUser, setDataUser] = useState(null)
    const [resetPassword, setResetPassword] = useState(false)


    const breadcrumbItems = [
        { title: "Asa Service", link: "#" },
        { title: "Users", link: "#" },
        { title: "Accounts", link: "#" },
    ]

    function tog_center() {
        setmodal_center(!modal_center)
        document.body.setAttribute('style', 'display:inline !important');
    }

    function setResetFunction() {
        setResetPassword(false);
    }

    function setDataUserFunction() {
        setDataUser(null);
    }

    const fetchData = async () => {
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser"))

            const headers = {
                'Authorization': "Bearer " + obj.access_token,
            };

            const response = await fetch(process.env.REACT_APP_DATABASEURL + '/api/users', { headers });
            const data = await response.json();
            setUsers(data);
        }
    }

    useEffect(() => {
        props.setBreadcrumbItems('Accounts', breadcrumbItems)
        fetchData()
            .catch(console.error);
    }, [])

    return (
        <React.Fragment>
            <MetaTags>
                <title>Accounts</title>
            </MetaTags>

            {success_dlg ? (
                <SweetAlert
                    success
                    title={dynamic_title}
                    onConfirm={() => {
                        setsuccess_dlg(false)
                        document.body.setAttribute('style', 'padding-right: 0px;');
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
                        console.log(userToDelete)
                        setconfirm_both(false)
                        setsuccess_dlg(true)
                        setdynamic_title("Deleted")
                        setdynamic_description("User has been deleted.")
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

            {(dataUser) ?
                <ModalEditUser
                    dataUser={dataUser}
                    modal_center={modal_center}
                    tog_center={tog_center}
                    fetchData={fetchData}
                    resetPassword={resetPassword}
                /> : null}

            <Row>
                <Col lg={12}>
                    <Card>
                        <CardBody>
                            <CardTitle className="h4">List of Users </CardTitle>
                            <p className="card-title-desc">
                                Berisi list dari user yang teregistrasi
                            </p>

                            <div className="table-responsive">
                                <Table className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>NRP</th>
                                            <th>Name</th>
                                            <th>Role</th>
                                            <th>Department</th>
                                            <th>Dibuat</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(users) ? users.map((object, i) =>
                                            <tr key={i}>
                                                <th scope="row">{i + 1}</th>
                                                <td>{object.nrp}</td>
                                                <td>{object.name}</td>
                                                <td>{object.authorities[2].authority.slice(5, 20)}</td>
                                                <td>{object.department}</td>
                                                <td>{new Date(object.created_at).toLocaleDateString()}</td>
                                                <td style={{ width: "185px" }}>
                                                    <Button
                                                        color="secondary"
                                                        size="sm"
                                                        className="waves-effect waves-light"
                                                        onClick={() => {
                                                            setDataUser(object);
                                                            setResetFunction();
                                                            tog_center();
                                                        }}
                                                    >
                                                        Edit
                                                    </Button> <span> </span>
                                                    <Button
                                                        color="primary"
                                                        size="sm"
                                                        className="waves-effect waves-light"
                                                        onClick={() => {
                                                            setDataUser(object);
                                                            setResetPassword(true);
                                                            tog_center();
                                                        }}
                                                    >
                                                        Reset
                                                    </Button> <span> </span>
                                                    <Button
                                                        color="danger"
                                                        size="sm"
                                                        onClick={() => {
                                                            setconfirm_both(true)
                                                            setUserToDelete(object.nrp)
                                                            document.body.setAttribute('style', 'padding-right: 17px;');
                                                        }}
                                                        id="sa-success"
                                                    >
                                                        Delete
                                                    </Button>

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

export default connect(null, { setBreadcrumbItems })(PageUsers);