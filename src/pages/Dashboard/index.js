import PropTypes from "prop-types";
import React from "react";
import { CardBody, Container } from "reactstrap";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import "./styles.css";
//redux

const Dashboard = props => {
  //meta title
  document.title = "Dashboard | BlockTrack";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          />
          <br />
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="card" style={{border: '1px solid blue'}}>
                <div className="info-box ms-3 mt-3 mb-2" title="OPD Income">
                  <Link to="/opd">
                    <span className="info-box-icon bg-white">
                      <i className="fas fa-stethoscope fa-lg"></i>
                    </span>
                    <div className="info-box-content">
                      <br />
                      <span
                        className="info-box-text"
                        style={{ fontWeight: "bold" }}
                      >
                        OPD Income
                      </span>
                      <br />
                      <span className="info-box-number">₹ 2000.00</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="card"  style={{border: '1px solid blue'}}>
                <div className="info-box ms-3 mt-3 mb-2" title="IPD Income">
                  <Link to="/ipd">
                    <span className="info-box-icon bg-white">
                      <i className="fas fa-procedures fa-lg"></i>
                    </span>
                    <div className="info-box-content">
                      <br />
                      <span
                        className="info-box-text"
                        style={{ fontWeight: "bold" }}
                      >
                        IPD Income
                      </span>
                      <br />
                      <span className="info-box-number">₹ 2000.00</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="card" style={{border: '1px solid blue'}}>
                <div
                  className="info-box ms-3 mt-3 mb-2"
                  title="Pharmacy Income"
                >
                  <Link to="/pharmacy">
                    <span className="info-box-icon bg-white">
                      <i className="fas fa-mortar-pestle fa-lg"></i>
                    </span>
                    <div className="info-box-content">
                      <br />
                      <span
                        className="info-box-text"
                        style={{ fontWeight: "bold" }}
                      >
                        Pharmacy Income
                      </span>
                      <br />
                      <span className="info-box-number">₹ 5000.00</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="card" style={{border: '1px solid blue'}}>
                <div
                  className="info-box ms-3 mt-3 mb-2"
                  title="Pathology Income"
                >
                  <Link to="/pathology">
                    <span className="info-box-icon bg-white">
                      <i className="fas fa-flask fa-lg"></i>
                    </span>
                    <div className="info-box-content">
                      <br />
                      <span
                        className="info-box-text"
                        style={{ fontWeight: "bold" }}
                      >
                        Pathology Income
                      </span>
                      <br />
                      <span className="info-box-number">₹ 2500.00</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="card" style={{border: '1px solid blue'}}>
                <div
                  className="info-box ms-3 mt-3 mb-2"
                  title="Radiology Income"
                >
                  <Link to="/radiology">
                    <span className="info-box-icon bg-white">
                      <i className="fas fa-microscope fa-lg"></i>
                    </span>
                    <div className="info-box-content">
                      <br />
                      <span
                        className="info-box-text"
                        style={{ fontWeight: "bold" }}
                      >
                        Radiology Income
                      </span>
                      <br />
                      <span className="info-box-number">₹ 5500.00</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="card" style={{border: '1px solid blue'}}>
                <div
                  className="info-box ms-3 mt-3 mb-2"
                  title="Blood Bank Income"
                >
                  <Link to="/bloodbank">
                    <span className="info-box-icon bg-white">
                      <i className="fas fa-tint fa-lg"></i>
                    </span>
                    <div className="info-box-content">
                      <br />
                      <span
                        className="info-box-text"
                        style={{ fontWeight: "bold" }}
                      >
                        Blood Bank Income
                      </span>
                      <br />
                      <span className="info-box-number">₹ 5500.00</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="card" style={{border: '1px solid blue'}}>
                <div
                  className="info-box ms-3 mt-3 mb-2"
                  title="Ambulance Income"
                >
                  <Link to="/ambulance">
                    <span className="info-box-icon bg-white">
                      <i className="fas fa-ambulance fa-lg"></i>
                    </span>
                    <div className="info-box-content">
                      <br />
                      <span
                        className="info-box-text"
                        style={{ fontWeight: "bold" }}
                      >
                        Ambulance Income
                      </span>
                      <br />
                      <span className="info-box-number">₹ 5500.00</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="card" style={{border: '1px solid blue'}}>
                <div className="info-box ms-3 mt-3 mb-2" title="General Income">
                  <Link to="/income">
                    <span className="info-box-icon bg-white">
                      <i className="fas fa-money-bill-wave fa-lg"></i>
                    </span>
                    <div className="info-box-content">
                      <br />
                      <span
                        className="info-box-text"
                        style={{ fontWeight: "bold" }}
                      >
                        General Income
                      </span>
                      <br />
                      <span className="info-box-number">₹ 5500.00</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="card" style={{border: '1px solid blue'}}>
                <div className="info-box ms-3 mt-3 mb-2" title="Expenses">
                  <Link to="/expenses">
                    <span className="info-box-icon bg-white">
                      <i className="fas fa-dollar-sign fa-lg style={{fontWeight: 'bold'}}"></i>
                    </span>
                    <div className="info-box-content">
                      <br />
                      <span
                        className="info-box-text"
                        style={{ fontWeight: "bold" }}
                      >
                        Expenses
                      </span>
                      <br />
                      <span className="info-box-number">₹ 8500.00</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div>
            <h3 className="fs-5 text-dark">STAFFS</h3>
          </div>
          <br />
          <div className="card p-3">
            <div className="row mt-2">
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="card" style={{ border: '1px solid grey'}}>
                  <div className="info-box ms-3 mt-2 mb-2" title="accountant">
                    <Link to="/hr">
                      <span className="info-box-icon bg-secondary p-2">
                        <i
                          className="far fa-file-alt fa-lg mt-2 p-1"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      <div className="info-box-content">
                        <br />
                        <span className="info-box-text text-secondary">
                          Accountant
                        </span>
                        <br />
                        <span
                          className="info-box-number text-secondary"
                          style={{ fontWeight: "bold" }}
                        >
                          2
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="card" style={{ border: '1px solid grey'}}>
                  <div className="info-box ms-3 mt-3 mb-2" title="doctor">
                    <Link to="/hr">
                      <span className="info-user-md fa-lg bg-secondary p-2">
                        <i
                          className="fas fa-user-md fa-lg mt-2"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      <div className="info-box-content">
                        <br />
                        <span className="info-box-text text-secondary">
                          Doctor
                        </span>
                        <br />
                        <span
                          className="info-box-number text-secondary"
                          style={{ fontWeight: "bold" }}
                        >
                          5
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="card" style={{ border: '1px solid grey'}}>
                  <div className="info-box ms-3 mt-3 mb-2" title="pharmacist">
                    <Link to="/hr">
                      <span className="info-box-icon bg-secondary p-2">
                        <i
                          className="fas fa-medkit fa-lg mt-2"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      <div className="info-box-content">
                        <br />
                        <span className="info-box-text text-secondary">
                          Pharmacist
                        </span>
                        <br />
                        <span
                          className="info-box-number text-secondary"
                          style={{ fontWeight: "bold" }}
                        >
                          3
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="card" style={{ border: '1px solid grey'}}>
                  <div className="info-box ms-3 mt-3 mb-2" title="pathologist">
                    <Link to="/hr">
                      <span className="info-box-icon bg-secondary p-2">
                        <i
                          className="fas fa-dna fa-lg mt-2"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      <div className="info-box-content">
                        <br />
                        <span className="info-box-text text-secondary">
                          Pathologist
                        </span>
                        <br />
                        <span
                          className="info-box-number text-secondary"
                          style={{ fontWeight: "bold" }}
                        >
                          2
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="card" style={{ border: '1px solid grey'}}>
                  <div className="info-box ms-3 mt-3 mb-2" title="radiologist">
                    <Link to="/hr">
                      <span className="info-box-icon bg-secondary p-2">
                        <i
                          className="fas fa-bong fa-lg mt-2"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      <div className="info-box-content">
                        <br />
                        <span className="info-box-text text-secondary">
                          Radiologist
                        </span>
                        <br />
                        <span
                          className="info-box-number text-secondary"
                          style={{ fontWeight: "bold" }}
                        >
                          1
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="card" style={{ border: '1px solid grey'}}>
                  <div className="info-box ms-3 mt-3 mb-2" title="superadmin">
                    <Link to="/hr">
                      <span className="info-box-icon bg-secondary p-2">
                        <i
                          className="fas fa-user-cog fa-lg mt-2"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      <div className="info-box-content">
                        <br />
                        <span className="info-box-text text-secondary">
                          Super Admin
                        </span>
                        <br />
                        <span
                          className="info-box-number text-secondary"
                          style={{ fontWeight: "bold" }}
                        >
                          1
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="card" style={{ border: '1px solid grey'}}>
                  <div className="info-box ms-3 mt-3 mb-2" title="receptionist">
                    <Link to="/hr">
                      <span className="info-box-icon bg-secondary p-2">
                        <i
                          className="fas fa-address-card fa-lg mt-2"
                          style={{ color: "white" }}
                        ></i>
                      </span>
                      <div className="info-box-content">
                        <br />
                        <span className="info-box-text text-secondary">
                          Receptionist
                        </span>
                        <br />
                        <span
                          className="info-box-number text-secondary"
                          style={{ fontWeight: "bold" }}
                        >
                          1
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="card" style={{ border: '1px solid grey'}}>
                  <div className="info-box ms-3 mt-3 mb-2" title="nurse">
                    <Link to="/hr">
                      <span className="info-box-icon bg-secondary p-2">
                        <i
                          className="fas fa-syringe fa-lg mt-2"
                          style={{ color: "white" }}
                        ></i>
                      </span> 
                      <div className="info-box-content">
                        <br />
                        <span className="info-box-text text-secondary">
                          Nurse
                        </span>
                        <br />
                        <span
                          className="info-box-number text-secondary"
                          style={{ fontWeight: "bold" }}
                        >
                          10
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(Dashboard);
