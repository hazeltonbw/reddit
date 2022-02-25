import { Header } from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import SideBar from "../SideBar/SideBar";
import Banner from "../Banner/Banner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Banner />
        <MainContent />
        <SideBar />
      </div>
      <footer>
        Made with <span className="heart">&#10084;</span> by Brandon Hazelton
        &nbsp; &copy; 2022
      </footer>
    </div>
  );
}

export default App;
