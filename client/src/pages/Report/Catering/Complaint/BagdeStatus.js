import React from 'react'
import { Badge } from "reactstrap"

const BagdeStatus = ({ status }) => {
    return (
        (status === "INQUIRY") ? <Badge color="primary" className="bg-warning">INQUIRY</Badge> :
            (status === "INVESTIGATION") ? <Badge color="primary" className="bg-info">INVESTIGATION</Badge> :
                (status === "CLOSED") ? <Badge color="primary" className="bg-success">CLOSED</Badge> : null
    )
}

export default BagdeStatus