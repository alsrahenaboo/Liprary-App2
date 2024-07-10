import React from "react";
import react,{useRef} from "react";
import { useNavigate } from "react-router-dom";





function Signup() {
    const navigate = useNavigate();
    const name=useRef();
    const email=useRef();
    const password=useRef();
    const handleClick=() =>{
        console.log(
          name.current.value,
          email.current.value,
          password.current.value
        );
        if(name.current.value&&email.current.value&&password.current.value)
        {
            localStorage.setItem("name",name.current.value)
            localStorage.setItem("email",email.current.value)
            localStorage.setItem("password",password.current.value)
            alert("welcome")
            navigate("/");
        }
           
    }
  return (
    <div className="contact">
      <h1>Welcome to Signup</h1>
      <form>
        <div>
          <input placeholder="Name" type="text" ref={name} />
        </div>
        <div>
          <input placeholder="Email" type="text" ref={email} />
        </div>
        <div>
          <input placeholder="Password" type="password" ref={password} />
        </div>
        <button onClick={handleClick}>Send</button>
      </form>
    </div>
  );
}

export default Signup;