import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import './App.css';
import Home from "./componnets/Home";
import Laptop from "./componnets/Laptop";
import Software from "./componnets/Software";
import Accessories from "./componnets/Accessories";


 

function App() {
  return (
    <div>
        <h1 id = "title">REACT COMPUTERS</h1>
        <BrowserRouter>
         <nav>
             <table id = "table_2">
                <tr>
                    <th><Link to = "/Home">Home</Link></th>
                    <th><Link to = "/Laptop">Laptop</Link></th>
                    <th><Link to = "/Software">Software</Link></th>
                    <th><Link to = "/Accessories">Accessories</Link></th>
                </tr>
             </table>
          </nav>
         <Switch>
             <Route path = "/Home">
                 <Home/>
             </Route>
             <Route path = "/Laptop">
                 <Laptop/>
             </Route>    
              <Route path = "/Software">
                 <Software/>
             </Route>
             <Route path = "/Accessories">
                 <Accessories/>
             </Route>
         </Switch>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
