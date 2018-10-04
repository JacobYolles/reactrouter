import React, {Fragment} from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


const App = () => (
  <Router>
<Fragment>
      <Nav />
      <Switch>
      <Route exact path="/" component={Books} />
      <Route exact path="/books" component={Books} />
      <Route exact path ="/books/:id" component={Detail} />
      {/* No match component needs to go on the bottom of the list as it's asynchronus and will check it off last. */}
      <Route component={NoMatch} />
      </Switch>
      </Fragment>
  </Router>
);

export default App;
