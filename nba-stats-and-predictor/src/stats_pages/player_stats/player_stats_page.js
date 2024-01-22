import React from "react";
import "./player_stats_page.css"
import data from "./data_original_nba.json";
import PlayerTableRow from "./components/player_table_row";


function PlayerStatsPage(){
    return (
        <div className="container">
            <div className="header">
                <h1>PLAYER STATS OF 2023-2024 SEASON</h1>
            </div>
            <div className="tableContainer">
            <table>
                {Object.values(data).map((value, index) => (
                    
                    <PlayerTableRow key={index} data={value} />
                    ))}

                
            </table>
            </div>
        </div>
    );


}





export default PlayerStatsPage;