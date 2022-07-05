import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function Excel(props) {
    const newProps = props.data.map(obj => {
        const time = {
            'tanggal_a': new Date(obj.tanggal_aduan).toLocaleDateString(),
            'waktu_a': new Date(obj.tanggal_aduan).toLocaleTimeString(),
            'tanggal_d': new Date(obj.duration).toLocaleDateString(),
            'waktu_d': new Date(obj.duration).toLocaleTimeString()
        }
        return { ...obj, ...obj.user, ...time }
    })

    return (
        <ExcelFile filename="Maintenance Complaints" element={<button className="btn btn-success">Export Data To xlsx</button>}>
            <ExcelSheet data={newProps} name="Complaints Maintenance">
                <ExcelColumn label="Nama" value="user_name" />
                <ExcelColumn label="NRP" value="user_nrp" />
                <ExcelColumn label="Department" value="department" />
                <ExcelColumn label="Tanggal" value="tanggal_a" />
                <ExcelColumn label="Waktu" value="waktu_a" />
                <ExcelColumn label="Lokasi" value="lokasi" />
                <ExcelColumn label="Jenis Aduan" value="jenis_aduan" />
                <ExcelColumn label="Priority Scale" value="priority" />
                <ExcelColumn label="Duration Date" value="tanggal_d" />
                <ExcelColumn label="Duration Time" value="waktu_d" />
                <ExcelColumn label="Status" value="status" />
            </ExcelSheet>
        </ExcelFile>
    );
}


export default Excel;
