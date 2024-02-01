/* eslint-disable react/prop-types */
function App() {
  return (
    <div>
      <CardWrapper>hi there</CardWrapper>
      <CardWrapper>hello there</CardWrapper>
    </div>
  );
}

//concept for Wrapper Component
function CardWrapper({ children }) {
  //create a div which has a border (hint : the way to create a border is border :2px solid black)
  //and inside the div , renders the prop
  return <div style={{ border: "2px solid black" }}>{children}</div>;
}

export default App;
