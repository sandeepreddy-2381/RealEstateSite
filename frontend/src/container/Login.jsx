import React, { useState } from 'react';
import { Link , Navigate} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';
import {login} from '../actions/auth';
import {connect} from 'react-redux';


const Login = ({login,isAuthenticated}) =>
{

    const [formData , setFormData] = useState(
        {
            email :'',
            password:'',
        }
    );

const {email,password} = formData;

const onChange = e => setFormData({...formData, [e.target.name]:e.target.value });

const onSubmit = e => {
    e.preventDefault()
    login(email,password);
}

if(isAuthenticated)
return <Navigate to ='/' />
    return(
        <div className='auth'>
            <Helmet>
                <title>Real-Estate - Login</title>
                <meta name='description' content = 'login'/>
            </Helmet>
            <h1 className='auth__title' >Sign In</h1>
            <p className='auth__lead'>Sign Into Your Account</p>
            <form className='auth__form' onSubmit={onSubmit}>
                <div className='auth__form__group'>
                    <input className='auth__form__input' type='email' placeholder='email' name='email' value={email} onChange={onChange} required />
                </div>
                <div className='auth__form__group'>
                    <input className='auth__form__input' type='password' placeholder='Password' name='password' value={password} onChange={onChange} minLength='6' required />
                </div>
                <button className='auth__form__button' >Login</button>
            </form>
            <p className='auth__authtext'>
                Don't Have an account ? <Link className='auth__authtext__link' to = '/signin' >Sign In</Link>
            </p>
        </div>
    );
}

Login.propTypes = {
    login : PropTypes.func.isRequired,
    isAuthenticated : PropTypes.bool,
}
const mapStateToProps = state =>({
    isAuthenticated :state.auth.isAuthenticated
});



export default connect(mapStateToProps,{login})(Login);