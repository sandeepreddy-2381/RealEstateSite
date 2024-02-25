import {React} from "react";
import { Provider ,useSelector} from "react-redux";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Home from "./container/Home";
import About from "./container/About";
import Login from "./container/Login";
import Signup from "./container/Signup";
import Listings from "./container/Listings";
import ListingDetails from "./container/ListingDetails";
import Contact from "./container/Contact";
import Layout from "./hocs/Layout";
import NotFound from "./components/NotFound";
import "./sass/main.scss";
import store from "./store";
import PrivateRoute from "./components/privateRoute";



const App = () => {
  const { isAuthenticated } = useSelector(state => state.auth)
  return (
    // <Provider store={store}>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:id" element={isAuthenticated === true ? <ListingDetails /> : <Navigate to="/login" />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    // </Provider>
  );
};

export default App;
