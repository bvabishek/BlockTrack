import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useMemo, useState, useCallback, useRef, } from "react";
import AlertDialog from "./Dialog/Dialog";
import api from "services/Api";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { withTranslation } from "react-i18next";
import 'ag-grid-enterprise';


//redux

const initialValue = {
  //reset the form to initial value
  name: "",
  age: "",
  gender: "",
  contact: "",
  bloodgroup: "",
  Appointmentno: "",
  Appointmentdate: "",
  priority: "",
};

const Appointment = props => {
  const gridRef = useRef();

  const [tableData, setTableData] = useState(null);

  const [formData, setFormData] = useState(initialValue);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    //dialog open
    setOpen(true);
  };

  const handleClose = () => {
    //dialog close
    setOpen(false);
  };

  const onChange = e => {
    //catch the parameters when changed.
    const { value, id } = e.target
    setFormData({ ...formData, [id]: value });
  };

  const columnDefs = [
    { headerName: "Name", field: "name", filter: "agSetColumnFilter" },
    { headerName: "Age", field: "age" },
    { headerName: "Gender", field: "gender" },
    { headerName: "Contact", field: "contact" },
    { headerName: "Blood group", field: "bloodgroup" },
    { headerName: "Appt. No.", field: "Appointmentno" ,cellStyle: {color: 'blue', fontWeight: '500', backgroundColor: '#D6E4E5'}},
    { headerName: "Appt. Date", field: "Appointmentdate" },
    { headerName: "Priority", field: "priority" },
    {headerName: "Actions", field: "id", cellRendererFramework:(params)=><div>
      <button className="btn btn-danger btn-sm" onClick={()=>handleDelete(params.value)}>
      <i className="fas fa-trash"></i>
      </button>
    </div> }
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  );

  useEffect(() => {
    // getUsers from json
    getUsers()
  }, []);

  const getUsers = () => {
    api.getUser().then(res => setTableData(res.data));
    api.http
  };

  function handleFormSubmit() {
    //for posting and getting data at a sametime
    api.postUser(formData).then(resp => {
      console.log(resp);
    })
    handleClose();

    api
      .getUser({ headers: { "content-type": "application/json" } })
      .then(resp => {
        getUsers();
        setFormData(initialValue);
        preventDefault();
      });
  };

  const onGridReady = useCallback((params) => {
    api.getUser()
      .then((resp) => resp.data())
      .then((data) => {
        setRowData(data);
      });
  }, []);

  const onBtnExport = useCallback(() => {
    gridRef.current.api.exportDataAsExcel();
  }, []);
  
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Appointment")}
            breadcrumbItem={props.t("Appointment")}
          />
          <div style={{display:"flex", alignItems: "flex-end", justifyContent: "flex-end"}}>
          <button
            className="btn btn-primary bg-soft"
            onClick={handleClickOpen}
            style={{ marginRight: "15px" }}
          >
            Add Appointment
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => onBtnExport()}
          >
          <i className="far fa-file-excel fa-md" style={{paddingRight: "6px"}}></i>
          Export
          </button>
          </div>
         
        </Container>

        <div
          className="ag-theme-alpine"
          style={{ height: 500, marginTop: "20px" }}
        >
          <AgGridReact
            ref={gridRef}
            rowData={tableData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
          />
          <AlertDialog
            open={open}
            handleClose={handleClose}
            data={formData}
            onChange={onChange}
            handleFormSubmit={handleFormSubmit}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(Appointment);
