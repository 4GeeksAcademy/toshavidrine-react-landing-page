import React from "react";
import JumbotronComponent from "./jumbotron";
import Card from "./card";
import NavbarComponent from "./navbar";
import Footer from "./footer"
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

// Home component
const Home = () => {
    return (
        <div className="text-center">
            <NavbarComponent />
            <JumbotronComponent />
            <div className="d-flex justify-content-center">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;

