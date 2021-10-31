import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

import MyOrder from './components/MyOrder/MyOrder';
import NotFound from './components/NotFount/NotFound';
import Services from './components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageAllOrder from './components/ManageOrder/ManageAllOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <div className="main-wrap">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <PrivateRoute exact path="/services">
            <Services></Services>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute exact path='/order'>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/orders">
            <ManageAllOrder></ManageAllOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/order/:id">
          <MyOrder></MyOrder>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        </div>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
