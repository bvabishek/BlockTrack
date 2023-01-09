import React from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Button,
  Label,
  Input,
  FormFeedback,
  Form,
  CardTitle,
  Table,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  CardText,
} from "reactstrap"

import { Link } from "react-router-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import General from "./SettingPages/General"

function Settings() {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Col xl={3} className="ms-3">
            <Card>
              <CardBody>
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th>
                          <h4>General settings</h4>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link>Email Settings</Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link>System Notification</Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link>Roles & Permissions</Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link>Payments</Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link>Users</Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link>SMS settings</Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link>Backup / Restore</Link>
                        </th>
                      </tr>
                    </thead>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl={3} className="ms-3">
            <Card>
              <CardBody>
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th>
                          <h4>Other settings</h4>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link>Front CMS Settings</Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link>Languages</Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link>Captcha settings</Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link>Modules</Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link>System updates</Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link>Prefix settings</Link>
                        </th>
                      </tr>
                    </thead>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Settings
