import { BrowserRouter } from "react-router-dom";
import AuthGate from "./AuthGate";
import AgeGate from "./components/AgeGate";

function App() {
  const isAllowed = sessionStorage.getItem("is21Plus");

  return (
    <>
      <BrowserRouter>
        <AuthGate />
      </BrowserRouter>
      {!isAllowed && <AgeGate />}
    </>
  );
}

export default App;
