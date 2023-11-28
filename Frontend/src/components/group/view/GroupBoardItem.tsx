import React, { useEffect } from "react";
import { Link } from "react-router-dom";


import styled from "styled-components";

interface DataType{
    id : number; 
    title: string;
    description: string;
    status : string;
}

interface DataTypeList {
    items: DataType[] | undefined;
  }

const Container = styled.div`

margin : 10px;


&:hover {
    text-decoration: underline;
  }
`
const StyledLink = styled(Link)`
    text-decoration : none;
    color : #000;
`


export default function GroupBoardItems({items} : DataTypeList){

    return(
        <Positioner>            
            {items?.map((item )=>(
            <Container>
                <StyledLink to={`./${item.id}`}>
                    {item.title}
                
                </StyledLink>
            </Container>
            
            ))}
        </Positioner>
    )
}

const Positioner = styled.div`


`;



