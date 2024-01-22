import React from "react";
import "./player_table_row.css";


function PlayerTableRow({data}){
    //console.log(data);
    
    
    return(
       
            <tbody>
                <tr>
                {Object.entries(data).map(([key, value]) => (
                    (value !== null && value !== undefined) ? <td key={key}>{value}</td> : <td key={key}></td>
                    ))}
                </tr>
            </tbody>
        
            
      
    );
}

export default PlayerTableRow