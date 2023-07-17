import Header from "./components/Header";
import UserInputContainer from "./components/UserInputContainer";
import Results from "./components/Results";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <UserInputContainer />
      <Results />
      <Footer />
    </>
  );
}

export default App;
