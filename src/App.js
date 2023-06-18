import './assets/scss/App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import Header from "./components/blocks/header.js";
import Footer from "./components/blocks/footer.js"
import Content from "./components/blocks/content";

export const  brandName = process.env.REACT_APP_NAME

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
