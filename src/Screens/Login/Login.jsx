import React from 'react'
import './Login.css'
import Textfield from '../../components/Forms/Textfield/Textfield'
import Button from '../../components/Forms/Button/Button'

function Login() {
  return (
    <div className='flex justify-center'>
        <div className="login-wrapper">
            <div className="login-card-header bg-primary">
                <div className="flex items-center justify-center">
                    <h4 className="text-secondry">Login </h4>
                    <p className="text-secondry text-body text-required"> (Required)</p>
                </div>
                <p className="text-secondry text-body text-only-admin"> (only ADMIN can sign in)</p>
            </div>

            <div className="login-card-body">
                <Textfield label="Username"/>
                <br />
                <Textfield label="Password"/>
                <br />
                <div className="flex justify-end">
                    <Button type="submit" label="Login"/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Login