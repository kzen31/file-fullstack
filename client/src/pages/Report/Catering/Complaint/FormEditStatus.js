import React, { useState } from 'react';
import { Modal } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from 'axios';

const FormEditStatus = ({ dataStatus, modal_center, tog_center, func_setmodal_center, fetchData }) => {
    const [loading, setLoading] = useState(false);

    function editStatus(value) {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        const config = {
            headers: {
                'Authorization': "Bearer " + obj.access_token
            }
        };
        const payload = {
            status: `${value.newStatus}`
        };
        const id = dataStatus.id;

        axios
            .put("http://asabeta.com/api/catering/update-status/" + `${id}`, payload, config)
            .then((response) => {
                console.log(response);
                tog_center();
                fetchData();
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Modal
            isOpen={modal_center}
            toggle={() => {
                tog_center()
            }}
            centered={true}
        >
            <AvForm
                onValidSubmit={(e, v) => {
                    editStatus(v);
                }}
            >
                <div className="modal-header">
                    <h5 className="modal-title mt-0">Edit Status</h5>
                    <button
                        type="button"
                        onClick={() => {
                            func_setmodal_center(false)
                        }}
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">

                    <div className="row mb-2">
                        <label htmlFor="horizontal-firstname-input" className="col-sm-6 col-form-label">Status</label>
                        <div className="col-sm-6">
                            <AvField type="select" name="newStatus" value={`${dataStatus.status}`}>
                                <option value="INQUIRY">INQUIRY</option>
                                <option value="INVESTIGATION">INVESTIGATION</option>
                                <option value="CLOSED">CLOSED</option>
                            </AvField>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        onClick={() => {
                            tog_center();
                            console.log(dataStatus);
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

export default FormEditStatus