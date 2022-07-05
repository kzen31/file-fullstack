import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function Excel(props) {
    const newProps = props.data.map(obj => {
        const tanggal = {
            'tanggal': new Date(obj.tanggal_aduan).toLocaleDateString(),
            'waktu': new Date(obj.tanggal_aduan).toLocaleTimeString()
        }
        return { ...obj, ...tanggal }
    })

    return (
        <ExcelFile filename="Catering Complaints" element={<button className="btn btn-success">Export Data To xlsx</button>}>
            <ExcelSheet data={newProps} name="Catering Complaints">
                <ExcelColumn label="Nama" value="user_name" />
                <ExcelColumn label="NRP" value="user_nrp" />
                <ExcelColumn label="Department" value="department" />
                <ExcelColumn label="Tanggal" value="tanggal" />
                <ExcelColumn label="Waktu" value="waktu" />
                <ExcelColumn label="Lokasi" value="lokasi" />
                <ExcelColumn label="Deskripsi" value="deskripsi" />
                <ExcelColumn label="Kritik dan Saran" value="kritik_saran" />
                <ExcelColumn label="Status" value="status" />
            </ExcelSheet>
        </ExcelFile>
    );
}


export default Excel;
