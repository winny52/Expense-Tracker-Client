import React from "react";
import Menu from "./menu";
import Analyse from "./analysisChart";
function Analysis(){
    return(
        <div className="h-screen bg-blue-200 flex">
            <Menu/>
            <Analyse/>
        </div>

    )
}

export default Analysis