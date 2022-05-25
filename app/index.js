import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./experience.css";
// import "./about.css";
// import Experience from "./components/Experience";
// import About from "./components/About";
import Nav from "./components/Nav";
import { ThemeProvider } from "./contexts/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";

const Popular = React.lazy(() => import("./components/Popular"));
const Battle = React.lazy(() => import("./components/Battle"));
const Results = React.lazy(() => import("./components/Results"));

class App extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light",
      }));
    },
  };

  render() {
    // const jobs = [
    //   {
    //     name: "McDonalds",
    //     title: "Fry Guy",
    //     duration: "January 2016 to March",
    //     descriptions: ["Made french fries", "Cleaned toilets"],
    //   },
    //   {
    //     name: "Google",
    //     title: "CEO",
    //     duration: "August 2017 to June 2019",
    //     descriptions: [
    //       "I was the CEO, bitch",
    //       "I fucked shit up",
    //       "Near bankruptcyjlhflsdjhflsdjhflsjdhfldjhldjfhgldjfhglsdjhfglsjdhfgljsdhfgljshdfgldslfjghdljhgldjhglsdjhfglsjdhfgljsdhfgjlsdhglsjhldhfjghlsdjghlsjh",
    //     ],
    //   },
    //   {
    //     name: "NASA",
    //     title: "Astrodude",
    //     duration: "September 2019 to Present",
    //     descriptions: [
    //       "Went to the moon",
    //       "Ate space food",
    //       "Blew up the ISS by accident",
    //     ],
    //   },
    //   {
    //     name: "Boston High",
    //     title: "Janitor",
    //     duration: "2005, when I dropped out of highschool",
    //     descriptions: [
    //       "I picked half eaten apples out of the trashcan in order to feed my family every night",
    //       "Solved really difficult math problems on the hallway chalkboard when nobody was looking",
    //       "Terrorized local psychologists",
    //       "My best friend is Ben Affleck",
    //     ],
    //   },
    //   {
    //     name: "Florida Keys",
    //     title: "Island Boy",
    //     duration: "Since birth dawg",
    //     descriptions: [
    //       "Foo gazin'",
    //       "Staring at the sun",
    //       "Putting my vest on",
    //       "Tryna make it to the top",
    //       "Tryna hunt like a lion",
    //     ],
    //   },
    // ];

    // const about = {
    //   about: [
    //     "I am dog, my name Bruno.",
    //     "I like sniff butt",
    //     "Favorite food is bean and cheese burrito",
    //     "I work good. Protect humans good.",
    //     "I very much love sleeping",
    //   ],
    //   techs: [
    //     "Sniffing butts",
    //     "Vomiting",
    //     "Peeing on posts",
    //     "Large bark",
    //     "Unable to work with cats, sorry",
    //     "Sneaky",
    //     "Can determine if human is mad or not",
    //   ],
    // };

    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />

              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path="/" component={Popular} />
                  <Route exact path="/battle" component={Battle} />
                  <Route path="/battle/results" component={Results} />
                  <Route render={() => <h1>404</h1>} />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
      // <div className="container">
      //   <About about={about}/>
      // </div>
    );
  }
}

ReactDOM.render(
  // react element
  <App />,
  // where to render element to
  document.getElementById("app")
);
