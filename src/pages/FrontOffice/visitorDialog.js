import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Row, Col, Label } from 'reactstrap';
import { TextField } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';

export default function VisitorDialog({ open, handleClose }) {

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Visitor Details
                </DialogTitle>
                <DialogContent>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='purpose'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Name'
                                id='name'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='Number of Person'
                                id='nop'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Phone'
                                id='phone'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='Visit To'
                                placeholder='IPD/OPD/Staff'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField 
                                label='Related to'
                                placeholder='patient/staff'
                                size='small'
                            />
                        </Col>

                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Label>In Time</Label>
                            <br />
                            <TextField
                                type='time'
                                size='small'
                                style={{width: '130px'}}
                            />
                        </Col>
                        <Col>
                            <Label>Out Time</Label>
                            <br />
                            <TextField
                                type='time'
                                size='small'
                                style={{width: '130px'}}
                            />
                        </Col>
                    </Row>
                    <br />
                    <TextArea 
                        rows={3}
                        placeholder='Note'
                    />
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