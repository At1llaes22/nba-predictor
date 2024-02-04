import React, { useState, useEffect } from "react"; 

import "./team_stats_page.css"
import data from "./team_data.json";
import PlayerTableRow from "../player_stats/components/player_table_row";
import { Table } from "react-bootstrap";
import TableHeader from "../player_stats/components/table_header";


function TeamStatsPage(){
    //console.log(data);
    const [isLoading, setIsLoading] = useState(false);
    const initData = Object.values(data).map((value, index) => (data[index]));                      
    const [sort_Order, set_Sort_Order] = useState("asc"); 
    const [tabData, setTabData] = useState(initData);
    const [sortVar, setSortVar] = useState("PPG");

    const sortFunction = (f) => { 
        
    
        setIsLoading(true);
        setTimeout(() => {
            const sorted = [...tabData].sort((a, b) => { 
                const multi = sort_Order === "asc" ? -1 : 1; 
                return multi * (a[f] - b[f]); 
            }); 
    
            setTabData(sorted);
             
        }, 250); // .25 second delay
        setIsLoading(false);
    };
   
    function headerOnclick(headerName) {
        
        
        setIsLoading(true);
      
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
    }, [sortVar, sort_Order]);
    
    return (
        
        
        <div className="player-stats">
            <div className="header">
                <h1>PLAYER STATS OF 2023-2024 SEASON</h1>
                {isLoading ? <h1>Loading...</h1> : null}
            </div>
            <div className="tableContainer">
            
                <Table className="myTable">
                    <thead>
                    <tr>
                    {Object.keys(data[0]).map((name, index) => (
                            <TableHeader key={index} name={name} headerOnclick={headerOnclick} currentSort={sortVar} sortOrder={sort_Order} isLoading={isLoading}></TableHeader>
                        
                            ))}
                    </tr>
                    
                    </thead>
                    
                    {Object.values(tabData).map((value, index) => (
                            
                                    <PlayerTableRow key={index} data={value} index={index}/>
                            ))} 

                    
                </Table>
            </div>
        </div>
    );


}





export default TeamStatsPage;