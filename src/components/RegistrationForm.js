import React, {useState} from 'react'

const RegistrationForm = () => {

    const [formData, setFormData] =  useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const [errorFirstName, setErrorFirstName]=useState("");
    const [errorLastName, setErrorLastName]=useState("");
    const [errorEmail, setErrorEmail]=useState("");
    const [errorPassword, setErrorPassword]=useState("");
    const [errorCPassword, setErrorCPassword]=useState("");


    const onCreateAccount =(evt)=>{

        evt.preventDefault(); //not trigger a reload when submit

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/customers`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json() )
        .then(json => {

            alert(json.message)
            setFormData(
                {
                    firstName:"",
                    lastName:"",
                    email:"",
                    password:"",
                    confirmPassword:""
                }
            )

        })
        .catch(err => {
            console.log(`Error ${err}`);
            alert(err)
        })
    }

    const validateForm = ()=>{
        let isValidate = true;
        if(formData.firstName.trim()===""){
            setErrorFirstName("First name can not be empty.");
            isValidate=false;
        }else{setErrorFirstName("");}

        if(formData.lastName.trim()===""){
            setErrorLastName("Last Name can not be empty.");
            isValidate=false;
        }else{setErrorLastName("");}

        if(formData.email.trim()===""){
            setErrorEmail("Email can not be empty.");
            isValidate=false;
        }else{setErrorEmail("");}

        if(formData.password.trim()===""){
            setErrorPassword("Password can not be empty.");
            isValidate=false;
        }else{setErrorPassword("");}

        if(formData.confirmPassword.trim()===""){
            setErrorCPassword("Please re=enter your password to confirm.");
            isValidate=false;
        }else if(formData.confirmPassword!==formData.password){
            setErrorCPassword("Password confirmation does not match.");
            isValidate=false;
        }else{
            setErrorCPassword("")
        }

        return isValidate;
    }

    return (


        <div className= "container col-md-5 ">
                
            <h1>Registration Form</h1>

            <form >

                <div className="form-group">
                    <label htmlFor="firstName" className="col-form-label-lg">First Name</label>
                    <input type="text" id="firstName" className="form-control" required value={formData.firstName} onChange={(evt) =>{
                        setFormData({...formData,firstName:evt.target.value})
                    }}/>

                    <span className="error">{errorFirstName}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="col-form-label-lg">Last Name</label>
                  <input type="text" id="lastName" className="form-control" required value={formData.lastName} onChange={(evt) =>{
                     setFormData({...formData,lastName:evt.target.value})
                    }}/>
                    <span className="error">{errorLastName}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="col-form-label-lg">Email</label>
                    <input type="email" id="email" className="form-control" required value={formData.email} onChange={(evt) =>{
                      setFormData({...formData,email:evt.target.value})
                   }}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <span className="error">{errorEmail}</span>
                </div>


                <div className="form-group">
                    <label htmlFor="password" className="col-form-label-lg">Password</label>
                    <input type="text" id="password" className="form-control" required value={formData.password} onChange={(evt) =>{
                        setFormData({...formData,password:evt.target.value})
                    }}/>
                    <span className="error">{errorPassword}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="cpassword" className="col-form-label-lg">Confirm Password</label>
                    <input type="text" id="password" className="form-control" required value={formData.confirmPassword} onChange={(evt) =>{
                     setFormData({...formData,confirmPassword:evt.target.value})
                    }}/>
                    <span className="error">{errorCPassword}</span>
                </div>
                <br/>

                <div className="form-group ">
                    <button className="btn btn-dark my-1" type="button" onClick={(evt)=>{
                        if(validateForm()){
                            onCreateAccount(evt);
                        }else{
                            alert("There are errors, please check your input.")
                        }

                    }}>Create Account</button>
                </div>

            </form>

        </div>

    )
}

export default RegistrationForm
