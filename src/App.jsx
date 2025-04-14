import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="text-2xl text-black">
        <Header />
        <main className="flex items-center justify-center mt-18 bg-white">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
