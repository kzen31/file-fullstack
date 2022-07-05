import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function Excel(props) {
    const newProps = props.data.map(obj => {
        const total = {
            'total': obj.nilai1 + obj.nilai2 + obj.nilai3 + obj.nilai4 + obj.nilai5 + obj.nilai6 + obj.nilai7 + obj.nilai8,
            'tanggal': new Date(obj.created_at).toLocaleDateString(),
            'waktu': new Date(obj.created_at).toLocaleTimeString()
        }
        return { ...obj, ...obj.user, ...total }
    })

    return (
        <ExcelFile filename="Catering Rating" element={<button className="btn btn-success">Export Data To xlsx</button>}>
            <ExcelSheet data={newProps} name="Catering Rating">
                <ExcelColumn label="Nama" value="name" />
                <ExcelColumn label="NRP" value="nrp" />
                <ExcelColumn label="Department" value="department" />
                <ExcelColumn label="Tanggal" value="tanggal" />
                <ExcelColumn label="Waktu" value="waktu" />
                <ExcelColumn label="Nilai 1" value="nilai1" />
                <ExcelColumn label="Nilai 2" value="nilai2" />
                <ExcelColumn label="Nilai 3" value="nilai3" />
                <ExcelColumn label="Nilai 4" value="nilai4" />
                <ExcelColumn label="Nilai 5" value="nilai5" />
                <ExcelColumn label="Nilai 6" value="nilai6" />
                <ExcelColumn label="Nilai 7" value="nilai7" />
                <ExcelColumn label="Nilai 8" value="nilai8" />
                <ExcelColumn label="Total" value="total" />

            </ExcelSheet>
        </ExcelFile>
    );
}


export default Excel;
