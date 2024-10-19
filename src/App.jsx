import Navbar from "./componets/header/Navbar";
import bg from "../src/assets/image/bgsky.jpg";
import Booking from "./componets/Booking/Booking";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center h-[100vh]"
    >
      <Navbar />
      <Booking />
    </div>
  );
}

export default App;
