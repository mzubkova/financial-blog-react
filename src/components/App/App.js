import React from "react";
import MainPage from "../MainPage";
import Header from "../Header";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import data from "../../data/data.json";
import Articles from "../Articles";

function App() {
  const articles = data.map((elem) => {
    return (
      <Route exact path={`/articles/${elem.id}`} key={elem.id}>
        <Articles
          {...elem}
          src={elem.img}
          description={elem.articleDescr}
          title={elem.description}
        />
      </Route>
    );
  });
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/article" />
          </Route>
          <Route exact path="/article/" component={MainPage} />
          {articles}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
