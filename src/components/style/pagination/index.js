import React  from 'react';
import {Pagination, Leftpage, Leftcontent, Lefticon, Rightpage, Rightcontent, Righticon, Pagenumber, PagenumberItem} from './list.style.js';

export default function PaginationComponent(props) {
    
    return(
        <Pagination>
            <Leftpage>
                <Lefticon />
                <Leftcontent>上一頁</Leftcontent>
            </Leftpage>
            <Pagenumber>
                <PagenumberItem>1</PagenumberItem>
                <PagenumberItem>2</PagenumberItem>
                <PagenumberItem>3</PagenumberItem>
            </Pagenumber>
            <Rightpage>
                <Rightcontent>下一頁</Rightcontent>
                <Righticon />
            </Rightpage>
        </Pagination>
    )
}