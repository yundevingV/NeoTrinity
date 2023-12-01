import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


import styled from "styled-components";

interface DataType{
    id : number; 
    title: string;
    description: string;
    status : string;
    createdAt : any;
    user: {username : string};
}

interface DataTypeList {
    items: DataType[] | undefined;
  }

const Container = styled.div`

width : calc(100% - 20px);
margin : 10px 0px;

padding : 10px;

border-bottom: 1px solid #000;

&:hover {
    text-decoration: underline;
  }

display : flex;

`
const StyledLink = styled(Link)`
    text-decoration : none;
    color : #000;
`

const Top = styled.div`
display: flex;
justify-content: start;

margin-bottom : 5px;
.title{
    font-size: 18px;

}
`

const Bottom = styled.div`
display: flex;
justify-content: start;

.writer{
}
.date{
    margin-left : 10px;
    color : #aaa;
}
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
                    <Top><span className="title">{item.title}</span></Top>
                    <Bottom>
                    <span className="writer">{item.user.username}</span> 
                    <span className="date">{item.createdAt.split('T')[0]} </span>
                    
                    </Bottom>
                </StyledLink>
            </Container>
            
            ))}
        </Positioner>
    )
}

const Positioner = styled.div`


`;



