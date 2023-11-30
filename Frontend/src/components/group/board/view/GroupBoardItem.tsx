import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


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
    const location = useLocation();
    
    const [link,setLink] = useState<string>('');

    useEffect(()=>{
        if(location.pathname.includes('notice')) {setLink('')}
        else {setLink('/notice')} 
    },[])

    return(
        <Positioner>            
            {items?.map((item )=>(
            <Container>
                <StyledLink to={`.${link}/detail/${item.id}`}>
                    {item.title}
                
                </StyledLink>
            </Container>
            
            ))}
        </Positioner>
    )
}

const Positioner = styled.div`


`;



