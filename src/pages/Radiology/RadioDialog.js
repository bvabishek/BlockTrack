import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Row, Col } from 'reactstrap';
import { TextField } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';

export default function RadioDialog({open,handleClose}) {
    

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Radiology Details
                </DialogTitle>
                <DialogContent>
                <br />
                    <Row>
                        <Col>
                            <TextField 
                                label='Test Name'
                                id='tname'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField 
                                label='Short Name'
                                id='sname'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField 
                                label='Test Type'
                                id='ttype'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField 
                                label='Category'
                                id='ctgry'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField 
                                label='Sub-Category'
                                id='sctrgy'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField 
                                label='Reporting Date'
                                id='rdate'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField 
                                label='Amount(₹)'
                                id='amt'
                                size='small'
                            />
                        </Col>
                    </Row>
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