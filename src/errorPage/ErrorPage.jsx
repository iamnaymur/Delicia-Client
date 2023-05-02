import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 text-black">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          style={{ width: "500px", height: "500px" }}
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1681213720~exp=1681214320~hmac=0d80f6c1ea65608ac6f851911ddfb2f5aeafbf6cc8424c411f5e63a0786e3603"
          alt=""
        />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-yellow-300 text-gray-900"
          >
            Back to home.
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
