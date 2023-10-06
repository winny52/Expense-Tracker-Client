import React from "react"
import { Link } from "react-router-dom"
function Menu(){
    return(
        <div className="bg-blue-400 p-4 w-3/12 border-rounded h-screen">
            <h1 className="text-4xl font-extrabold font-sans text-cyan-900 pb-6">LATTO EXPENSE TRACKER</h1>
             <div className="flex flex-col ">
             <Link to={"/homepage"} className="rounded-md p-4 text-2xl hover:bg-blue-700 hover:text-White">HOME</Link>
             <Link to={"/analysis"}className="rounded-md p-4 text-2xl hover:bg-blue-700 hover:text-White">ANALYSIS</Link>
             </div>
             <br/><br/><br/><br/><br/><br/>
             <Link to={"/expenseform"} className="bg-blue-200 rounded-md p-2 hover:h-12 hover:text-lg ml-36">ADD EXPENSE</Link>
             
        </div>
    )
}

export default Menu