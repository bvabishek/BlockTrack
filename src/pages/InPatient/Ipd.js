import React, { useState } from "react";
import { Container } from "reactstrap";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import FormDialog from "./DialogNew";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

//redux

const Ipd = props => {
  const [formData, setFormData] = useState({
    ipdno: "",
    name: "",
    gender: "",
    contact: "",
    consultant: "",
    bed: "",
    age: "",
    medicalissue: "",
  });

  const onChange = (e) => {
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = () => {

  };

  const rowData = [
    {
      ipdno: "100",
      name: "Abishek",
      gender: "Male",
      contact: "9962313564",
      consultant: "Prabu",
      bed: "214",
      medicalissue: "cold",
      age: "22",
    },
    {
      ipdno: "200",
      name: "Shyam",
      gender: "Male",
      contact: "9962313564",
      consultant: "Prabu",
      bed: "215",
      medicalissue: "cold",
      age: "22",
    },
    {
      ipdno: "300",
      name: "Prasath",
      gender: "Male",
      contact: "9962313564",
      consultant: "Prabu",
      bed: "216",
      medicalissue: "cold",
      age: "22",
    },

  ];
  const columnDefs = [
    { headerName: "IPD No.", field: "ipdno", filter: "agSetColumnFilter", cellStyle: {color: 'blue', fontWeight: '500', backgroundColor: '#EEEEEE'}},
    { headerName: "Name", field: "name" },
    { headerName: "Gender", field: "gender" },
    { headerName: "Contact", field: "contact" },
    { headerName: "Consultant", field: "consultant" },
    { headerName: "Bed", field: "bed" },
    { headerName: "Age", field: "age" },
    { headerName: "Medical issue", field: "medicalissue" },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("IPD")}
            breadcrumbItem={props.t("In Patient")}
          />
          <FormDialog open={open} handleClose={handleClose} onChange={onChange} data={formData} handleFormSubmit={handleFormSubmit} />
        </Container>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <button className="btn btn-primary" onClick={handleClickOpen}>
            + Add Patient
          </button>
        </div>

        <div
          className="ag-theme-balham"
          style={{ height: 500, marginTop: "20px" }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(Ipd);
