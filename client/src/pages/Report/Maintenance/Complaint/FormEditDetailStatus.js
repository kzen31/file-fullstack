import React, { useState, useEffect } from 'react';
import { Modal, Form } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from 'axios';

const FormEdit = ({ dataStatus, modal_center, tog_center, func_setmodal_center, fetchData }) => {
    const [listMt, setListMt] = useState(null);

    const fetchDataUserMt = async () => {
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser"))

            const headers = {
                'Authorization': "Bearer " + obj.access_token,
            };

            const response = await fetch(process.env.REACT_APP_DATABASEURL + '/api/users/mt', { headers });
            const data = await response.json();
            setListMt(data);
        }
    } 

    function editDetailStatus(value) {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        const config = {
            headers: {
                'Authorization': "Bearer " + obj.access_token
            }
        };
        const payload = {
            status: `${value.newStatus}`,
            priority: `${value.priority}`,
            duration: `${value.duration}`,
            picnrp: `${value.picnrp}`
        };
        const id = dataStatus.id;

        axios
            .put("http://asabeta.com/api/maintenance/update-order/" + `${id}`, payload, config)
            .then((response) => {
                console.log(response);
                tog_center();
                fetchData();
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchDataUserMt()
            .catch(console.error);;
    }, [])


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
                    editDetailStatus(v);
                    console.log(v);
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
                    <div className="row mb-1">
                        <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">PIC</label>
                        <div className="col-sm-9">
                            {(listMt) ?
                                <AvField type="select" name="picnrp" value={(dataStatus.pic_nrp) ? `${dataStatus.pic_nrp}` : ""} required>
                                    <option value="" disabled hidden>Choose One</option>
                                    {listMt.map((object, i) =>
                                        <option key={i} value={`${object.nrp}`}>{object.nrp} {object.name}</option>
                                    )}
                                </AvField>
                                : null}
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">Durasi</label>
                        <div className="col-sm-9">
                            <AvField type="date" name="duration" value={(dataStatus.duration) ? `${dataStatus.duration.substring(0, 10)}` : ""} required />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">Priority</label>
                        <div className="col-sm-9">
                            <AvField type="select" name="priority" value={(dataStatus.priority) ? `${dataStatus.priority}` : ""} required>
                                <option value="" selected disabled hidden>Choose One</option>
                                <option value="IMPORTANT">Important</option>
                                <option value="CRITICAL">Critical</option>
                                <option value="IMPORTANT_CRITICAL">Important & Critical</option>
                            </AvField>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">Status</label>
                        <div className="col-sm-9">
                            <AvField type="select" name="newStatus" value={`${dataStatus.status}`} required>
                                <option value="OPEN">OPEN</option>
                                <option value="PROGRESS">PROGRESS</option>
                                <option value="HOLD">HOLD</option>
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

export default FormEdit