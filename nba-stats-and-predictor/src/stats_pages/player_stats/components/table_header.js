import React from "react";
import "./table_header.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; 

function TableHeader({name, headerOnclick, currentSort, sortOrder}){
    return(
        
        <th  onClick={() => headerOnclick(name)}>{name} 
                        </th>
    )
}


export default TableHeader;