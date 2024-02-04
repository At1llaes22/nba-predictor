import React from "react";
import "./player_table_row.css";


function PlayerTableRow({data, index}){
    //console.log(data);
    index=index+1
    
    
    return(
       
            <tbody>
                <tr>
                {Object.entries(data).map(([key, value]) => (
                    (value !== null && value !== undefined) ? <td key={key}>{value}</td> : <td key={key}>{index}</td>
                    ))}
                </tr>
            </tbody>
        
            
      
    );
}

export default PlayerTableRow