import React from "react";
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";
const options = {
  orientation: "landscape",
  unit: "in",
  format: [20, 16],
};

const ref = React.createRef();

const Blog = () => {
  return (
    <div>
      <div
        ref={ref}
        className="space-y-10 text-start bg-slate-200 p-5 rounded-xl"
      >
        <h1 className="text-2xl font-semibold">
          {" "}
          1. Tell us the differences between uncontrolled and controlled
          components.
        </h1>{" "}
        <p className="text-xl">
          - A controlled component is controlled by the React states ,whereas
          the uncontrolled components maintains and controls all the things by
          its own internal state and not dependent on react. However there are
          some significant differences between this two. The data flow system in
          the controlled component flows from parent to components .
          Uncontrolled component flows the data among itself. Debugging is
          really an important thing for a developer and when it comes to
          uncontrolled components ,the debugging gets so tough and difficult. On
          the other hand debugging is way more easier in the controlled
          components, cause it is controlled automatically by the react. The
          code complexity is also much difficult on the uncontrolled components.
        </p>
        <h1 className="text-2xl mb-5 font-semibold">
          {" "}
          2. How to validate React props using PropTypes.
        </h1>{" "}
        <p className="text-xl">
          - React is a javascript library used for creating interactive web
          frontend applications. We know that, parent components can pass any
          data as props to its children components. So If we can validate the
          data type of the prop before sending it to the child components ,it
          would get much easier to use and also ensures that the child gets what
          it expects. Therefor, the package called PropTypes is so much useful
          and this is also provided by the react. Once you have imported
          PropTypes, you can add it to your component by defining a static
          property called "propTypes".
        </p>
        <h1 className="text-2xl mb-5 font-semibold">
          {" "}
          3. Tell us the difference between nodejs and express js.
        </h1>{" "}
        <p className="text-xl">
          - Node JS is a large open-source server-side runtime environment that
          is built on JavaScript. Whereas, the Express.js is a Node.js framework
          for web applications. So we can say that, the node.js is the parent of
          Express.js or Express.js is built on top of Node.js. Express.js
          simplifies the development process and provides a solid foundation for
          building web applications quickly. You can use Express.js to build web
          applications using Node.js, but Node.js can also be used independently
          without any framework.
        </p>
        <h1 className="text-2xl mb-5 font-semibold">
          {" "}
          4. What is a custom hook, and why will you create a custom hook?
        </h1>{" "}
        <p className="text-xl">
          - A custom hook is a function that starts following the conventional
          naming system for a hook. A custom hook is reusable and it can be used
          depending on the situation handling. The main use case for a custom
          hook is to share stateful logic amongst the components available in
          the web application. If someone wants to fetch data from an API with a
          component, he can create a custom hook that can handle the API call,
          data fetching and so on. Custom hooks helps a lot to reduce the
          duplication of the same codes, which is an important part for a
          developer.
        </p>
      </div>
      <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
        {({ toPdf }) => (
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5"
            onClick={toPdf}
          >
            <FaDownload></FaDownload> <span className="ms-4">Download PDF</span>
          </button>
        )}
      </Pdf>
    </div>
  );
};

export default Blog;
