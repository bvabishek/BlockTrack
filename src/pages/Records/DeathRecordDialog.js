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

export default function DeathDialog({ open, handleClose }) {


    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Death Details
                </DialogTitle>
                <DialogContent>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='Case ID'
                                id='caseid'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Patient Name'
                                id='pname'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField 
                                label='Guardian Name'
                                id='gname'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField 
                                label='Death Date'
                                id='ddate'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <TextArea 
                            rows={3}
                            placeholder='Report'
                            style={{width: '450px',marginLeft: '10px'}}
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