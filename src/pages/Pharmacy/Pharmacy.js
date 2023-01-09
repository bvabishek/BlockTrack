import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react"; 
import {Link} from 'react-router-dom';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

//redux

const Pharmacy = props => {

  const rowData = [
    { billno: 'PHARMAB100', caseid: '202201', date: '04/01', patientname: 'Venkat', doctorname: 'krishnamoorthy', amountpaid: '300', discount: '(30.00)10%' },
    { billno: 'PHARMAB100', caseid: '202201', date: '04/01', patientname: 'Venkat', doctorname: 'krishnamoorthy', amountpaid: '300', discount: '(30.00)10%' },
    { billno: 'PHARMAB100', caseid: '202201', date: '04/01', patientname: 'Venkat', doctorname: 'krishnamoorthy', amountpaid: '300', discount: '(30.00)10%' },
    { billno: 'PHARMAB100', caseid: '202201', date: '04/01', patientname: 'Venkat', doctorname: 'krishnamoorthy', amountpaid: '300', discount: '(30.00)10%' },
    { billno: 'PHARMAB100', caseid: '202201', date: '04/01', patientname: 'Venkat', doctorname: 'krishnamoorthy', amountpaid: '300', discount: '(30.00)10%' },
    { billno: 'PHARMAB100', caseid: '202201', date: '04/01', patientname: 'Venkat', doctorname: 'krishnamoorthy', amountpaid: '300', discount: '(30.00)10%' },
    { billno: 'PHARMAB100', caseid: '202201', date: '04/01', patientname: 'Venkat', doctorname: 'krishnamoorthy', amountpaid: '300', discount: '(30.00)10%' },
    { billno: 'PHARMAB100', caseid: '202201', date: '04/01', patientname: 'Venkat', doctorname: 'krishnamoorthy', amountpaid: '300', discount: '(30.00)10%' },
    { billno: 'PHARMAB100', caseid: '202201', date: '04/01', patientname: 'Venkat', doctorname: 'krishnamoorthy', amountpaid: '300', discount: '(30.00)10%' },
    { billno: 'PHARMAB100', caseid: '202201', date: '04/01', patientname: 'Venkat', doctorname: 'krishnamoorthy', amountpaid: '300', discount: '(30.00)10%' },
    { billno: 'PHARMAB100', caseid: '202201', date: '04/01', patientname: 'Venkat', doctorname: 'krishnamoorthy', amountpaid: '300', discount: '(30.00)10%' },
  ];

  const columnDefs = [
    { headerName: 'Bill no', field: 'billno', cellStyle: { backgroundColor: '#FFFBAC', color: 'blue', fontWeight: 'bold' } },
    { headerName: 'Case ID', field: 'caseid' },
    { headerName: 'Date', field: 'date' },
    { headerName: 'Patient Name', field: 'patientname' },
    { headerName: 'Doctor Name', field: 'doctorname' },
    { headerName: 'Amount paid', field: 'amountpaid' },
    { headerName: 'Discount', field: 'discount' }
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
            title={props.t("Pharmacy")}
            breadcrumbItem={props.t("Pharmacy")}
          />
          <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
           <Link to='/medicines'><button className="btn btn-success"><i className="fas fa-plus-square"></i> Medicines</button></Link> 
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

export default withTranslation()(Pharmacy);