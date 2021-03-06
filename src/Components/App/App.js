import { Header } from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import SideBar from "../SideBar/SideBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MainContent />
        <SideBar />
      </div>
      <footer>
        Made with <span className="heart">&#10084;</span> by Brandon Hazelton
        &copy; 2022
      </footer>
    </div>
  );
}

export default App;
