import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function Excel(props) {
    const newProps = props.data.map(obj => {
        const time = {
            'tanggal': new Date(obj.created_at).toLocaleDateString(),
            'waktu': new Date(obj.created_at).toLocaleTimeString(),
        }
        return { ...obj, ...time }

    })

    return (
        <ExcelFile filename="Maintenance Task" element={<button className="btn btn-success">Export Data To xlsx</button>}>
            <ExcelSheet data={newProps} name="Task Maintenance">
                <ExcelColumn label="Nama" value="user_name" />
                <ExcelColumn label="NRP" value="user_nrp" />
                <ExcelColumn label="Department" value="department" />
                <ExcelColumn label="Tanggal" value="tanggal" />
                <ExcelColumn label="Waktu" value="waktu" />
                <ExcelColumn label="Jenis Aset" value="jenis_aset" />
                <ExcelColumn label="Lokasi Aset" value="lokasi_aset" />
                <ExcelColumn label="Status" value="status" />
                <ExcelColumn label="Keterangan" value="keterangan" />
            </ExcelSheet>
        </ExcelFile>
    );
}


export default Excel;
