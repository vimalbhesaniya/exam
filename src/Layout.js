import React, { useCallback, useContext, useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import Footer from "./componants/Common/Footer"
import Header from "./componants/Common/Header";
import "./Style/body.css"
import Cookies from "js-cookie";

const  Layout = () => {
    const naviget = useNavigate();
    useEffect(() => {   
        const token = Cookies.get("token");
        if (!token) {
            naviget("/companylogin");
        }
    })
    return (
		<>
			<div className="  " >
				<Header  />
			</div>
			<div className={"body--"}>
				<Outlet></Outlet>
			</div>
		</>
	);
}

export default Layout;
