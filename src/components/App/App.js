import React, { useState } from "react";
import firebase from "firebase";
import MainPage from "../MainPage";
import Header from "../Header";
import Articles from "../Articles";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [fireCollection, setFireCollection] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("data").get();
      setFireCollection(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchData();
  }, []);

  const articles = fireCollection.map((el) => {
    return (
      <Route path={`/article/${el.id}`} key={el.id}>
        <Articles
          description={el.description}
          src={el.imageUrl}
          title={el.title}
          сomment={el.expertComment}
        />
      </Route>
    );
  });

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/articles" />
        </Route>
        <Route exact path="/articles">
          <MainPage data={fireCollection} />
        </Route>
        {articles}
      </Switch>
    </Router>
  );
}

export default App;
