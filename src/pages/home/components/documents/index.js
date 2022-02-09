import React  from 'react';
import { Container, Title, TitleContainer, Subtitle, Itemcontainer, Item, Itemicon, Pagination, Leftpage, Leftcontent, Lefticon, Rightpage, Rightcontent, Righticon, Pagenumber, PagenumberItem } from './list.style';
import PaginationComponent from '../../../../components/style/pagination'
/* 
    subject="準則"
    en="Guidance"
*/
export default function List(props) {
    const { subject, en } = props
    return (
        <Container>
            <TitleContainer>
                <Title>{subject}
                    <Subtitle>{en}</Subtitle>
                </Title>
            </TitleContainer>
            {/* item */}
            <Itemcontainer>
                <Itemicon />
                <Item></Item>
            </Itemcontainer>
            <Itemcontainer>
                <Itemicon />
                <Item></Item>
            </Itemcontainer>
            <Itemcontainer>
                <Itemicon />
                <Item></Item>
            </Itemcontainer>
            <Itemcontainer>
                <Itemicon />
                <Item></Item>
            </Itemcontainer>
            <Itemcontainer>
                <Itemicon />
                <Item></Item>
            </Itemcontainer>
            <PaginationComponent />
        </Container>
    );
}