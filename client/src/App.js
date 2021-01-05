import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./screens/Home";
import Service from "./screens/Service";
import Cart from "./screens/Cart";
import SignIn from "./screens/SignIn";
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Register from "./screens/Register";
import ServicesScreen from "./screens/ServicesScreen";
import Appointment from "./screens/Appointment";
import About from "./screens/About";
import Calendar from "./screens/Calendar";
import Schedule from "./screens/Schedule";
import Contact from "./screens/Contact";
import Manicure from "./screens/Manicure";
import Pedicure from "./screens/Pedicure";
import Epilation from "./screens/Epilation";
import GalleryPage from "./screens/GalleryPage";
import AdminScreen from "./screens/AdminScreen";
import CreateAppointment from "./screens/CreateAppointment";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      
      <Footer />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/appointment" component={Appointment} />
      <Route path="/services" component={ServicesScreen} />
      <Route path="/service/:id" component={Service} />
      <Route path="/cart/:id?" component={Cart} />
      <Route path="/create-appointment" component={CreateAppointment} />
      <Route path="/signin" component={SignIn} />
      <Route path="/register" component={Register} />
      <Route path="/manicure" component={Manicure} />
      <Route path="/pedicure" component={Pedicure} />
      <Route path="/epilation" component={Epilation} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/administration" component={AdminScreen} />
    </BrowserRouter>
  );
}

export default App;
