import React from 'react'

import { Badge } from "reactstrap"

const BadgeStatus = ({ status }) => {
    return (
        (status === "SEARCHING") ? <Badge color="primary" className="bg-warning">SEARCHING</Badge> :
            (status === "COMPENSATION") ? <Badge color="primary" className="bg-info">COMPENSATION</Badge> :
                (status === "DONE") ? <Badge color="primary" className="bg-success">DONE</Badge> : null
    )
}

export default BadgeStatus