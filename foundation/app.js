import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h1 id="heading">This is heading from JSX!</h1>;

// React Components
const Title = () => <h1 id="head">Namaste React using JSX 🚀</h1>;

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 id="heading">Namaste React Functional Component!</h1>;
    </div>
  );
};

// const HeadingComponent2 = () => {
//   return (
//     <div id="container">
//       <h2>{100 + 200}</h2>
//       <h1 id="heading">Namaste React Functional Component!</h1>;
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
