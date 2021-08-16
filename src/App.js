import "./App.css";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Nav from "./Nav"
import whiskey from "./whiskey.jpg";
import perry from "./perry.jpg";
import tubby from "./tubby.jpg";
import duke from "./duke.jpg";

function App(props) {
  return (
    <BrowserRouter>
    {/* dont need to map here, because we map in nav */}
      <Nav dogNames={props.dogs.map(d => d.name)}/> 
      <Switch>
        <Route exact path="/dogs">
          <DogList dogInfo={props.dogs}/>
        </Route>
        <Route exact path="/dogs/:name">
          <DogDetails dogInfo={props.dogs}/>
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </BrowserRouter>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;
