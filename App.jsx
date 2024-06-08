import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import img1 from "./img1.png";
const react = require("react");
function App() {
  return (
    <div>
      <Header />
      <Notes />
      <img src={img1} alt="img1" />
      <Footer />
    </div>
  );
}
export default App;