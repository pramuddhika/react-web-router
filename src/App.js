import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Home from "./componnets/Home";
import Laptop from "./componnets/Laptop";
import Software from "./componnets/Software";
import Accessories from "./componnets/Accessories";
import Nav from "./componnets/Nav";
import logo512 from './componnets/photos/logo512.png';


 

function App() {
  return (
    <div>
        <h1 id = "title">REACT COMPUTERS</h1>
        <BrowserRouter>
          <Nav/>
         <Switch>
              <Route path = "/" exact component = {Open} />
              <Route path = "/Home" component = {Home} />
              <Route path = "/Laptop" component = {Laptop} />
              <Route path = "/Software" component = {Software} />
              <Route path = "/Accessories" component = {Accessories} />
         </Switch>
        </BrowserRouter>
        
    </div>
  );
}

const Open = () => (
  <div>
     <table>
      <tr>
          <td><img id = "logo" src = {logo512} width = "40%" height = "70%"/></td>
          <td> <p id = "welcome">Welcome</p> <br/>
          <p id = "details">
             contact us:-<br/>
             0765362275 <br/>
             pramuddhika21@yahoo.com</p>
              </td>
      </tr>
  </table>

  </div>
);

export default App;
