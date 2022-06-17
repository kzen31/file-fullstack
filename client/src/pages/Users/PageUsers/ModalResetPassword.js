import React from 'react'
import { Modal } from "reactstrap"
import { AvForm, AvField } from 'availity-reactstrap-validation';

const ModalEditUser = (props) => {

    return (
        <Modal
            isOpen={props.modal_center}
            toggle={() => {
                props.tog_center()
            }}
            centered={true}
        >
            <div className="modal-header">
                <h5 className="modal-title mt-0">Edit Data User</h5>
                <button
                    type="button"
                    onClick={() => {
                        props.tog_center();
                    }}
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <AvForm>
                    <div className="row mb-1">
                        <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">NRP</label>
                        <div className="col-sm-9">
                            <AvField
                                name="nrp"
                                className="form-control"
                                placeholder="Enter NRP"
                                type="text"
                                value={props.dataUser.nrp}
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
                                value={props.dataUser.name}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">Role</label>
                        <div className="col-sm-9">
                            <AvField type="select" name="role" value={props.dataUser.authorities[1].authority.slice(5, 20)} required>
                                <option value="" selected disabled hidden>Choose one</option>
                                <option value="SUPERUSER">SUPERUSER</option>
                                <option value="MEGAUSER">MEGAUSER</option>
                                <option value="WORKER">WORKER</option>
                                <option value="CUSTOMER">CUSTOMER</option>
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
                                value={props.dataUser.department}
                                required
                            />
                        </div>
                    </div>
                </AvForm>
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    onClick={() => {
                        props.tog_center();
                    }}
                    className="btn btn-secondary waves-effect"
                    data-dismiss="modal"
                >
                    Close
                </button>
                <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light"
                >
                    Save changes
                </button>
            </div>
        </Modal>
    )
}

export default ModalEditUser
