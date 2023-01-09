import PropTypes from "prop-types";
import React from "react";
import {
    Container,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import CallDialog from "./CallDialog";

//redux

const CallLog = props => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const rowData = [
        { name: 'Venky', phone: '9876543210', date: '07/01', fud: '08/01', ct: 'Outgoing' }
    ];

    const columnDefs = [
        { headerName: 'Name', field: 'name' },
        { headerName: 'Phone', field: 'phone' },
        { headerName: 'Date', field: 'date' },
        { headerName: 'Follow Up date', field: 'fud' },
        { headerName: 'Call type', field: 'ct' },
        { headerName: 'Actions', field: 'Actions' },
    ];

    const defaultColDef = useMemo(
        () => ({
            sortable: true,
            filter: true,
            flex: 1,
        }),
        []
    );

    //meta title
    //   document.title = "Dashboard | Skote - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs
                        title={props.t("Call logs")}
                        breadcrumbItem={props.t("Calls")}
                    />
                    <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <button className="btn btn-primary" onClick={handleClickOpen}>+ Add Call log</button>
                    </div>
                    <CallDialog 
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

export default withTranslation()(CallLog);