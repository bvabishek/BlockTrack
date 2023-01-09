import React from "react";
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import AlertDialog from "./MedicineDialog";
import 'ag-grid-enterprise';

//i18n
import { withTranslation } from "react-i18next";

//redux

const Medicines = props => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const rowData = [
        { medicinename: 'Amoxycilin', medicinecategory: 'tablet', medicinecomposition: 'Amoxil', medicinecompany: 'Zydus', medicinegroup: 'Amoxicil', unit: '100', availqty: '50' },
        { medicinename: 'Paracetamol', medicinecategory: 'tablet', medicinecomposition: 'Amoxil', medicinecompany: 'Zydus', medicinegroup: 'Amoxicil', unit: '100', availqty: '50' }
    ];

    const columnDefs = [
        { headerName: 'Medicine name', field: 'medicinename', cellStyle: { fontWeight: 'bold', backgroundColor: '#EEEEEE' } },
        { headerName: 'Medicine Category', field: 'medicinecategory' },
        { headerName: 'Medicine Composition', field: 'medicinecomposition' },
        { headerName: 'Medicine Company', field: 'medicinecompany' },
        { headerName: 'Medicine Group', field: 'medicinegroup' },
        { headerName: 'Unit', field: 'unit' },
        { headerName: 'Available Qty.', field: 'availqty' }
    ];

    const defaultColDef = useMemo(
        () => ({
            sortable: true,
            filter: true,
            flex: 1,
        }),
        []
    );
    let gridApi;
    const onGridReady = params => {
        gridApi.params.api
    }

    const onExportClick = () =>{
        gridApi.exportDataAsExcel();
    }


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs
                        title={props.t("Medicines")}
                        breadcrumbItem={props.t("Medicines")}
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}><button className='btn btn-primary' variant="outlined" onClick={handleClickOpen}>
                        <i className="fas fa-capsules"></i>  Add Medicine
                    </button>
                    </div>

                    <AlertDialog
                        open={open}
                        handleClose={handleClose}
                    />
                </Container>
                <div className="ag-theme-alpine"
                    style={{ height: 500, marginTop: "20px" }}>
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        onGridReady={onGridReady}

                    />
                </div>
            </div>


        </React.Fragment>
    );
};

export default withTranslation()(Medicines);