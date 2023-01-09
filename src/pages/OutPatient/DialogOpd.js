import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Row, Col } from "reactstrap";
import { TextField } from "@material-ui/core";
export default function DialogOpd({ open, handleClose }) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Outpatient Details
                </DialogTitle>
                <DialogContent>
                    <Row>
                        <Col>
                            <TextField
                                id="pid"
                                placeholder="Enter Patient ID"
                                label="Patient ID"
                                // value={data.pid}
                                margin="dense"
                                size="small"
                            // onChange={e => onChange(e)}
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="name"
                                placeholder="Enter name"
                                // value={data.name}
                                margin="dense"
                                size="small"
                                label="Name"
                            // onChange={e => onChange(e)}
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="age"
                                placeholder="Enter age"
                                // value={data.age}
                                margin="dense"
                                size="small"
                                label="Age"
                            // onChange={e => onChange(e)}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                id="height"
                                placeholder="Enter height"
                                // value={data.height}
                                margin="dense"
                                size="small"
                                label="Height"
                                variant="outlined"
                            // onChange={e => onChange(e)}
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="weight"
                                placeholder="Enter weight"
                                // value={data.weight}
                                margin="dense"
                                size="small"
                                label="Weight"
                                variant="outlined"
                            // onChange={e => onChange(e)}
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="bp"
                                placeholder="Enter BP"
                                // value={data.bp}
                                margin="dense"
                                size="small"
                                label="BP"
                                variant="outlined"
                            // onChange={e => onChange(e)}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                id="temp"
                                placeholder="Enter Temperature"
                                // value={data.temp}
                                margin="dense"
                                size="small"
                                label="Temperature"
                                variant="outlined"
                            // onChange={e => onChange(e)}
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="bed"
                                placeholder="Enter Bed"
                                // value={data.bed}
                                margin="dense"
                                size="small"
                                label="Bed"
                                variant="outlined"
                            // onChange={e => onChange(e)}
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="consultant"
                                placeholder="Enter consultant doctor"
                                // value={data.consultant}
                                margin="dense"
                                size="small"
                                label="Consultant"
                                variant="outlined"
                            // onChange={e => onChange(e)}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                id="gender"
                                placeholder="Enter gender"
                                // value={data.gender}
                                margin="dense"
                                size="small"
                                label="gender"
                                variant="outlined"
                            // onChange={e => onChange(e)}
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="charge"
                                placeholder="₹"
                                // value={data.charge}
                                margin="dense"
                                size="small"
                                label="Charge"
                                variant="outlined"
                            // onChange={e => onChange(e)}
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="amount"
                                placeholder="Amount Paid"
                                // value={data.charge}
                                margin="dense"
                                size="small"
                                label="Amount"
                                variant="outlined"
                            // onChange={e => onChange(e)}
                            />
                        </Col>
                    </Row>
                </DialogContent>
                <DialogActions>
                    <button className="btn btn-danger" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="btn btn-primary" onClick={handleClose} autoFocus>
                        Submit
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
