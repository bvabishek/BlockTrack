import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";
import { Row, Col, Card, CardBody } from "reactstrap";

//redux

const Billing = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Billing")}
            breadcrumbItem={props.t("Billing")}
          />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(Billing);
