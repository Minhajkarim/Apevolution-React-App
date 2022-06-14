import "./App.css";
import About from "./Components/about/About";
import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import Feature from "./Components/feature/Feature";
import Banner from "./Components/banner/Banner";
import Roadmap from "./Components/Roadmap/Roadmap"
import Tree from "./Components/Treehouse/Tree"
import Team from "./Components/team/Team"
import Footer from "./Components/footer/Footer"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Feature />
      <Banner />
      <Roadmap />
      <Tree />
      <Team />
      <Footer />
      
    </div>
  );
}

export default App;
