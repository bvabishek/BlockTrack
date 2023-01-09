import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import RadioDialog from "./RadioDialog";

//redux

const RadioTest = props => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const rowData = [
        { tname: 'Magnetic Resonance Imaging', sname: 'MRI', ttype: 'CT', ctgry: 'X-Ray Chest PA View', rpt: '1 day', amt: '200' },
        { tname: 'Magnetic Resonance Imaging', sname: 'MRI', ttype: 'CT', ctgry: 'X-Ray Chest PA View', rpt: '1 day', amt: '200' },
    ];

    const columnDefs = [
        { headerName: 'Test Name', field: 'tname' },
        { headerName: 'Short Name', field: 'sname' },
        { headerName: 'Test Type', field: 'ttype' },
        { headerName: 'Category', field: 'ctgry' },
        { headerName: 'Report Days', field: 'rpt' },
        { headerName: 'Amount', field: 'amt' },
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
                        title={props.t("Radiology Test")}
                        breadcrumbItem={props.t("Radiology")}
                    />
                    <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <button className="btn btn-outline-primary" onClick={handleClickOpen}>Add Radiology Test</button>
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
                    <RadioDialog 
                        open={open}
                        handleClose={handleClose}
                    />
                </Container>
            </div>
        </React.Fragment>
    );
};


export default withTranslation()(RadioTest);