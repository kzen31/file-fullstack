import React, { useEffect, useState, useRef } from "react";
import MetaTags from 'react-meta-tags';
import * as XLSX from 'xlsx';
import axios from 'axios';

import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import { AvForm, AvField } from 'availity-reactstrap-validation';

import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
} from "reactstrap"

import { setBreadcrumbItems } from "../../../store/actions";

const RegisterUsers = (props) => {
    const [usersData, setUsersData] = useState([]);
    const [userData, setUserData] = useState(null);
    const [success_dlg, setsuccess_dlg] = useState(false)
    const [dynamic_title, setdynamic_title] = useState("")
    const [dynamic_description, setdynamic_description] = useState("")
    const [confirm_both, setconfirm_both] = useState(false)
    const [error_dlg, seterror_dlg] = useState(false)
    const [modal_center, setmodal_center] = useState(false)
    const refUsers = useRef();
    const refUser = useRef();

    const [renderForm, setRenderForm] = useState(true);

    const breadcrumbItems = [
        { title: "ASA Website", link: "#" },
        { title: "Users", link: "#" },
        { title: "Register", link: "#" },
    ]

    const onChange = (e) => {

        const [file] = e.target.files;
        const reader = new FileReader();

        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: "binary" });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            processCSV(data);
        };
        reader.readAsBinaryString(file);
    };

    const processCSV = (str, delim = ',') => {
        const headers = str.slice(0, str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n') + 1).split('\n');

        const newArray = rows.map(row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })
        setUsersData(newArray)
    }

    const resetUsers = () => {
        refUsers.current.value = "";
    };

    const resetUser = () => {
        setRenderForm(false);
        setRenderForm(true);
    };

    function tog_center() {
        setmodal_center(!modal_center)
        document.body.setAttribute('style', 'display:inline !important');
    }

    function createUsers(value) {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        const config = {
            headers: {
                'Authorization': "Bearer " + obj.access_token
            }
        };
        const payload = value;

        axios
            .post(process.env.REACT_APP_DATABASEURL + "/api/regis-many", payload, config)
            .then((response) => {
                setUsersData(null);
                setconfirm_both(false)
                setsuccess_dlg(true)
            })
            .catch(error => {
                console.log(error)
            })
    }

    function createUser(value) {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        const config = {
            headers: {
                'Authorization': "Bearer " + obj.access_token
            }
        };
        const payload = value;

        axios
            .post(process.env.REACT_APP_DATABASEURL + "/api/regis", payload, config, { timeout: 1 })
            .then((response) => {
                setconfirm_both(false);
                setsuccess_dlg(true);
                setUserData(null);
                resetUser();
            })
            .catch(error => {
                if ( error.message == 'Network Error') setdynamic_description("Network Error");
                else setdynamic_description("NRP already exist");
                setdynamic_title("Failed");
                setconfirm_both(false);
                seterror_dlg(true);
                setUserData(null);
                resetUser();
            })
    }

    useEffect(() => {
        props.setBreadcrumbItems('Register', breadcrumbItems)
    })

    return (
        <React.Fragment>
            <MetaTags>
                <title>Register</title>
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
                        if (userData) {
                            createUser(userData);

                        }
                        else {
                            createUsers(usersData);
                        }
                        setdynamic_title("Created");
                        setconfirm_both(false);
                        setdynamic_description("User has been created.");
                    }}
                    onCancel={() => {
                        setconfirm_both(false);
                        setsuccess_dlg(true);
                        setdynamic_title("Cancelled");
                        setdynamic_description("Add user another time.");
                    }}
                >
                    {(userData) ? 'Carefull in filling the form' : 'Make sure to use given template file!'}
                </SweetAlert>
            ) : null}

            <Row>
                <Col lg={7}>
                    <Card>
                        <CardBody>
                            <h4 className="card-title">Manual Register</h4>
                            {(renderForm) ?
                                <Row>
                                    <Col className="ms-lg-auto">
                                        <div className="mt-5 mt-lg-4">
                                            <AvForm
                                                className="form-horizontal mt-4"
                                                ref={refUser}
                                                onValidSubmit={(e, v) => {
                                                    setUserData(v);
                                                    tog_center();
                                                    setconfirm_both(true)
                                                }}
                                            >
                                                <div className="row mb-4">
                                                    <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">NRP</label>
                                                    <div className="col-sm-9">
                                                        <AvField
                                                            name="nrp"
                                                            className="form-control"
                                                            placeholder="Enter NRP"
                                                            type="text"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">Nama Lengkap</label>
                                                    <div className="col-sm-9">
                                                        <AvField
                                                            name="name"
                                                            className="form-control"
                                                            placeholder="Enter Full Name"
                                                            type="text"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row mb-4">
                                                    <label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">Department</label>
                                                    <div className="col-sm-9">
                                                        <AvField
                                                            name="department"
                                                            className="form-control"
                                                            placeholder="Enter Department"
                                                            type="text"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">Role</label>
                                                    <div className="col-sm-9">
                                                        <AvField type="select" name="role" required>
                                                            <option value="" selected disabled hidden>Choose one</option>
                                                            <option value="HCGS">HCGS</option>
                                                            <option value="PROG">PROG</option>
                                                            <option value="GS">GS</option>
                                                            <option value="SPV">SPV</option>
                                                            <option value="HK">HK</option>
                                                            <option value="MT">MT</option>
                                                            <option value="CUS">CUS</option>
                                                        </AvField>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Password</label>
                                                    <div className="col-sm-9">
                                                        <AvField
                                                            name="password"
                                                            className="form-control"
                                                            placeholder="Enter Password"
                                                            type="password"
                                                            minLength="5"
                                                            required
                                                        />

                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Confirm Password</label>
                                                    <div className="col-sm-9">
                                                        <AvField
                                                            name="confirmPassword"
                                                            className="form-control"
                                                            placeholder="Enter Confirm Password"
                                                            type="password"
                                                            required
                                                            validate={{ match: { value: 'password' } }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row justify-content-end">
                                                    <div className="col-sm-9">
                                                        <button type="submit" className="btn btn-primary w-md">Create</button>
                                                    </div>
                                                </div>
                                            </AvForm>
                                        </div>
                                    </Col>
                                </Row>
                                : null}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={5}>
                    <Card>
                        <CardBody>
                            <h4 className="card-title">Automatic Register</h4>
                            <p className="card-title-desc"> </p>

                            <form action="#">
                                <div className="mb-4">
                                    <label className="form-lable">Upload File Excel Here!</label>
                                    <input
                                        ref={refUsers}
                                        type="file"
                                        accept='.xlsx'
                                        className="form-control form-control-file"
                                        data-buttonname="btn-secondary"
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="row justify-content-end">
                                    <div>
                                        <Button
                                            type="submit"
                                            color="primary"
                                            className="btn btn-primary w-md"
                                            accept='.xlxs'
                                            onClick={(e) => {
                                                if (usersData) {
                                                    e.preventDefault();
                                                    tog_center();
                                                    setconfirm_both(true)
                                                    resetUsers();
                                                }
                                            }}
                                        >
                                            Create
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>

            </Row>
        </React.Fragment>
    )
}

export default connect(null, { setBreadcrumbItems })(RegisterUsers);