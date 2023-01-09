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

export default function BirthDialog({ open, handleClose }) {


    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Birth Details
                </DialogTitle>
                <DialogContent>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='Child Name'
                                id='name'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Gender'
                                id='gender'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='Birth Date'
                                id='date'
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
                                label='Weight'
                                id='weight'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Case ID'
                                id='caseid'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='Father Name'
                                id='fname'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Mother Name'
                                id='mname'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <TextArea 
                            rows={3}
                            placeholder='Report'
                        />
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