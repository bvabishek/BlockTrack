import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Row, Col } from 'reactstrap';
import { TextField } from "@material-ui/core";

export default function AlertDialog({ open, handleClose }) {

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Medicine details
                </DialogTitle>
                <DialogContent>
                    <Row>
                        <Col>
                            <TextField
                                id="name"
                                placeholder="Enter Medicine name"
                                label="Medicine name"
                                margin="dense"
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="group"
                                placeholder=""
                                label="Medicine group"
                                margin="dense"
                            />
                        </Col>

                    </Row>

                    <br />
                    <Row>
                        <Col>
                            <TextField
                                id="cat"
                                placeholder=""
                                label="Medicine category"
                                margin="dense"
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="company"
                                placeholder=""
                                label="Medicine company"
                                margin="dense"
                            />
                        </Col>


                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                id="comp"
                                placeholder=""
                                label="Medicine composition"
                                margin="dense"
                            />
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                id="unit"
                                placeholder=""
                                label="Unit"
                                margin="dense"
                                variant='outlined'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                id="tax"
                                placeholder="%"
                                label="Tax"
                                margin="dense"
                                variant='outlined'
                                size='small'
                            />
                        </Col>

                    </Row>
                    <br />
                </DialogContent>
                <DialogActions>
                    <button className='btn btn-danger' onClick={handleClose}>Cancel</button>
                    <button className='btn btn-primary' onClick={handleClose} autoFocus>
                        Submit
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}