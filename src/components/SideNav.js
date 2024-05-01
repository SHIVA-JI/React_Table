import React from 'react';
import './SideNav.css'
import { BrowserRouter, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPageTitle } from './redux/headingSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faSitemap, faQrcode,  faUser, faUtensils, faBellConcierge , faUserXmark , faComment, faPeopleGroup, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';



const items = [
    { ic:faGripVertical, name: 'DashBoard', path: '/' },
    { ic:faSitemap, name: 'Organization', path: '/organization' },
    { ic:faQrcode, name: 'QR Code', path: '/qr-code' },
    { ic:faUser, name: 'Customer', path: '/customer' },
    { ic:faUtensils, name: 'Food & Beverages', path: '/food-beverages' },
    { ic:faBellConcierge, name: 'Room Services', path: '/room-services' },
    { ic:faUserXmark, name: 'Complaint', path: '/complaint' },
    { ic:faComment, name: 'Feedback', path: '/feedback' },
    { ic:faPeopleGroup, name: 'Teams', path: '/teams' },
    { ic:faRightFromBracket, name: 'Logout', path: '/logout' }
];

const SideNav = () => {
    
    const dispatch = useDispatch();

    const handleTitleChange = (title) => {
        dispatch(setPageTitle(title));
    };

    return (
        <BrowserRouter>
            <div className='mobile-div'>
                <img src='Verbiz-logo.png' className='App-logo-mobile'/>
                <div className='logo-text-mobile'>
                    <h2 className='logo-ver-mobile'>VERBiZ</h2>
                    <h5 className='logo-sol-mobile'>SOLUTIONS</h5>
                </div>
            </div>
            
            <ul className='SideList'>
                {items.map((item, index) => (
                    <li key={index} className='list-item'>
                        <NavLink to={item.path} className='list-item' onClick={() => handleTitleChange(item.name)}>
                            <FontAwesomeIcon icon={item.ic} className='Side-Icon'/>{item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </BrowserRouter>
    );
};

export default SideNav;


// import React from 'react';
// import './SideNav.css'
// import { BrowserRouter , NavLink } from 'react-router-dom';

// const SideNav = () => {
//     return (
//         <BrowserRouter>
//         <ul className='SideList'>
//             <li className='list-item'>
//                 <NavLink to='/' className='list-item'>DashBoard</NavLink>
//             </li>
//             <li className='list-item'>Organization</li>
//             <li className='list-item'>QR Code</li>
//             <li className='list-item'>Customer</li>
//             <li className='list-item'>Food & Beverages</li>
//             <li className='list-item'>Room Services</li>
//             <li className='list-item'>Complaint</li>
//             <li className='list-item'>Feedback</li>
//             <li className='list-item'>Teams</li>
//             <li className='list-item'>Logout</li>
//         </ul>
//         </BrowserRouter>
//     );
// };

// export default SideNav;

