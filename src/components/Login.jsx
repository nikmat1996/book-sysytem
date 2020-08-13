import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../redux/authReducer/action';

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password : ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = e => {
        e.preventDefault()
        const { loginUser } = this.props
        loginUser(this.state)

    }
    
    render() {
        const { isAuth, wrong, logoutUser } = this.props
        if(!isAuth)
            return (
                <div className='addFormContainer'>
                    <form>
                        <div className='inputFields'>
                            <label>Email </label>
                            <input onChange={this.handleChange} name='email' type='text' placeholder= 'email' required/>
                        </div>
                        <div className='inputFields'>
                            <label>Password</label>
                            <input onChange={this.handleChange} name='password' type='password' placeholder= 'password' required/>
                        </div>
                        <input style={{marginTop:'26px'}} type='submit' onClick={this.handleClick} />
                    </form>
                    {wrong ?<h2>are you a hacker?</h2> : '' }
                </div>
            )
        else
            return (
                <div className="centerEverything">
                    <h2>YOU'RE IN!</h2>
                    <button onClick={logoutUser}>LOGOUT</button>
                </div>
            )
    }
}

const mapStateToProps = state => ({
    isAuth : state.authReducer.isAuth,
    wrong : state.authReducer.wrong
})

const mapDispatchToProps = dispatch => ({
    loginUser: payload => dispatch(loginUser(payload)),
    logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)