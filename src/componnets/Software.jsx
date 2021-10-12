import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import BuyApplication from "./BuyApplication";

import eset from './photos/eset.jpg';
import adobe from './photos/adobe.jpg';

function Software(){
    return(
        <div>
            <table id = "table_2">
                <tr>
                    <td id = "td_1"><img src = {eset} alt = "eset" width = "500px" height = "500px"/>
                    <p>ESET Internet Security<br/> 1 User 1 Year</p>
                    <BrowserRouter>
                             <Link to = "/BuyApplication"><button>Buy Now</button></Link>
                     <Switch>
                         <Route path = "/BuyApplication">
                         <BuyApplication/></Route>
                     </Switch>
                     </BrowserRouter></td>
                    <td id = "td_1"><img src = {adobe} alt = "adobe-ps" width = "500px" height = "500px"/>
                    <p>Adobe phothoshop cc 2021</p>
                    <BrowserRouter>
                             <Link to = "/BuyApplication"><button>Buy Now</button></Link>
                     <Switch>
                         <Route path = "/BuyApplication">
                         <BuyApplication/></Route>
                     </Switch>
                     </BrowserRouter></td>
                 </tr>
            </table>
        </div>
    );
}

export default Software;