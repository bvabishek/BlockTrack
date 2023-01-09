import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Row, Col, Input } from 'reactstrap';
import { TextField } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';
import { TextareaAutosize } from '@mui/material';
import { Label } from 'recharts';
import { Select } from 'antd';

export default function CallDialog({ open, handleClose }) {

    const optionCallType = [
        {
            label: "Call-type",
            options: [
                { label: "Incoming", value: "Incoming" },
                { label: "Outgoing", value: "Outgoing" },
            ],
        },
    ];

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Call Log
                </DialogTitle>
                <DialogContent>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='Name'
                                id='name'
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
                                label='Date'
                                id='date'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Duration'
                                id='duration'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextareaAutosize
                                rows={2}
                                placeholder='Note'
                                style={{width: '210px'}}
                            />
                        </Col>
                        <Col>
                            <label>Call Type</label>&nbsp;&nbsp;
                            <select style={{ width: '140px' }}>
                                <option>Incoming</option>
                                <option>Outgoing</option>
                            </select>
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