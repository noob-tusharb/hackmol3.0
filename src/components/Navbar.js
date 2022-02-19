import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className='Navbar'>
                <div className='navbar-container'>
                    <NavLink to='/' exact="true" className='title'>
                        Klean
                    </NavLink>


                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <NavLink to='/' exact="true" className={(navData) => (navData.isActive ? 'nav-links-active' : 'nav-links')} >
                                home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' exact="true" className={(navData) => (navData.isActive ? 'nav-links-active' : 'nav-links')}>
                                about
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink to='/blog' exact="true" className={(navData) => (navData.isActive ? 'nav-links-active' : 'nav-links')} >
                                blog
                            </NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink to='/contact' exact="true" className={(navData) => (navData.isActive ? 'nav-links-active' : 'nav-links')} >
                                contact
                            </NavLink>
                        </li>
                        {/* <li className='nav-item'>
                            <NavLink to="/signup" exact="true" className={(navData) => (navData.isActive ? 'nav-links-active' : 'nav-links')}>
                                signup
                            </NavLink>
                        </li> */}

                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {/* <i class="fa-solid fa-bars"></i> */}
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                        {/* <h1>kk</h1> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// function NavBar() {
//     const [click, setClick] = useState(false);

//     const handleClick = () => setClick(!click);
//     return (
//         <>
//             <nav className="navbar">
//                 <div className="nav-container">
//                     <NavLink exact="true=" to="/" className="nav-logo">
//                         Klean
//                     </NavLink>

//                     <ul className={click ? "nav-menu active" : "nav-menu"}>
//                         <li className="nav-item">
//                             <NavLink
//                                 exact="true" to="/"
//                                 activeClassName="active"
//                                 className="nav-links"
//                                 onClick={handleClick}
//                             >
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink
//                                 exact="true"
//                                 to="/about"
//                                 activeClassName="active"
//                                 className="nav-links"
//                                 onClick={handleClick}
//                             >
//                                 About
//                             </NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink
//                                 exact="true"
//                                 to="/blog"
//                                 activeClassName="active"
//                                 className="nav-links"
//                                 onClick={handleClick}
//                             >
//                                 Blog
//                             </NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink
//                                 exact="true"
//                                 to="/contact"
//                                 activeClassName="active"
//                                 className="nav-links"
//                                 onClick={handleClick}
//                             >
//                                 Contact Us
//                             </NavLink>
//                         </li>
//                     </ul>
//                     <div className="nav-icon" onClick={handleClick}>
//                         <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default NavBar;
