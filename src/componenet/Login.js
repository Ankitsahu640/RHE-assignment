import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Login() {
const navigate = useNavigate();
const handleSubmit=(e)=>{
    e.preventDefault();
    navigate('/view');
}

  return (
      <div className="Auth-form-container">
        <form className="Auth-form">
            <div className="Auth-form-content">
            <h3 className="Auth-form-title">Log In</h3>
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input type="email" className="form-control mt-1" placeholder="Enter email" required/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" className="form-control mt-1" placeholder="Enter password" minLength={3} required/>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Submit
                        </button>
                    </div>
                </form>
                <p className="forgot-password text-right mt-2">
                    Forgot <Link to="#">password?</Link>
                </p>
            </div>
        </form>
        <div className="infoNote">**It's a dummy login page, you can login with any email and password</div>
    </div>
  )
}

export default Login

