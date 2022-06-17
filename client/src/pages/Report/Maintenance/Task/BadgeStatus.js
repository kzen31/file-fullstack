import React from 'react'

import { Badge } from "reactstrap"

const BadgeStatus = ({status}) => {
    return (
        (status === "BAGUS") ? <Badge color="primary" className="bg-primary">BAGUS</Badge> :
            (status === "RUSAK") ? <Badge color="primary" className="bg-warning">RUSAK</Badge> : null
    )
}

export default BadgeStatus