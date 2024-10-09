import "./index.scss";
import "./App.scss";
import Header from "./Header/Header";
import Quiz from "./Body/Quiz";
import Footer from "./Footer/Footer";
import { wordlist } from "./assets/constants";

function App() {
  return (
    <div className="App">
      <Header />
      <Quiz questions={wordlist.questions} />
      <Footer />
    </div>
  );
}

export default App;
