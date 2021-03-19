import React, {Suspense} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";
import SocialMediaSection from "./sections/SocialMedia/SocialMediaSection";
import FAQSection from "./sections/FAQ/FAQSection";
import ScheduleSection from "./sections/Schedule/ScheduleSection";
import UpdateSection from "./sections/Updates/UpdateSection";
import GlobalFonts from "./fonts/fonts";
import {Holder, StarBackground} from "./AppStyle";
import {NavBarMargin} from "./components/NavBar/NavBarStyle";
import LocationSection from "./sections/Location/LocationSection";

const titleNames = [
    {title: "About", link: "/#about-nav"},
    {title: "FAQ", link: "/#faq-nav"},
    {title: "Location", link: "/#location-nav"},
    {title: "Schedule", link: "./#schedule"},
    {title: "Sponsors", link: "/#partners-nav"},
    // {title: "Community Partners", link: "https://defhacks.co/hackathons/global_2.0.html"}, //link: "https://defhacks.co/hackathons/global_2.0.html"
    {title: "Updates", link: "./updates"},
    {title: "2020", link: "https://2020.rowdyhacks.io/"}
    // { title: "RowdyHacks 2020", link: "will lead to github.pages" } //to work on in future with Brent
];

const LazyLoadedSections = React.lazy(() =>
    import("./sections/LazyLoadedSections")
);

const App: React.FC = () => {
    return (
        <div className="App">
            <GlobalFonts/>
            <NavBarMargin size={100}/>

            <BrowserRouter>
                <Switch>
                    <Route path="/updates" component={Updates}/>
                    <Route path="/day-of-event" component={DayOfEvent}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

const Home: React.FC = () => {
    return (
        <div>
            <Holder>
                <NavBar titles={titleNames}/>
            </Holder>
            <Hero/>
            <Suspense fallback={null}>
                <LazyLoadedSections/>
            </Suspense>
        </div>
    );
};

const Updates: React.FC = () => {
    return (
        <div>
            <Holder>
                <NavBar titles={titleNames}/>
            </Holder>
            <UpdateSection/>
            <SocialMediaSection/>
        </div>
    );
};

const DayOfEvent = () => {
    return (
        <div>
            <Holder>
                <NavBar titles={titleNames}/>
            </Holder>
            <ScheduleSection sectionNumber={4}/>
            <FAQSection/>
            <LocationSection sectionNumber={7}/>
        </div>
    );
};

export default App;
