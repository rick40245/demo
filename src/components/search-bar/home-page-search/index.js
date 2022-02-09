import React, { useState, useEffect, Fragment } from "react";
import { nanoid } from "nanoid";

import "./index.scss";
import { Line9 } from "../../style/line";
import { SearchLoading } from '../../style/loading.style'
import {
  SearchBar,
  SearchIcon,
  SearchItem,
  SearchSelectionDropdown,
  SearchAdvanced,
  SearchFilteredDropdown,
} from "./search.style";

export default function HomeSearch() {
  const [inputContent, setInputContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const regex = new RegExp(inputContent, "gi");
  const dropdownData = [];
  const filteredItem = ["","","","",""];
  const [filteredValue, setFilteredValue] = useState("")

  useEffect(() => {
    // console.log('API');
    setIsLoading(true)
  }, [inputContent]);

  function replacer(match, offset, string) {
    return `<b>${match}</b>`;
  }
  function itemEaCodePutUrl(e, eaCode) {
    // document.location.href= `/profile?${eaCode}`
  }

  return (
    <SearchBar className="home-search-selection" id="searchBarId">
      <div className="search-filtered">
        <div className="search-filtered-div" tabIndex="1">
          <a className="search-filtered-word">{filteredValue}</a>
          <a className="search-filtered-png"></a>
        </div>
        <SearchFilteredDropdown className="search-filtered-dropdown">
            {
                filteredItem.map(options =>
                      <Fragment key={nanoid()}>
                          <div className="search-filtered-option" tabIndex="1" onMouseDown={() => setFilteredValue(options)}>{options}</div>
                      </Fragment>
              )
            }
        </SearchFilteredDropdown>
      </div>
      <div className="search-content" tabIndex="1">
        <input className="search-selection-content" placeholder="..." onChange={(e) => setInputContent(e.target.value)} value={inputContent} />
        <SearchSelectionDropdown className="search-selection-dropdown">
          {
            isLoading && inputContent!= ""?
              <div className="search-selection-loading-div">
                <SearchLoading/>
              </div> 
              :
              null
          }
          {
            inputContent === ""?
            null
            :
            <>
              <div className="search-selection-item-wrapper">
              {dropdownData.map((item) => (
                <SearchItem key={item.eaCode} className="search-selection-item tooltip" onClick={(e) => itemEaCodePutUrl(e, item.eaCode)}>
                  <span title={item.eaName} dangerouslySetInnerHTML={{__html: item.eaName.replace(regex, replacer),}}/>
                </SearchItem>
              ))}
              </div>
              <Line9 style={{ width: "100%" }}></Line9>
            </>
          }
          
          <SearchAdvanced className="search-selection-advanced">
            <a className="search-selection-advanced-span"></a>
            <a className="search-selection-advanced-arrow"/>
          </SearchAdvanced>
        </SearchSelectionDropdown>
      </div>
      <div className="search-icon-div">
        <SearchIcon />
      </div>
    </SearchBar>
  );
}
