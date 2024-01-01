import "./App.css";
import Header from "./components/Header";

import Booking from "./components/Booking";

function App() {
  return (
    <div className="bg-[url(../src/assets/banner.jpg)]  bg-cover bg-no-repeat">
      <Header />
      <section className="h-screen">
     <Booking />
        <div>Table</div>
      </section>
    </div>
  );
}

export default App;
