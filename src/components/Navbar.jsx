import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export function Navbar(props) {
    return (
        <div className='navWrapper'>
            <div className='allLinks'><Link style={{textDecoration:'none', margin:'10px'}} to='/dashboard'>DASH</Link></div> 
            <div className='allLinks'><Link style={{textDecoration:'none', margin:'10px'}} to='/add'>ADD</Link></div>
            <div className='allLinks'><Link style={{textDecoration:'none', margin:'10px'}} to='/'>{props.isAuth ? 'LOGOUT' : 'LOGIN'}</Link></div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, null)(Navbar)