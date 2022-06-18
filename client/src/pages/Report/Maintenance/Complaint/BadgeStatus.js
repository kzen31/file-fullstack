import React from 'react'

import { Badge } from "reactstrap"

const BadgeStatus = ({status}) => {
    return (
        (status === "OPEN") ? <Badge color="primary" className="bg-primary">OPEN</Badge> :
            (status === "PROGRESS") ? <Badge color="primary" className="bg-info">PROGRESS</Badge> :
                (status === "HOLD") ? <Badge color="primary" className="bg-warning">HOLD</Badge> :
                    (status === "CLOSED") ? <Badge color="primary" className="bg-success">CLOSED</Badge> : null
    )
}

export default BadgeStatus