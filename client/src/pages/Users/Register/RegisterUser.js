import React, { useEffect, useState, useRef, useCallback } from "react"
import MetaTags from 'react-meta-tags';
import * as XLSX from 'xlsx';

import { connect } from "react-redux";
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';



import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
} from "reactstrap"

import { setBreadcrumbItems } from "../../../store/actions";

const RegisterUsers = (props) => {
    const [userData, setUserData] = useState([]);
    const ref = useRef();

    const breadcrumbItems = [
        { title: "Asa Service", link: "#" },
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
        setUserData(newArray)
    }

    const reset = () => {
        ref.current.value = "";
        // preventDefault();
    };

    useEffect(() => {
        props.setBreadcrumbItems('Register', breadcrumbItems)
    })

    return (
        <React.Fragment>
            <MetaTags>
                <title>Register</title>
            </MetaTags>
            <Row>
                <Col lg={7}>
                    <Card>
                        <CardBody>
                            <h4 className="card-title">Manual Register</h4>
                            <Row>
                                <Col className="ms-lg-auto">
                                    <div className="mt-5 mt-lg-4">
                                        <AvForm
                                            className="form-horizontal mt-4"
                                            onValidSubmit={(e, v) => {
                                                console.log(v);
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
                                                        <option value="SUPERUSER">SUPERUSER</option>
                                                        <option value="MEGAUSER">MEGAUSER</option>
                                                        <option value="WORKER">WORKER</option>
                                                        <option value="CUSTOMER">CUSTOMER</option>
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
                                        ref={ref}
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
                                                if (userData) {
                                                    console.log(userData);
                                                    e.preventDefault();
                                                    setUserData(null);
                                                    reset();
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