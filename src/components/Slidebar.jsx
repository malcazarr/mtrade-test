import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from '../images/mtrade-logo_demo.svg';

export default function Slidebar(){
    const userAuth = useSelector(state =>state.userAuthReducer)
    console.log(userAuth)
    return (
        <div className="slidebar bg-black-custom">
            <div className="border-bottom header">
                <img src={logo} alt="" className="logo"/>
            </div>
            <div className="border-bottom pt-4 pb-4">
                <div className="text-center text-white">
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt=""  className="avatar"/>
                    <h5>Brad Gibson</h5>
                    <span className="profile-email">brad.gibson@example.com</span>
                </div>
            </div>

            <div className="py-5">
                <ul>
                    <NavLink exact to="/" className="slidebar-workspace1" activeClassName="slidebar-selected">
                        <li>WORKSPACE 1</li>
                    </NavLink>
                    <NavLink to="/workspace2" className="slidebar-workspace2" activeClassName="slidebar-selected">
                        <li>
                            WORKSPACE 2</li>
                    </NavLink>
                    <NavLink to="/analysis" className="slidebar-workspace3" activeClassName="slidebar-selected">
                        <li>ANALYSIS</li>
                    </NavLink>
                    <NavLink to="/workspace4" className="slidebar-workspace4" activeClassName="slidebar-selected">
                        <li>WORKSPACE 4</li>
                    </NavLink>
                    <NavLink to="/workspace5" className="slidebar-workspace5" activeClassName="slidebar-selected">
                        <li>WORKSPACE 5</li>
                    </NavLink>
                    <NavLink to="/workspace6" className="slidebar-workspace6" activeClassName="slidebar-selected">
                        <li>WORKSPACE 6</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}