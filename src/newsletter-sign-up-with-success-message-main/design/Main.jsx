import { React, useEffect, useState } from "react";
import "./Main.css";
import  classes from './Thanks.module.css';
import images from "../assets/images/icon-success.svg";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import mobile from "../assets/images/illustration-sign-up-mobile.svg";
import image from "../assets/images/illustration-sign-up-desktop.svg";
import success from "../assets/images/icon-success.svg";
import { Link } from "react-router-dom";
import Thanks from "./Thanks";

function Main() {
  const [thanks,setThanks]= useState(Thanks)
  const [emailValue, setEmailValue] = useState("");
  // const [formhasError, setFormHasError] = useState(false);
  const [formIsValid, setFormIsValid] = useState(true)
  const navigate = useNavigate(); 
//  const formIsValid=!formhasError && emailValue!=='' 
  console.log(formIsValid)
  const emailHander=(e)=>{
    setEmailValue(e.target.value)
    if(e.target.value !== "") {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (emailValue!== "") {
      setFormIsValid(true)
    navigate('/Thanks')

    }else{
      setFormIsValid(false)
      console.log(false)
      return
    }
    console.log(emailValue)
    setEmailValue('')
  };

  return (
    <div className="container">
      <div className="form">
        <div className="leftcontent">
          <h2>Stay updated!</h2>
          <p>Join 60,000+ product mnagers receiving monthly updates on.</p>
          <ul>
            <li>
              <span>
                <img className="tick" src={success} alt="" />
              </span>
              Product discovery and building what matters
            </li>
            <li>
              <span>
                <img className="tick" src={success} alt="" />
              </span>
              Measuring to ensure updates are a success
            </li>
            <li>
              <span>
                <img className="tick" src={success} alt="" />
              </span>
              And much more!
            </li>
          </ul>
          <form onSubmit={submitFormHandler}  className="formfield">
            <label htmlFor="">Email address</label> <br />
            <br />
            <input
              type="text"
              id="email"
              value={emailValue}
              onChange={emailHander}
              placeholder="email@company.com"
            />
            <Link to='/thanks.jsx'></Link>
            {formIsValid ? <></> : <><p>please input a valid email</p>
            </>
            }
            <br />
            <br />
           {/* {!formIsValid ? '' : <> */}
           {/* <button */}
          
            
          {/* //     */}
        
            {/* {formIsValid && <Thanks>
              </Thanks>} */}
            <button>Submit your News letter</button>
          </form>
        </div>
        <div className="rightcontent">
          <div className="image">
            {<p></p>}
            <img className="desktop" src={image} alt="" />
            <img className="mobile" src={mobile} alt="" />
          </div>
        </div>
      </div>
    {/* { formIsValid &&
 <div className={classes.container}>
 <div className={classes.form}>
   <h1>
     <img className={classes.success} src={images} alt="" />
   </h1>

   <h1>
     Thanks for <br />
     Subscribing!
   </h1>
   <br />
   <p>
     A confirmation email has been sebt to ash@loremcompany.com Please open
     it and clickthe button inside to confirm your subscription.
   </p> <br />
   <Link to='/'>

   <input className={classes.submit} type="submit" value="Dismiss message" />
   </Link>
 </div>
</div>
    } */}
     
    </div>
  );
}

export default Main;
