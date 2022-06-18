import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux";
import {
  Row,
  Col,
} from "reactstrap"

// Pages Components
import Miniwidget from "./Miniwidget"
import PercenByStatus from "./PercenByStatus";
import GraphLastMonth from "./GraphLastMonth";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

const Dashboard = (props) => {
  const [reports, setReports] = useState([]);

  const breadcrumbItems = [
    { title: "Asa Service", link: "#" },
    { title: "Dashboard", link: "#" }
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Dashboard', breadcrumbItems)
    const fetchData = async () => {
      if (localStorage.getItem("authUser")) {
        const obj = JSON.parse(localStorage.getItem("authUser"))

        const headers = {
          'Authorization': "Bearer " + obj.access_token,
        };

        const responseReport = await fetch('http://asabeta.com/api/main-dashboard/widget', { headers });
        const dataReport = await responseReport.json();
        setReports(dataReport);
      }
    }

    fetchData()
      .catch(console.error);
  }, []);

  return (
    <React.Fragment>

      <MetaTags>
        <title>Dashboard</title>
      </MetaTags>

      <Miniwidget reports={reports} />

      <Row>
        <Col xl="3">
          <PercenByStatus />
        </Col>

        <Col xl="9">
          <GraphLastMonth />
        </Col>

      </Row>
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(Dashboard);