import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function Excel(props) {
    const newProps = props.data.map(obj => {
        const time = {
            'tanggal_l': new Date(obj.tanggal_aduan).toLocaleDateString(),
            'waktu_l': new Date(obj.tanggal_aduan).toLocaleTimeString(),
            'tanggal_a': new Date(obj.tanggal_aduan).toLocaleDateString(),
            'waktu_a': new Date(obj.tanggal_aduan).toLocaleTimeString()
        }
        return { ...obj, ...obj.user, ...time }
    })

    return (
        <ExcelFile filename="Laundry Complaints" element={<button className="btn btn-success">Export Data To xlsx</button>}>
            <ExcelSheet data={newProps} name="Laundry complaints">
                <ExcelColumn label="Nama" value="user_name" />
                <ExcelColumn label="NRP" value="user_nrp" />
                <ExcelColumn label="Department" value="department" />
                <ExcelColumn label="Tanggal" value="tanggal_a" />
                <ExcelColumn label="Waktu" value="waktu_a" />
                <ExcelColumn label="Mess" value="mess" />
                <ExcelColumn label="Nomor Kamar" value="no_kamar" />
                <ExcelColumn label="Jenis Pakaian" value="jenis_pakaian" />
                <ExcelColumn label="Jenis Deviasi" value="jenis_deviasi" />
                <ExcelColumn label="Tanggal laundry" value="tanggal_l" />
                <ExcelColumn label="Status" value="status" />
            </ExcelSheet>
        </ExcelFile>
    );
}


export default Excel;
