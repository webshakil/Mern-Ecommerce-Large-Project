import { Route, Switch } from "react-router";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";


const App=()=> {
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
    </Switch>
  )
}


export default App;
