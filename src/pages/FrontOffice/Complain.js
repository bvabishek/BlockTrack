import PropTypes from "prop-types";
import React from "react";
import {
    Container,
} from "reactstrap";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

import ComplainDialog from "./ComplainDialog";

//redux

const Complain = props => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const rowData = [
        { name: 'Ashiq', complain: 'Waiting for report', complaintype: 'Long wait', source: 'front-office', phone: '8943234567', date: '05/01' },
        { name: 'Abishek', complain: 'Waiting for report', complaintype: 'Long wait', source: 'front-office', phone: '8943234567', date: '05/01' },
        { name: 'Venkat', complain: 'Waiting for report', complaintype: 'Long wait', source: 'front-office', phone: '8943234567', date: '05/01' },
        { name: 'Raamu', complain: 'Waiting for report', complaintype: 'Long wait', source: 'front-office', phone: '8943234567', date: '05/01' },
        { name: 'prasath', complain: 'Waiting for report', complaintype: 'Long wait', source: 'front-office', phone: '8943234567', date: '05/01' },
    ];

    const columnDefs = [
        { headerName: 'Name', field: 'name' },
        { headerName: 'Complain', field: 'complain' },
        { headerName: 'Complain Type', field: 'complaintype' },
        { headerName: 'Source', field: 'source' },
        { headerName: 'Phone', field: 'phone' },
        { headerName: 'Date', field: 'date' },
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
                        title={props.t("Complain")}
                        breadcrumbItem={props.t("Complain Issue")}
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <button className="btn btn-danger" onClick={handleClickOpen}>+ Add complain</button>
                    </div>
                    <ComplainDialog 
                        open={open}
                        handleClose={handleClose}
                    />
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


export default withTranslation()(Complain);
