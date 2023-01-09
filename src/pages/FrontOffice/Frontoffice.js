import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import VisitorDialog from "./visitorDialog";

//redux

const Frontoffice = props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const rowData = [
    { purpose: 'Inquiry', name: 'Hari', visit: 'Patient', ios: 'IPD', phone: '9948478901', date: '02/01', it: '9.30 AM', ot: '10.30 AM' },
    { purpose: 'Seminar', name: 'venkat', visit: 'Patient', ios: 'IPD', phone: '9948478901', date: '02/01', it: '9.30 AM', ot: '10.30 AM' },
    { purpose: 'Visit', name: 'sabari', visit: 'Patient', ios: 'IPD', phone: '9948478901', date: '02/01', it: '9.30 AM', ot: '10.30 AM' },
    { purpose: 'Inquiry', name: 'Gokul', visit: 'Patient', ios: 'IPD', phone: '9948478901', date: '02/01', it: '9.30 AM', ot: '10.30 AM' },
    { purpose: 'Visit', name: 'shiam', visit: 'Patient', ios: 'IPD', phone: '9948478901', date: '02/01', it: '9.30 AM', ot: '10.30 AM' },

  ];

  const columnDefs = [
    { headerName: 'Purpose', field: 'purpose' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Visit To', field: 'visit' },
    { headerName: 'IPD/OPD/Staff', field: 'ios' },
    { headerName: 'Phone', field: 'phone' },
    { headerName: 'Date', field: 'date' },
    { headerName: 'In Time', field: 'it' },
    { headerName: 'Out Time', field: 'ot' },

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
            title={props.t("Front Office")}
            breadcrumbItem={props.t("Front office")}
          />
          <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <button className="btn btn-success" style={{marginRight: '10px'}} onClick={handleClickOpen}>Add Visitor</button>
            <Link to='/calls'><button className="btn btn-outline-secondary" style={{marginRight: '10px'}}><i className="fas fa-align-justify"></i>&nbsp; Phone-call log</button></Link>
            <Link to='/complain'><button className="btn btn-outline-secondary"><i className="fas fa-bullhorn"></i>&nbsp; Complain</button></Link>
          </div>
          <VisitorDialog 
            open={open}
            handleClose={handleClose}
          />
          <div className="ag-theme-balham"
            style={{ height: 500, marginTop: "20px" }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
            />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(Frontoffice);