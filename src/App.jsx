import Header from "./Header";
import Footer from "./Footer";
import "./app.css";
import Hero from "./Hero";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="">
        <Hero />
      </div>
      <div className="">
        <Footer />{" "}
      </div>
    </div>
  );
};

export default App;
