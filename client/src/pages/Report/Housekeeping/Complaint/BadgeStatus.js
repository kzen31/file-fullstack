import React from 'react'
import { Badge } from "reactstrap"

const BadgeStatus = ({status}) => {
    return (
        (status === "CLEANING_PROGRESS") ? <Badge color="primary" className="bg-warning">CLEANING</Badge> :
            (status === "DONE") ? <Badge color="primary" className="bg-success">DONE</Badge> : null
    )
}

export default BadgeStatus