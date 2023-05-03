import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const [error, setError] = useState("");
  const { createUser, profileUpdate } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const registeredUser = result.user;
        // console.log(registeredUser);
        form.reset();
        toast.success("Registration successful");
        updateData(registeredUser, name, photo);
      })
      .catch((error) => {
        // console.log(error);
        setError(error.message);
        toast.error(error.message);
      });

    const updateData = (user, name, photoURL) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      })
        .then(() => {
          console.log("updated");
        })
        .catch((error) => console.log(error.message));
    };
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Registration here.</h1>
          <p className="py-6">
            Welcome to our website's registration page! We're thrilled that
            you've decided to join our community of like-minded individuals who
            share a passion for foods and delicious recipes.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                required
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
              />
              <label className="label">
                You have account already?
                <Link
                  to="/login"
                  className="label-text-alt link link-hover bg-yellow-400"
                >
                  Login here.
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="button" className="btn btn-active border-0 bg-yellow-500">
                Register
              </button>
            </div>
          </form>
        </div>
        <p className="bg-red-500 flex items-center">
          {" "}
          <span className="ms-3 text-2xl">{error}</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
