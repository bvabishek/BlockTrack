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

export default function ComplainDialog({ open, handleClose }) {

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add new Complain
                </DialogTitle>
                <DialogContent>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='Complain Type'
                                id='cmptype'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                label='Complain By'
                                id='cmpby'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                label='Source'
                                id='source'
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
                            <TextArea
                                rows={3}
                                placeholder='Description'
                                id='desc'
                            />
                        </Col>
                        <Col>
                            <TextField
                                type='date'
                                id='date'
                                size='small'
                                style={{width: '210px'}}
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