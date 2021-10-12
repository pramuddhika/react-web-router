import React from "react";
 
  
import warranty from './photos/warranty.png';
import support from './photos/support.png';
import delivarty from './photos/delivarty.png';
import payment from './photos/payment.png';
import laptop from './photos/laptop.jpg';
import keyboard from './photos/keyboard.jpg';
import software from './photos/software.jpg';
import logo512 from './photos/logo512.png';


function Home(){
    return(
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

            <table id = "number_1">
                 <tr>
                     <td><p id = "lap_home">LATEST <br/>LAPTOP</p> 
                     <a href = "Laptop"><button>Shop now</button></a>
                     <br/>
                     <br/>
                     </td>
                      <td><img id = "lap" src = {laptop} alt = "laptop" width = "700px" height = "400px"/></td>
                 </tr>
                 <tr>
                 <td><img src = {software} alt = "software_cord" width = "700px" height = "400px"/></td>
                   <td><p id = "lap_home">ORIGINAL <br/> SOFTWARE</p> 
                     <a href = "Software"><button>Shop now</button></a>
                     <br/>
                     <br/>
                   </td>
                 </tr>
                 <tr>
                 <td><p id = "lap_home">BRANDED <br/> ACCESSOROES</p> 
                     <a href = "Accessories"><button>Shop now</button></a>
                     <br/>
                     <br/>
                     </td>
                      <td><img src = {keyboard} alt = "accessoroes" width = "700px" height = "400px"/></td>
                 </tr>
            </table>
            < table id = "number_2">
                <tr>
                    <td><img src = {warranty} alt = "warranty" width = "400px" height = "200px"/> <br/>
                    <h3> WARRANTY</h3> <br/>
                    We have a high liability and claims procedure to ensure that <br/> your needs are met with minimal loss.</td>
                    <td><img src = {support} alt = "support" width = "400px" height = "200px"/> <br/>
                    <h3> SUPPORT </h3> <br/>
                    Emaill or call us with any question, and we'll be happy to heip</td>
                 </tr>
                 <tr>
                     <td><img src = {delivarty} alt = "delivary" width = "400px" height = "200px"/> <br/>
                     <h3> DELIVERY </h3> <br/>
                     We ship island and provide various delivery options.</td>
                     <td><img src = {payment} alt = "secure payment" width = "400px" height = "200px"/> <br/>
                     <h3> SECURE PAYMENT </h3> <br/>
                     Our site is secure so you don't have to warry about making online transactions.</td>
                 </tr>
            </table>
        </div>

    );
}

export default Home;