import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";

const NavbarContainer = connect(state => ({sidebar: state.sidebar})) (Navbar)

export default NavbarContainer;