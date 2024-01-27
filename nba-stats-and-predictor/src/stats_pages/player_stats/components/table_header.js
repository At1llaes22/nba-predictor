import React from "react";
import "./table_header.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; 
import { Oval } from 'react-loader-spinner'

function TableHeader({name, headerOnclick, currentSort, sortOrder, isLoading}){
    const color = currentSort === name ? "#3042a4" : "transparent"
    //const isLoading = true;
    return(
        <th className="my-header" onClick={() => headerOnclick(name)}>
    {(isLoading&&currentSort === name) ? (
        <Oval
            height="20"
            width="80"
            color="rgba(240, 236, 228, 0.8)"
            secondaryColor="black"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass="my-header"
            visible={true}
  />
    ) : (
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            {name}
            {sortOrder === "asc" ? <FaArrowUp color={color}/> : <FaArrowDown color={color}/>}
        </div>
    )}
</th>
    )
}

export default TableHeader;
