import React from 'react';
import { Modal } from "reactstrap";
import FormEditTask from "./FormEditTask";
import axios from 'axios';
import { AvForm } from 'availity-reactstrap-validation';

const EditModal = ({ dataModal, modal_standard, tog_standard, func_setmodal_standard, fetchData }) => {
    let updateData = null;

    function editDetailRecord(value) {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        const config = {
            headers: {
                'Authorization': "Bearer " + obj.access_token
            }
        };
        const payload = value;
        const id = dataModal.id;

        if (dataModal.no_kamar) {
            updateData = "room";
        } else {
            updateData = "mess";
        }

        console.log(dataModal.no_kamar);
        console.log(updateData);
        

        axios
            .put(process.env.REACT_APP_DATABASEURL + "/api/task/" + `${updateData}` +  "-update/" + `${id}`, payload, config)
            .then((response) => {
                console.log(response);
                tog_standard();
                fetchData();
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    return (
        <Modal
            isOpen={modal_standard}
            toggle={() => {
                tog_standard()
            }}
        >
            <AvForm
                onValidSubmit={(e, v) => {
                    console.log(v);
                    editDetailRecord(v);
                }}
            >
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myModalLabel">
                        {dataModal.mess} {(dataModal.no_kamar) ? "(" + dataModal.no_kamar + ")" : null} {new Date(dataModal.created_at).toLocaleString()}
                    </h5>
                    <button
                        type="button"
                        onClick={() => {
                            func_setmodal_standard();
                        }}
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body">
                    <FormEditTask dataModal={dataModal} />
                </div>

                <div className="modal-footer">
                    <button
                        type="button"
                        onClick={() => {
                            tog_standard();
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

export default EditModal