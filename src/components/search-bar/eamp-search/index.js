import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { config } from '../../../config'
import { setSearch } from '../../../redux/actions/search/profile_search'

import './index.scss'
import { Line9 } from '../../style/line'
import { SearchLoading } from '../../style/loading.style'
import {
    SearchBar,
    SearchIcon,
    SearchItem,
    SearchSelectionDropdown,
    SearchAdvanced
} from "./search.style";
import { reqEampSearchOption } from '../../../api';
import { apiHandler } from '../../../utils/function';

function EampSearch(props) {
    const [inputContent, setInputContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const regex = new RegExp(inputContent, 'gi');
    const pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]") 
    const [timer, setTimer] = useState(null);
    const [dropdownData, setDropdownData] = useState([]);

    useEffect(() => {
        /*  */
        cleanStatus()
        if (inputContent === '') return setIsLoading(false);
        setIsLoading(true);
        setTimer(setTimeout(() => featchOption(), config.serach_delay));
    }, [inputContent])

    function cleanStatus() {
        setDropdownData([]);
        clearInterval(timer);
    }

    async function featchOption() {
        const request = await reqEampSearchOption(inputContent);
        apiHandler(request, () => setDropdownData(request.context), cleanStatus)
        setIsLoading(false);
    }

    function replacer(match, offset, string) {
        return `<b>${match}</b>`
    }

    function setSearch(eaCode) {
        props.setSearch(eaCode)
    }

    return (
        <div className="search-selection">
            <input className="search-selection-content" placeholder="..." onChange={(e) => setInputContent(`${e.target.value.replace(pattern,'')}`)} value={inputContent} />
            <SearchSelectionDropdown className="search-selection-dropdown">
                <div className="search-selection-item-wrapper">
                    {/* Loading */}
                    {isLoading ? <SearchLoading /> : null}
                    {/* Search Option */}
                    {dropdownData.length > 0 && !isLoading ?
                        dropdownData.map(item =>
                            <SearchItem key={item.eaCode} className="search-selection-item" onMouseDown={() => setSearch(item.eaCode)}>
                                <span title={item.eaName} dangerouslySetInnerHTML={{ __html: item.eaName.replace(regex, replacer) }} />
                            </SearchItem>
                        )
                        :
                        (
                            isLoading || inputContent === '' ? null : (
                                <SearchItem className="search-selection-advanced"  >
                                    <span> {inputContent} </span>
                                </SearchItem>
                            )
                        )
                    }
                </div>

                <Line9/>
                <SearchAdvanced className="search-selection-advanced">
                    <span></span>
                    <a className="search-selection-advanced-arrow"></a>
                </SearchAdvanced>
            </SearchSelectionDropdown>
            <SearchIcon />
        </div>
    );
}

export default connect(
    state => ({}),
    { setSearch }
)(EampSearch)