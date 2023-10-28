import React from "react";

import { styled } from "styled-components";

const Container = styled.div`
width : 70vw;

margin : 0 auto;


display : flex; 
justify-content : start;    
flex-direction : column;

`
const TopContainer = styled.div`
display : flex; 
justify-content : space-between;
align-items : center;
`
const Date = styled.div`
background : #e2e2e2;

padding : 10px;

width : 20vw;
height : 30px;

`
const SearchContainer = styled.div`
display : flex; 
justify-content : space-around;
`

const SearchBar = styled.input`
width : 70vw;
height : 15px;

padding : 10px;
`

const ReservationAvaliableContainer = styled.div`
width : 70vw;
display : flex;
flex-direction : column;
justify-content : center;
`


const ReservationItem = styled.div`
width : 70%;
height : 50px;

margin : 5px auto;
padding : 0px 15px;

background : #e2e2e2;
border-radius : 12px;

display : flex;
align-items : center;


`
const ReservationUnavaliableContainer = styled.div`
width : 70vw;
display : flex;
flex-direction : column;
justify-content : center;
`
export default function Reservation(){
    console.log(window.innerWidth)
    return(
        <Container>

            <TopContainer>
            <h1>
                Product 
            </h1>
            <Date>
                2023/10/28
            </Date>
            </TopContainer>

            {/* 검색 */}
            <SearchContainer>
                <SearchBar />

                
            </SearchContainer>

            <ReservationAvaliableContainer>
                <h1>예약가능 물품 </h1>
                <ReservationItem>

                    <span>노트북  / 다솔관 컴퓨터공학과 사무실 / 대여가능 / 대여일로...</span>
                </ReservationItem>
                <ReservationItem>
                    노트북  / 다솔관 컴퓨터공학과 사무실 / 대여가능 / 대여일로...
                </ReservationItem>
            </ReservationAvaliableContainer>

            <ReservationUnavaliableContainer>
            <h1>예약불가능 물품 </h1>
            <ReservationItem>
                    노트북  / 다솔관 컴퓨터공학과 사무실 / 대여중 / ~10.31 부터...
            </ReservationItem>
            
            </ReservationUnavaliableContainer>
           

        </Container>
  )}