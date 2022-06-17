import React, { Component, useState, useEffect } from 'react';

import { Card, CardBody, Row, Col, CardTitle } from "reactstrap"
import DonutChart from './DonutChart';

const PercenByStatus = ({ reports }) => {
    return (
        <React.Fragment>
            <Card>
                {reports &&
                    <CardBody>
                        <CardTitle className="h4 mb-4">Complaints</CardTitle>
                        <Row className="text-center mt-4">
                            {reports.map((report, key) => (
                                <div className="col-5" key={key}>
                                    <h5 className="font-size-20">{report.title.charAt(0) + report.title.substring(1, 8).toLowerCase()}</h5>
                                    <p className="text-muted">{report.total}</p>
                                </div>

                            ))}
                        </Row>
                        <div dir="ltr">
                            <DonutChart data={reports} />
                        </div>
                    </CardBody>
                }
            </Card>
        </React.Fragment>
    )

}

export default PercenByStatus
