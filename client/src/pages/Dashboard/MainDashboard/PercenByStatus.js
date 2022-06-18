import React, { Component, useState, useEffect } from 'react';

import { Card, CardBody, Row, Col, CardTitle } from "reactstrap"
import DonutChart from './DonutChart';

const PercenByStatus = () => {
    const [reportByStatus, setReportByStatus] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem("authUser")) {
                const obj = JSON.parse(localStorage.getItem("authUser"))

                const headers = {
                    'Authorization': "Bearer " + obj.access_token,
                };

                const response = await fetch('http://asabeta.com/api/main-dashboard/info-by-status', { headers });
                const data = await response.json();
                setReportByStatus(data);
                console.log("donussssssssssssssssss")
                console.log(data)
            }
        }

        fetchData()
            .catch(console.error);
    }, []);

    return (
        <React.Fragment>
            <Card>
                {reportByStatus &&
                    <CardBody>
                        <CardTitle className="h4 mb-4">Complaints</CardTitle>
                        <Row className="text-center mt-4">
                            <div className="col-6">
                                <h5 className="font-size-20">{reportByStatus[0].status}</h5>
                                <p className="text-muted">{reportByStatus[0].count}</p>
                            </div>
                            <div className="col-6">
                                <h5 className="font-size-20">{reportByStatus[1].status}</h5>
                                <p className="text-muted">{reportByStatus[1].count}</p>
                            </div>
                        </Row>
                        <div dir="ltr">
                            <DonutChart data={reportByStatus} />
                        </div>
                    </CardBody>
                }
            </Card>
        </React.Fragment>
    )

}

export default PercenByStatus
