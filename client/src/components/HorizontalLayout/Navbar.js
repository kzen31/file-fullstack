import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Row, Col, Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"

//i18n
import { withTranslation } from "react-i18next"

import { connect } from "react-redux"

const Navbar = props => {
  const [users, setUsers] = useState(false);
  const [catering, setCatering] = useState(false);
  const [laundry, setLaundry] = useState(false);
  const [housekeeping, setHousekeeping] = useState(false);
  const [maintenance, setMaintenance] = useState(false);



  useEffect(() => {
    var matchingMenuItem = null
    var ul = document.getElementById("navigation")
    var items = ul.getElementsByTagName("a")
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  });

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="topnav">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    <i className="ti-dashboard">
                    </i>{props.t("Dashboard")}
                  </Link>
                </li>


                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setUsers(!users)
                    }}
                  >
                    <i className="fas fa-users"></i>{props.t("Users")}
                  </Link>
                  <div
                    className={classname("dropdown-menu dropdown-menu-left", { show: users })}
                  >
                    <Link to="page-users" className="dropdown-item">
                      {props.t("Accounts")}
                    </Link>
                    <Link to="register-users" className="dropdown-item">
                      {props.t("Register")}
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setCatering(!catering)
                    }}
                  >
                    <i className="fas fa-utensils"></i>{props.t("Catering")}
                  </Link>
                  <div
                    className={classname("dropdown-menu dropdown-menu-left", { show: catering })}
                  >
                    <Link to="info-catering" className="dropdown-item">
                      {props.t("Info")}
                    </Link>
                    <Link to="table-catering" className="dropdown-item">
                      {props.t("Complaints")}
                    </Link>
                    <Link to="table-rating" className="dropdown-item">
                      {props.t("Ratings")}
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setLaundry(!laundry)
                    }}
                  >
                    <i className="fas fa-tshirt"></i>{props.t("Laundry")}
                  </Link>
                  <div
                    className={classname("dropdown-menu dropdown-menu-left", { show: laundry })}
                  >
                    <Link to="info-laundry" className="dropdown-item">
                      {props.t("Info")}
                    </Link>
                    <Link to="table-laundry" className="dropdown-item">
                      {props.t("Complaints")}
                    </Link>
                  </div>
                </li>


                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setHousekeeping(!housekeeping)
                    }}
                  >
                    <i className="fas fa-broom"></i>{props.t("Housekeeping")}
                  </Link>
                  <div
                    className={classname("dropdown-menu dropdown-menu-left", { show: housekeeping })}
                  >
                    <Link to="info-housekeeping" className="dropdown-item">
                      {props.t("Info")}
                    </Link>
                    <Link to="table-housekeeping" className="dropdown-item">
                      {props.t("Complaints")}
                    </Link>
                    <Link to="task-housekeeping" className="dropdown-item">
                      {props.t("Task")}
                    </Link>  
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setMaintenance(!maintenance)
                    }}
                  >
                    <i className="fas fa-tools"></i>{props.t("Maintenance")}
                  </Link>
                  <div
                    className={classname("dropdown-menu dropdown-menu-left", { show: maintenance })}
                  >
                    <Link to="info-maintenance" className="dropdown-item">
                      {props.t("Info")}
                    </Link>
                    <Link to="table-maintenance" className="dropdown-item">
                      {props.t("Complaints")}
                    </Link>
                  </div>
                </li>

                </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout
  return { leftMenu }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
)
