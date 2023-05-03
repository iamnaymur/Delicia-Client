import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("");
        setError(error.message);
        // console.log(error.message)
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setError("");
        const loggedUser = result.user;
        // console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubSignIn = () => {
    gitHubSignIn().then((res) => {
      setError("");
      const loggedUser = res.user;
      navigate(from, { replace: true });
    })
      .catch(error => {
      console.log(error)
    })
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Welcome back to our website's login page! We're glad to see you
            again and hope you've been enjoying your experience so far. Please
            enter your login credentials to access your account and enjoy all
            the benefits.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                Don't have an account?
                <Link
                  type="button"
                  to="/register"
                  className="label-text-alt link link-hover bg-yellow-400"
                >
                  Register here.
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-active border-0 bg-yellow-500">
                Login
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn btn-wide btn-outline btn-warning mb-3"
              >
                <FaGoogle />
                <span className="ms-2"> Sign in with Google</span>
              </button>
              <button
                type="button"
                onClick={handleGitHubSignIn}
                className="btn btn-wide btn-outline btn-warning"
              >
                <FaGithub />
                <span className="ms-2"> Sign in with Github</span>
              </button>
            </div>
          </form>
        </div>
        <p className="bg-red-500 flex items-center text-2xl">{error} </p>
      </div>
    </div>
  );
};

export default Login;
