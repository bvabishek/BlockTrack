import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { TextField } from "@mui/material"
import { Input, Select } from "@material-ui/core"
import { Row, Col } from "reactstrap"

export default function AlertDialog({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="text-primary">
          Add New Appointment
        </DialogTitle>
        <DialogContent>
          <Row>
            <Col>
              <TextField
                id="name"
                placeholder="Enter name"
                label="Name"
                margin="dense"
                variant="outlined"
                value={data.name}
                size="small"
                onChange={e => onChange(e)}
              />
            </Col>
            <Col>
              <TextField
                id="age"
                placeholder="Enter age"
                label="Age"
                margin="dense"
                variant="outlined"
                value={data.age}
                size="small"
                onChange={e => onChange(e)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField
                id="gender"
                placeholder="Enter gender"
                label="Gender"
                margin="dense"
                variant="outlined"
                value={data.gender}
                size="small"
                onChange={e => onChange(e)}
              />
            </Col>
            <Col>
              <TextField
                id="contact"
                placeholder="Enter contact"
                label="Contact"
                margin="dense"
                variant="outlined"
                value={data.contact}
                size="small"
                onChange={e => onChange(e)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField
                id="bloodgroup"
                placeholder="Enter blood group"
                label="Blood group"
                margin="dense"
                variant="outlined"
                value={data.bloodgroup}
                size="small"
                onChange={e => onChange(e)}
              />
            </Col>
            <Col>
              <TextField
                id="Appointmentno"
                placeholder="Enter Appointment no."
                label="Appointment no."
                margin="dense"
                variant="outlined"
                value={data.Appointmentno}
                size="small"
                onChange={e => onChange(e)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField
                id="Appointmentdate"
                placeholder="Enter Appointment Date"
                label="Appointment Date"
                margin="dense"
                variant="outlined"
                value={data.Appointmentdate}
                size="small"
                onChange={e => onChange(e)}
              />
            </Col>
            <Col>
              <TextField
                id="priority"
                placeholder="Enter Priority"
                label="Priority"
                margin="dense"
                variant="outlined"
                value={data.priority}
                size="small"
                onChange={e => onChange(e)}
              />
            </Col>
          </Row>
        </DialogContent>
        <DialogActions
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <button onClick={handleClose} className="btn btn-danger bg-soft">
            Cancel
          </button>
          <button
            onClick={() => handleFormSubmit()}
            className="btn btn-primary bg-soft"
          >
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
