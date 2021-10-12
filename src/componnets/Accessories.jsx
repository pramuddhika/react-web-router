import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import BuyApplication from "./BuyApplication";

import g_keyboard from './photos/g_keyboard.jpg';
import g_headset from './photos/g_headset.jpg';

function Accessories(){
    return(
        <div>
            <table id = "table_2">
                <tr>
                    <td id = "td_1"><img src = {g_keyboard} alt = "gaming keybord" width = "500px" height = "550px"/>
                    <p>Wireless keyboard and mouse<br/> rainbow backlit</p>
                    <BrowserRouter>
                             <Link to = "/BuyApplication"><button>Buy Now</button></Link>
                     <Switch>
                         <Route path = "/BuyApplication">
                         <BuyApplication/></Route>
                     </Switch>
                     </BrowserRouter></td>
                    <td id = "td_1"><img src = {g_headset} alt = "gaming headset" width = "500px" height = "550px"/>
                    <p>Gaming headset with mic <br/> for PC,PS4,Xbox</p>
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

export default Accessories;