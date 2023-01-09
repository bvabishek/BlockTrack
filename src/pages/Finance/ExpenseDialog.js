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

export default function ExpenseDialog({ open, handleClose }) {


    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add Expense Details
                </DialogTitle>
                <DialogContent>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                id='expensehead'
                                label='Expense Head'
                                variant='outlined'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                id='invoiceno'
                                label='Invoice no.'
                                variant='outlined'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                id='name'
                                label='Name'
                                variant='outlined'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <TextField
                                id='date'
                                label='Date'
                                variant='outlined'
                                size='small'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextField
                                id='amount'
                                label='Amount'
                                variant='outlined'
                                size='small'
                            />
                        </Col>
                        <Col>
                            <Input
                                id='attach'
                                label='Attach File'
                                type='file'
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <TextArea
                                id='desc'
                                placeholder='Description'
                                rows={3}
                                maxRows={6}
                            />
                        </Col>
                    </Row>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} className='btn btn-danger'>Cancel</button>
                    <button onClick={handleClose} autoFocus className='btn btn-primary'>
                        Submit
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}