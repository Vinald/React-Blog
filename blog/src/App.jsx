import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/blog/Create.jsx";
import BlogDetails from "./components/blog/BlogDetails.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route exact path="/blogs">
                            <Home/>
                        </Route>

                        <Route exact path="/create">
                            <Create/>
                        </Route>

                        <Route exact path="/blog/:id">
                            <BlogDetails/>
                        </Route>
                        <Route path={"*"}>
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
