import React, { useState, useEffect } from "react"; 

import "./player_stats_page.css"
import data from "./data_original_nba.json";
import PlayerTableRow from "./components/player_table_row";
import { Table } from "react-bootstrap";
import TableHeader from "./components/table_header";


function PlayerStatsPage(){
    //console.log(data);
    const [isLoading, setIsLoading] = useState(false);
    const initData = Object.values(data).map((value, index) => (data[index]));                      
    const [sort_Order, set_Sort_Order] = useState("asc"); 
    const [tabData, setTabData] = useState(initData);
    const [sortVar, setSortVar] = useState("PPG");

    const sortFunction = (f) => { 
        setIsLoading(true);
        const sorted = [...tabData].sort((a, b) => { 
            const multi = sort_Order === "asc" ? -1 : 1; 
             return multi * (a[f] - b[f]); 
         }); 
         setIsLoading(false);
        setTabData(sorted); 
        //console.log(tabData);
    }; 
   
    function headerOnclick(headerName) {
        
        
        
        resetSort(headerName);
        
    }

    function resetSort(headerName) {
        if(headerName === sortVar){
            console.log("22");
            set_Sort_Order(currentSortOrder => currentSortOrder === "asc" ? "des" : "asc");
        }
        else{
            setSortVar(headerName);
            set_Sort_Order("asc");
        }
        
        
    }
    useEffect(() => {
        // This will run whenever sortVar or sort_Order changes
        sortFunction(sortVar);
        console.log(sortVar);
        console.log(sort_Order);
    }, [sortVar, sort_Order, isLoading]);
    
    return (
        
        
        <div className="container">
            <div className="header">
                <h1>PLAYER STATS OF 2023-2024 SEASON</h1>
                {isLoading ? <h1>Loading...</h1> : null}
            </div>
            <div className="tableContainer">
            
                <Table className="myTable">
                
                    {Object.keys(data[0]).map((name, index) => (
                            <TableHeader key={index} name={name} headerOnclick={headerOnclick}></TableHeader>
                        
                            ))} 
                    
                                {Object.values(tabData).map((value, index) => (
                            
                                    <PlayerTableRow key={index} data={value} />
                            ))} 

                    
                </Table>
            </div>
        </div>
    );


}





export default PlayerStatsPage;