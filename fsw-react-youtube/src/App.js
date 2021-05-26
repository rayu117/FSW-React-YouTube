import './App.css';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import VideoCard from './Components/VideoCard'
import About from './Components/About'
import { Route, Switch } from "react-router-dom";



function App() {
  // renderVideo = props => {
  //   const { id } = props.match.params;
  //   if 
  // }
  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
        <Route exact path="/">
          <h1>Youtube App</h1>
          <SearchBar />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/video/:videoId" render={VideoCard}  />
        </Switch>
      </main>
      
      
    </div>
  );
}

export default App;
