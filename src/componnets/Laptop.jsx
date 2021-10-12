import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import BuyApplication from "./BuyApplication";
import DellVestro from "./DellVestro";
import HPpavilion from "./HPpavilion";

 
import dell_vestro_5502 from './photos/dell_vestro_5502.webp';
import hp_pavilion_15 from './photos/hp_pavilion_15.jpg';

function Laptop(){
    return(
        <div>
            <table id = "table_2">
                <tr>
                 <td id = "td_1"><img src = {dell_vestro_5502} alt = "dell-vestro-5502" width = "500px" height = "300px"/><br/>
                 <p>Dell Vestro 5502 <br/>
                 i5 11<sup>th</sup> Gen <br/> 8GB RAM <br/> 512GB HHD <br/> Intel Iris Graphic <br/> 15.6'' FHD</p>
                 <BrowserRouter>
                             <Link to = "/DellVestro"><button>View More</button></Link>
                     <Switch>
                         <Route path = "/Dellvestro">
                         <DellVestro/></Route>
                     </Switch>
                     </BrowserRouter>
                      <BrowserRouter>
                             <Link to = "/BuyApplication"><button>Buy Now</button></Link>
                     <Switch>
                         <Route path = "/BuyApplication">
                         <BuyApplication/></Route>
                     </Switch>
                     </BrowserRouter></td>
                 <td id = "td_1"><img src ={hp_pavilion_15} alt = "hp-pavilon-15" width = "500px" height = "300px"/>
                 <p>HP Pavilion 15-eg0121 <br/>
                 i7 11<sup>th</sup> Gen <br/> 8GB RAM <br/> 512GB SSD <br/> Windows 10 64bit <br/> 15.6'' FHD </p>
                 <BrowserRouter>
                             <Link to = "/HPpavilion"><button>View More</button></Link>
                     <Switch>
                         <Route path = "/HPpavilion">
                         <HPpavilion/></Route>
                     </Switch>
                     </BrowserRouter>
                  <BrowserRouter>
                             <Link to = "/BuyApplication"><button>Buy Now</button></Link>
                     <Switch>
                         <Route path = "/BuyApplication">
                         <BuyApplication/></Route>
                     </Switch>
                     </BrowserRouter>
                 </td>
                </tr>
            </table>
        </div>
    );
}

export default Laptop;