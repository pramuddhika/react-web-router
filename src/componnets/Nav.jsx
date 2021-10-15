import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return(
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
    );
}

export default Nav;