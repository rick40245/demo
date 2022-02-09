import React  from 'react';
import { useState, useEffect, Fragment } from 'react';
import { nanoid } from "nanoid";

import "./index.scss";
import {
    SearchBar,
    SearchIcon,
    SearchFilteredDropdown,
  } from "./search.style";

export default function ManagePageSearch(props) {

    return(
        <SearchBar className="manage-search-selection" id="searchBarId">
            {
                // dropdownList.length > 0 ?
                props.dropList != undefined ?
                    <div className="search-filtered">
                        <div className="search-filtered-div" tabIndex="1">
                            <a className="search-filtered-word">{props.filteredValue}</a>
                            <a className="search-filtered-png"></a>
                        </div>
                        <SearchFilteredDropdown className="search-filtered-dropdown">
                            {
                                props.dropList.map(options =>
                                    <Fragment key={nanoid()}>
                                        <div className="search-filtered-option" tabIndex="1" onMouseDown={() => props.setFilteredValue(options)}>{options}</div>
                                    </Fragment>
                            )
                            }
                        </SearchFilteredDropdown>
                    </div>
                :
                    null
            }
            
            <div className="search-content" tabIndex="1">
                <input className="search-selection-content" placeholder={props.placeholderValue} onChange={(e) => props.setSearchKeyWord(e.target.value)} value={props.searchKeyWord} />
            </div>
            <div className="search-icon-div">
                <SearchIcon />
            </div>
    </SearchBar>
    )
}