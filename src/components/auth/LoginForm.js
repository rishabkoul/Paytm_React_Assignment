import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";

import classes from "./LoginForm.module.css";

const LoginFrom = () => {
  const dispatch = useDispatch();
  const [loggingIn, setLoggingIn] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoggingIn(true);

    fetch("https://run.mocky.io/v3/afa1b987-0835-4ee1-9375-6f57caa5c609")
      // the above api should retrun the data in this format only then this would work
      // {"token": "eW91J3JlIGFuIGF3ZXNvbWUgZGV2ZWxvcGVy"}

      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoggingIn(false);
        dispatch(login(data.token));
        localStorage.setItem("authToken", data.token);
      })
      .catch((error) => {
        setLoggingIn(false);
        console.log(
          "https://run.mocky.io/v3/afa1b987-0835-4ee1-9375-6f57caa5c609 this api should retrun the data in this format only then this would work {'token': 'eW91J3JlIGFuIGF3ZXNvbWUgZGV2ZWxvcGVy'}",
          error
        );
        alert(
          "https://run.mocky.io/v3/afa1b987-0835-4ee1-9375-6f57caa5c609 this api should retrun the data in this format only then this would work {'token': 'eW91J3JlIGFuIGF3ZXNvbWUgZGV2ZWxvcGVy'}" +
            error
        );
      });
  };
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>Login</h1>
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <button type="submit" className={classes.submit_btn}>
          {loggingIn ? <span>Loging In...</span> : <span>Login</span>}
        </button>
      </form>
    </div>
  );
};

export default LoginFrom;
