import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Row, Col } from "reactstrap";
import { TextField } from "@material-ui/core";
import TextareaAutosize from "@mui/base/TextareaAutosize";

export default function FormDialog({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add New patient details</DialogTitle>
        <DialogContent>
          <Row>
            <Col>
              <TextField
                id="ipdno"
                placeholder="Enter IPD no."
                value={data.ipdno}
                label="IPD No."
                margin="dense"
                onChange={e => onChange(e)}
              />
            </Col>
            <Col>
              <TextField
                id="name"
                placeholder="Enter name"
                value={data.name}
                margin="dense"
                size="small"
                label="Name"
                onChange={e => onChange(e)}
              />
            </Col>
            <Col>
              <TextField
                id="age"
                placeholder="Enter age"
                value={data.age}
                margin="dense"
                size="small"
                label="Age"
                onChange={e => onChange(e)}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <TextField
                id="height"
                placeholder="Enter height"
                value={data.height}
                margin="dense"
                size="small"
                label="Height"
                variant="outlined"
                onChange={e => onChange(e)}
              />
            </Col>
            <Col>
              <TextField
                id="weight"
                placeholder="Enter weight"
                value={data.weight}
                margin="dense"
                size="small"
                label="Weight"
                variant="outlined"
                onChange={e => onChange(e)}
              />
            </Col>
            <Col>
              <TextField
                id="bp"
                placeholder="Enter BP"
                value={data.bp}
                margin="dense"
                size="small"
                label="BP"
                variant="outlined"
                onChange={e => onChange(e)}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <TextField
                id="temp"
                placeholder="Enter Temperature"
                value={data.temp}
                margin="dense"
                size="small"
                label="Temperature"
                variant="outlined"
                onChange={e => onChange(e)}
              />
            </Col>
            <Col>
              <TextField
                id="bed"
                placeholder="Enter Bed"
                value={data.bed}
                margin="dense"
                size="small"
                label="Bed"
                variant="outlined"
                onChange={e => onChange(e)}
              />
            </Col>
            <Col>
              <TextField
                id="consultant"
                placeholder="Enter consultant doctor"
                value={data.consultant}
                margin="dense"
                size="small"
                label="Consultant"
                variant="outlined"
                onChange={e => onChange(e)}
              />
            </Col>

          </Row>
          <br />
          <Row>
            <Col>
              <TextField
                id="gender"
                placeholder="Enter gender"
                value={data.gender}
                margin="dense"
                size="small"
                label="gender"
                variant="outlined"
                onChange={e => onChange(e)}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <TextareaAutosize
                placeholder="Previous medical issue"
                minRows={3}
                style={{ width: 550 }}
              />
            </Col>
          </Row>
          <br />
        </DialogContent>
        <DialogActions>
          <button className="btn btn-danger btn-md" onClick={handleClose}>
            Cancel
          </button>
          <button
            className="btn btn-primary btn-md"
            autoFocus
            onClick={() => handleFormSubmit()}
          >
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
