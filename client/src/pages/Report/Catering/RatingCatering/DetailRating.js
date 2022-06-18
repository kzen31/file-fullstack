import React from 'react'
import { Modal, Table } from "reactstrap"

const DetailRating = ({ modal_center, tog_center, record, func_setmodal_center }) => {
    return (
        <Modal
            isOpen={modal_center}
            toggle={() => {
                tog_center()
            }}
            centered={true}
        >
            <div className="modal-header">
                <h5 className="modal-title mt-0">Detail Poin Rating</h5>
                <button
                    type="button"
                    onClick={() => {
                        func_setmodal_center();
                    }}
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <Table className="table mb-0">
                <thead>
                    <tr>
                        <th>P1</th>
                        <th>P2</th>
                        <th>P3</th>
                        <th>P4</th>
                        <th>P5</th>
                        <th>P6</th>
                        <th>P7</th>
                        <th>P8</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{record.nilai1}</th>
                        <th>{record.nilai2}</th>
                        <th>{record.nilai3}</th>
                        <th>{record.nilai4}</th>
                        <th>{record.nilai5}</th>
                        <th>{record.nilai6}</th>
                        <th>{record.nilai7}</th>
                        <th>{record.nilai8}</th>
                    </tr>
                </tbody>
            </Table>
        </Modal>
    )
}

export default DetailRating