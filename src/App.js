
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Article from './components/Article/Article';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import ServiceDetails from './components/Home/ServiceDetails/ServiceDetails';
import OurServices from './components/OurServices/OurServices/OurServices';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound';
import Registration from './components/Authentications/Registration/Registration';
import LogIn from './components/Authentications/LogIn/LogIn';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/ourservices">
            <OurServices></OurServices>
          </Route>
          <Route exact path="/servicedetails/:serviceid">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/article">
            <Article></Article>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact={true} path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
