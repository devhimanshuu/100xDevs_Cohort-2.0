/* eslint-disable react/prop-types */
import React, { useState } from "react";
function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="Himanshu-2"></Header>
      <Header title="Himanshu-3"></Header>
      <Header title="Himanshu-4"></Header>
      <Header title="Himanshu-5"></Header>
      <Header title="Himanshu-6"></Header>
    </div>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("My name is Himanshu");
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
    </div>
  );
}
// function Header({ title }) {
//   console.log("rendered");
//   return <div>{title}</div>;
// }
const Header = React.memo(function Header({ title }) {
  console.log("rendered");
  return <div>{title}</div>;
});

export default App;
