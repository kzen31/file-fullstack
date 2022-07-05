import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function Excel(props) {
    const newProps = props.data.map(obj => {
        const Time = {
            'tanggal': new Date(obj.created_at).toLocaleDateString(),
            'waktu': new Date(obj.created_at).toLocaleTimeString()
        }
        return { ...obj, ...Time }
    })

    return (
        <ExcelFile filename="Housekeeping Complaints" element={<button className="btn btn-success">Export Data To xlsx</button>}>
            <ExcelSheet data={newProps} name="Housekeeping complaints">
                <ExcelColumn label="Nama" value="user_name" />
                <ExcelColumn label="NRP" value="user_nrp" />
                <ExcelColumn label="Depatrment" value="department" />
                <ExcelColumn label="Tanggal" value="tanggal" />
                <ExcelColumn label="Waktu" value="waktu" />
                <ExcelColumn label="Lokasi" value="lokasi" />
                <ExcelColumn label="Deskripsi Aduan" value="deskripsi" />
                <ExcelColumn label="Status" value="status" />
            </ExcelSheet>
        </ExcelFile>
    );
}

export default Excel;
