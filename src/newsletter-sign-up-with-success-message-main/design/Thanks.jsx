import React from "react";
import  classes from './Thanks.module.css'
import image from "../assets/images/icon-success.svg";
import { Link } from "react-router-dom";
function Thanks() {
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <h1>
          <img className={classes.success} src={image} alt="" />
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
  );
}

export default Thanks;
