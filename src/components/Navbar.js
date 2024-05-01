import React from 'react';
import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faUserTie, faBars, faGripLines } from '@fortawesome/free-solid-svg-icons';
import { toggleSidebar } from './redux/sidebarSlice';


const Navbar = () => {

    const pageTitle = useSelector((state) => state.pageTitle.title);
    const isOpen = useSelector((state) => state.sidebar.isOpen);
    const dispatch = useDispatch();


    return (
        <header className='Nav'>
            <div className='logo-div'>
                <FontAwesomeIcon className='Grip-Line' icon={faBars} size='2x'  onClick={() => dispatch(toggleSidebar())}/>
                <img src='Verbiz-logo.png' className='App-logo'/>
                <div className='logo-text'>
                    <h2 className='logo-ver'>VERBiZ</h2>
                    <h5 className='logo-sol'>SOLUTIONS</h5>
                </div>
                <div className='page-heading'>
                    <h2><FontAwesomeIcon icon={faGripVertical} className='Dash-Icon'/>{pageTitle}</h2>
                </div>
            </div>
            <div className='profile-box'>
                <FontAwesomeIcon icon={faUserTie}/>
            </div>
        </header>
    );
};

export default Navbar;




