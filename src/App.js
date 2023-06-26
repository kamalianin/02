import './assets/scss/App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import Header from "./components/blocks/header.js";
import Footer from "./components/blocks/footer.js"
import Content from "./components/blocks/content";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import Breadcrumbs from "./components/blocks/breadcrumbs.js"

export const  brandName = process.env.REACT_APP_NAME

function App() {

  return (
    <div className="App">
      <Header></Header>
    <div className="main-content">
        <Breadcrumbs></Breadcrumbs>
        <div className="container">
            <Content></Content>
        </div>
    </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
