import React from "react";
 

function BuyApplication(){
    return(
        <div>
            {/* the is added to the page , due to the mandetory requirement of getting details of the client. */}
              <table>
                <tr>
                    <td>1. Enter   Your name:</td>
                    <td><textarea/></td>
                </tr>
                <tr>
                    <td>2. Enter Your contact number:</td>
                    <td><textarea/></td>
                </tr>
                <tr>
                  <td>Our shop will contact you withing 2 hours for get futher detai
                      
                      ls.</td>
                  <td><button><a href = "Home">Submit</a></button></td>
                 </tr>
            </table>
        </div>
    );
}

export default BuyApplication;