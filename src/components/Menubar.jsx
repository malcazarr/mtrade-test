import { useState } from "react";
import { Collapse } from "react-bootstrap";
export default function Menubar(){
    const [collapse, setCollapse] = useState(false) 

    const collapseController = () =>{
        setCollapse(!collapse)
    }
    return (
        <div className="row bg-black-custom text-white">
            <div className="border-bottom header d-flex justify-content-between">
                <div className="d-flex justify-content-start">
                    <div className="px-2">
                        <i className="fa fa-bars menu-icons"></i>
                    </div>
                    <div className="px-2">
                        <i className="fa fa-search menu-search-icon"></i>
                        <input className="menu-search" id="search" name="search" placeholder="Search securities, transactions, info or help"/>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <div className="px-2">
                        <i className="fa fa-cog menu-icons"></i>
                    </div>
                    <div className="menu-separator px-2">
                        <i className="fa fa-bell menu-icons"></i> 
                    </div>
                    <div className="px-2">
                            <div className="menu-username menu-icons cursor-pointer" onClick={collapseController}>
                                Brad Gibson
                                <i className="fa fa-chevron-down menu-username-icon-down"></i>
                            </div>
                        <Collapse  in={collapse}>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Settings</a></li>
                                <li><a className="dropdown-item" href="/">Profile</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="/">Logout</a></li>
                            </ul>
                        </Collapse>
                    </div>
                    <div className="px-2">
                        <img src="https://randomuser.me/api/portraits/men/75.jpg" alt=""  className="avatar-menu"/>
                    </div>

                </div>
                
            </div>

        </div>

    )
}