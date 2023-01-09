import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Row, Col } from 'reactstrap';
import { TextField } from '@mui/material';

export default function AmbulanceDialog({ open, handleClose }) {


    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Ambulance call details
                </DialogTitle>
                <DialogContent>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='Driver Name'
                                size='small'
                                id='dname'
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Driver contact'
                                id='dcontact'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='Date'
                                size='small'
                                id='date'
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Amount'
                                size='small'
                                id='amt'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='Vehicle no'
                                size='small'
                                id='vehicleno'
                            />
                        </Col>
                        <Col>
                            <label style={{color: 'grey'}}>Charge Type</label>&nbsp;
                            <br />
                            <select style={{borderRadius: '5px', height: '40px', width: '210px'}}>
                                <option>Private Ambulance</option>
                                <option>ERS Transport service</option>
                            </select>
                        </Col>
                    </Row>
                </DialogContent>
                <br />
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