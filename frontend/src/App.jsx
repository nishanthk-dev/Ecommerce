import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      
      <Navigation />
      <main className="mt-[80px]">
        <Outlet />
      </main>
    </>
  );
}

export default App;
