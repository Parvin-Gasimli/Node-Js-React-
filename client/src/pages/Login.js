import React, { useState, useEffect } from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBIcon,
  MDBBtn,
  MDBSpinner
} from "mdb-react-ui-kit";

import { Link,useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import {toast} from "react-toastify"
import { login } from "../redux/features/authSlice";

const initialState = {
  email: "",
  password: ""
};
const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(email&&password){
        dispatch(login({formValue,navigate,toast}))
    }

  }
  const onInputChange=(e)=>{
    let{name,value}=e.target;
    setFormValue({...formValue,[name]:value})

  }
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        width: "450px",
        alignContent: "center",
        marginTop: "120px"
      }}
    >
        <MDBCard alignment="center">
            <MDBIcon fas icon="user-circle" className="fa-2x"/>
            <h5>Sign In</h5>
            <MDBCardBody>
                <MDBValidation onSubmit={handleSubmit} nonValidate  className="row g-3"  >

                    <div className="col-md-12">
                        <MDBInput  required invalid validation="Please Provide yours email" label="Email" type="email" value={email} onChange={onInputChange} />
                    </div>

                    <div className="col-md-12">
                        <MDBInput  required invalid validation="Please Provide yours password" label="Password" type="password" value={password} onChange={onInputChange} />
                    </div>
                    <div className="col-md-12">
                        <MDBBtn style={{width:"100%"}} className="mt-2">
                            Login

                        </MDBBtn>
                     
                    </div>
                </MDBValidation>
            </MDBCardBody>
            <MDBCardFooter>
                <Link to="/register"> 
                <p>Don't have an account ? Sign Up</p>
                </Link>

            </MDBCardFooter>

        </MDBCard>

    </div>
  );
};

export default Login;
