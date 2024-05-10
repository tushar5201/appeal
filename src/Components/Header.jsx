import { Link } from "react-router-dom";
import { Col, Navbar, Row } from "react-bootstrap";
import Menu from "../data.js";
import { useState } from "react";

export default function Header() {
    const [showLevel0, setShowLevel0] = useState([]);
    const [showLevel1, setShowLevel1] = useState([]);

    function overHandler(menuId) {
        // document.getElementById("ext-nav").classList.remove("fadeInUp");
        // document.getElementById("ext-nav1").classList.add("fadeInDown");
        setShowLevel0(() => {
            let arr = [];
            arr[menuId] = true;
            return arr;
        });
    }
    function outHandler(menuId) {
        setShowLevel0(() => {
            let arr = [];
            arr[menuId] = false;
            return arr;
        });
    }

    function overHandler1(level0Id) {
        setShowLevel1(() => {
            let arr = [];
            arr[level0Id] = true;
            return arr;
        });
    }

    return (
        <header>
            <Navbar expand="md" className="navbar bg-black navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src="./images/appeal_logo.jpg" width="150px" alt="" />
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <ul className="navbar-nav">
                            {
                                Menu.menuItems.map((menu) => {
                                    if (!menu.subLevel0) {
                                        return (
                                            <li className="nav-item" key={menu.name}>
                                                <Link className="nav-link" to={menu.path}>{menu.name} </Link>
                                            </li>
                                        )
                                    }

                                    return (
                                        <div>
                                            <li className="nav-item" key={menu.name} onMouseOver={() => overHandler(menu.name)} onMouseOut={() => outHandler(menu.name)}>
                                                <Link className="nav-link" to={menu.path}>{menu.name} <i className="fa-solid fa-angle-down"></i></Link>
                                            </li>
                                            {
                                                showLevel0[menu.name] && (
                                                    <div className="ext-nav" id="ext-nav1" onMouseOver={() => overHandler(menu.name)} onMouseOut={() => outHandler(menu.name)}>
                                                        <ul className="level0-ul">
                                                            {
                                                                menu.subLevel0.map((level0, i) => {
                                                                    if (!level0.subLevel1) {
                                                                        return (
                                                                            <Row>
                                                                                <Col md={9}>
                                                                                    <Link className="nav-link-level0" to={level0.path} key={level0.name}>
                                                                                        <li className="nav-item-level0">
                                                                                            {level0.name}
                                                                                        </li>
                                                                                    </Link>
                                                                                </Col>
                                                                                <Col md={3} className="name">
                                                                                    {i === 1 && (<h2><span className="heading">A</span>SIA <span className="heading">P</span>ACIFIC <span className="heading">P</span>ROGRESSIVE <span className="heading">E</span>COLOGICAL <span className="heading">A</span>CTIVITIES <span className="heading">L</span>IMITED</h2>)}
                                                                                </Col>
                                                                            </Row>
                                                                        )
                                                                    }

                                                                    return (
                                                                        <Link className="nav-link-level0" to={level0.path} onMouseOver={() => overHandler1(level0.name)}>
                                                                            <li className="nav-item-level0" key={level0.name}>
                                                                                {level0.name}
                                                                                <i style={{ float: "right" }} className="fa-solid fa-angle-right"></i>
                                                                            </li>
                                                                            {showLevel1[level0.name] && (
                                                                                <ul className="level1-ul">
                                                                                    {
                                                                                        level0.subLevel1.map((level1) => (
                                                                                            <Link to={level1.path} className="nav-link-level1" key={level1.name}>
                                                                                                <li className="nav-item-level1">
                                                                                                    {level1.name}
                                                                                                </li>
                                                                                            </Link>
                                                                                        ))
                                                                                    }
                                                                                </ul>
                                                                            )}
                                                                        </Link>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                )}
                                        </div>
                                    )
                                }
                                )
                            }
                        </ul>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header >
    )
}