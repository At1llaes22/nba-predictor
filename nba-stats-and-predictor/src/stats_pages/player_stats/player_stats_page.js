import React, { useState } from "react"; 

import "./player_stats_page.css"
import data from "./data_original_nba.json";
import PlayerTableRow from "./components/player_table_row";
import { Table } from "react-bootstrap";


function PlayerStatsPage(){
    //console.log(data);
    const initData = Object.values(data).map((value, index) => (data[index]));                      
    const [sort_Order, set_Sort_Order] = useState("des"); 
    const [tabData, setTabData] = useState(initData);
    const [sortVar, setSortVar] = useState("PPG");

    const sortFunction = (f) => { 
        // if (f === "age") { 
        //     if (sort_Age === "age") { 
        //         set_Sort_Order(sort_Order === "asc" ? "desc" : "asc"); 
        //         set_Sort_Msg( 
        //             `Table is Sorted in ${sort_Order ===  
        //                 "asc" ? "Ascending" : "Descending"
        //             } Order` 
        //         ); 
        //     } else { 
        //         set_Sort_Age("age"); 
        //         set_Sort_Order("asc"); 
        //         set_Sort_Msg(`Table is Sorted in Descending Order`); 
        //     } 
        // } else { 
        //     set_Sort_Msg("Sorting is disabled for this column"); 
        // } 
        const sorted = [...tabData].sort((a, b) => { 
            const multi = sort_Order === "asc" ? 1 : -1; 
             return multi * (a[f] - b[f]); 
         }); 
        //console.log(sorted);
        setTabData(sorted); 
        //console.log(tabData);
    }; 
   
    function headerOnclick(headerName) {
        if(sort_Order === "asc" ){
            set_Sort_Order("des")
        }
        else{
            set_Sort_Order("asc")
        }
        resetSort(headerName);
        sortFunction(headerName);
    }

    function resetSort(headerName) {
        if(headerName === sortVar){
            return;
        }
        else{
            setSortVar(headerName);
            set_Sort_Order("des");
        }
        
        
        
    }
    
    return (
        
        
        <div className="container">
            <div className="header">
                <h1>PLAYER STATS OF 2023-2024 SEASON</h1>
            </div>
            <div className="tableContainer">
            
                <Table className="myTable">
                    {Object.keys(data[0]).map((key, index) => (
                            
                        <th key={index} onClick={() => headerOnclick(key)}>{key} 
                        </th>
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