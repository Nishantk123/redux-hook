import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { reducers } from "./reducer";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./Product";
import User from "./User";
import Cart from "./Cart";

function App() {
  const store = createStore(reducers, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/product" component={Product} />
          <Route exact path={"/"} component={User} />
          <Route exact path={'/cart'} component={Cart} />
          {/* <Task /> */}
          {/* <Study /> */}
          {/* <Form /> */}
          {/* <Assignment /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
