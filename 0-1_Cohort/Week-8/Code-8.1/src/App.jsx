import { RevenueCard } from "../components/RevenueCard";
import "./App.css";

function App() {
  return (
    <>
      <RevenueCard
        title={"Amount Pending"}
        amount={"92,399.89"}
        orderCount={13}
      />
    </>
  );
}

export default App;
