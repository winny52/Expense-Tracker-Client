import React from "react";
import Menu from "./menu";
import Expenses from "./expenseList";
import Chart from "./chart";
function Homepage(){
    return(
       <div className="bg-blue-700 flex h-screen">
        <Menu/>
        <Chart/>
        <Expenses/>
       
       </div>)
}
 export default Homepage