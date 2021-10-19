
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

import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      {/* //here using auth provider to for all route.  */}
      <AuthProvider>
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

            <PrivateRoute exact path="/servicedetails/:serviceid">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute path="/article">
              <Article></Article>
            </PrivateRoute>
            <PrivateRoute path="/shop">
              <Shop></Shop>
            </PrivateRoute>
            <Route path="/registration">
              <Registration></Registration>
            </Route>

            <Route exact={true} path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
