import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
//ag-grid modules
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const Radiology = props => {

 const rowData = [
    { billno: 'RADIO2023', caseid: '101', pname: 'Abishek', refdoc: 'oliver thomas', repdate: '06/01', amt: '350' },
    { billno: 'RADIO2023', caseid: '101', pname: 'Abishek', refdoc: 'oliver thomas', repdate: '06/01', amt: '350' },
    { billno: 'RADIO2023', caseid: '101', pname: 'Abishek', refdoc: 'oliver thomas', repdate: '06/01', amt: '350' },
    { billno: 'RADIO2023', caseid: '101', pname: 'Abishek', refdoc: 'oliver thomas', repdate: '06/01', amt: '350' },
    { billno: 'RADIO2023', caseid: '101', pname: 'Abishek', refdoc: 'oliver thomas', repdate: '06/01', amt: '350' },
    { billno: 'RADIO2023', caseid: '101', pname: 'Abishek', refdoc: 'oliver thomas', repdate: '06/01', amt: '350' },
  ];

  const columnDefs = [
    { headerName: 'Case ID.', field: 'caseid' , cellStyle: {backgroundColor: 'rgba(0,0,0,0.2)', fontWeight: 'bold'}},
    { headerName: 'Bill no.', field: 'billno' },
    { headerName: 'Patient Name', field: 'pname' },
    { headerName: 'Reference Doctor', field: 'refdoc' },
    { headerName: 'Reporting Date', field: 'repdate' },
    { headerName: 'Amount', field: 'amt' }
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
            title={props.t("Radiology")}
            breadcrumbItem={props.t("Radiology")}
          />
          <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <Link to='/radiotest'><button className="btn btn-secondary"><i className="fas fa-microscope"></i> &nbsp;Radiology Test</button></Link>
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
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(Radiology);