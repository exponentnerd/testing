import React from "react";



const SearchBar : React.FC = () => {
    return (
        <form className="flex max-w-[400px] w-full h-[55px] rounded-[10px] p-[20px] pr-[35px] bg-[#121226] items-center gap-[10px]">
            <img src="/icons/search.png"/>
            <input placeholder="Search venues, events, tables" className="font-poppins font-medium text-[16px] text-[#626262]"></input>
        </form>
    )
}


export default SearchBar;