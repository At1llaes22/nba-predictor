import React from "react";
import "./player_table_row.css";


function PlayerTableRow({data}){
    console.log(data);
    return(
       
            <tbody>
                <tr>
                {Object.entries(data).map(([key, value]) => (
                    <td key={key}>{value !== null ? value : null}</td>
                ))} 
                </tr>
            </tbody>
        
            
      
    );
}

export default PlayerTableRow