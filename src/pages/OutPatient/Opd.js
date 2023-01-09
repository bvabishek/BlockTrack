import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import DialogOpd from "./DialogOpd";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

//redux

const Opd = props => {
  // const [formData, setFormData] = useState({
  //   pid: "",
  //   name: "",
  //   gender: "",
  //   contact: "",
  //   consultant: "",
  //   bed: "",
  //   age: ""
  // });

  // const onChange=(e)=>{
  //   const {value,id}=e.target
  //   setFormData({...formData,[id]:value})
  // };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const rowData = [
    {
      patientid: "111",
      name: "Abishek",
      gender: "Male",
      contact: "9962313564",
      consultant: "Prabu",
      lastvisit: "01/01",
      totalrecheckup: "3",
      age: "22",
    },
    {
      patientid: "222",
      name: "Akhil",
      gender: "Male",
      contact: "9962313564",
      consultant: "Prabu",
      lastvisit: "01/01",
      totalrecheckup: "3",
      age: "22",
    },
    {
      patientid: "333",
      name: "venkat",
      gender: "Male",
      contact: "9962313564",
      consultant: "Prabu",
      lastvisit: "01/01",
      totalrecheckup: "3",
      age: "22",
    },
    {
      patientid: "444",
      name: "shankar",
      gender: "Male",
      contact: "9962313564",
      consultant: "Prabu",
      lastvisit: "01/01",
      totalrecheckup: "3",
      age: "22",
    },
  ];
  const columnDefs = [
    {
      headerName: "Patient ID",
      field: "patientid",
      filter: "agSetColumnFilter",
      cellStyle: {color: 'red', fontWeight: '500', backgroundColor: '#EEEEEE'}
    },
    { headerName: "Name", field: "name" },
    { headerName: "Gender", field: "gender" },
    { headerName: "Contact", field: "contact" },
    { headerName: "Consultant", field: "consultant" },
    { headerName: "Last visit", field: "lastvisit" },
    { headerName: "Age", field: "age" },
    { headerName: "Total Recheckup", field: "totalrecheckup" },
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
            title={props.t("OPD")}
            breadcrumbItem={props.t("Out Patient")}
          />

          <DialogOpd open={open} handleClose={handleClose} />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <button className="btn btn-secondary" onClick={handleClickOpen}>
              Add Outpatient
            </button>
          </div>
        </Container>
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

export default withTranslation()(Opd);
