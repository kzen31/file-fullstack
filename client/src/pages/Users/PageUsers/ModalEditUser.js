import React from 'react';
import { Modal } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from 'axios';

const ModalEditUser = ({ modal_center, dataUser, fetchData, resetPassword, tog_center }) => {
    function editPassword(value) {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        const config = {
            headers: {
                'Authorization': "Bearer " + obj.access_token
            }
        };
        const payload = {
            "nrp" : `${dataUser.nrp}`,
            "password" : `${value.password}`
        }

        axios
            .put(process.env.REACT_APP_DATABASEURL + "/api/reset", payload, config)
            .then((response) => {
                tog_center();
                fetchData();
            })
            .catch(error => {
                console.log(error)
            })
    }

    function editDetailUser(value) {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        const config = {
            headers: {
                'Authorization': "Bearer " + obj.access_token
            }
        };
        const payload = value;

        axios
            .put(process.env.REACT_APP_DATABASEURL + "/api/edit/", payload, config)
            .then((response) => {
                tog_center();
                fetchData();
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        (resetPassword) ?
            <Modal
                isOpen={modal_center}
                toggle={() => {
                    tog_center()
                }}
                centered={true}
            >
                <AvForm
                    onValidSubmit={(e, v) => {
                        editPassword(v);
                    }}
                >
                    <div className="modal-header">
                        <h5 className="modal-title mt-0">Edit Data User</h5>
                        <button
                            type="button"
                            onClick={() => {
                                tog_center();
                            }}
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row mb-4">
                            <label htmlFor="horizontal-password-input" className="col-sm-4 col-form-label">Password</label>
                            <div className="col-sm-8">
                                <AvField
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    type="password"
                                    minLength="3"
                                    required
                                />

                            </div>
                        </div>
                        <div className="row mb-4">
                            <label htmlFor="horizontal-password-input" className="col-sm-4 col-form-label">Confirm Password</label>
                            <div className="col-sm-8">
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
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            onClick={() => {
                                tog_center();
                            }}
                            className="btn btn-secondary waves-effect"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary waves-effect waves-light"
                        >
                            Save changes
                        </button>
                    </div>
                </AvForm>
            </Modal>
            :
            <Modal
                isOpen={modal_center}
                toggle={() => {
                    tog_center()
                }}
                centered={true}
            >
                <AvForm
                    onValidSubmit={(e, v) => {
                        editDetailUser(v);
                    }}
                >
                    <div className="modal-header">
                        <h5 className="modal-title mt-0">Edit Data User</h5>
                        <button
                            type="button"
                            onClick={() => {
                                tog_center();
                            }}
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row mb-1">
                            <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">NRP</label>
                            <div className="col-sm-9">
                                <AvField
                                    name="nrp"
                                    className="form-control"
                                    placeholder="Enter NRP"
                                    type="text"
                                    value={dataUser.nrp}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">Nama</label>
                            <div className="col-sm-9">
                                <AvField
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter Nama"
                                    type="text"
                                    value={dataUser.name}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">Role</label>
                            <div className="col-sm-9">
                                <AvField type="select" name="role" value={dataUser.authorities[2].authority.slice(5, 20)} required>
                                    <option value="" selected disabled hidden>Choose one</option>
                                    <option value="CUS">CUSTOMER</option>
                                    <option value="MT">MT</option>
                                    <option value="HK">HK</option>
                                    <option value="SPV">SPV</option>
                                    <option value="GS">GS</option>
                                    <option value="HCGS">HCGS</option>
                                    <option value="PROG">PROG</option>
                                </AvField>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">Department</label>
                            <div className="col-sm-9">
                                <AvField
                                    name="department"
                                    className="form-control"
                                    placeholder="Enter Department"
                                    type="text"
                                    value={dataUser.department}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            onClick={() => {
                                tog_center();
                            }}
                            className="btn btn-secondary waves-effect"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary waves-effect waves-light"
                        >
                            Save changes
                        </button>
                    </div>
                </AvForm>
            </Modal>
    )
}

export default ModalEditUser
