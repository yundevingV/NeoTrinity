import React from "react";

import { styled } from "styled-components";

const Container = styled.div`
width : 70vw;

margin : 0 auto;


display : flex; 
justify-content : start;    
flex-direction : column;

@media screen and (max-width: 428px) {
    width: 100vw;
    margin: 0;
    align-items: start;
    padding-left: 6vw;
}
`
const TopContainer = styled.div`
display : flex; 
justify-content : space-between;
align-items : center;

@media screen and (max-width: 428px) {
    width: 84vw;
}
`
const Date = styled.div`

padding : 10px;

width : 20vw;
height : 30px;

border-radius : 15px;
border : 1px solid #e2e2e2;

`
const SearchContainer = styled.div`
display : flex; 
justify-content : space-around;
`

const SearchBar = styled.input`
width : 70vw;
height : 15px;

padding : 10px;

@media screen and (max-width: 500px) {
    width: 80vw;
}
`

const ReservationContainer = styled.div`
width : 50vw;
display : flex;
flex-direction : column;
justify-content : center;

border-radius : 15px;
border : 1px solid #e2e2e2;

border-radius : 8px;

margin : 10px auto;

@media screen and (max-width: 428px){
    width: 86vw;
    margin-left: 0;
}
`


const ReservationItem = styled.div`
padding : 10px 20px;

text-align : left;

.green{
    color : green;
}

.red {
    color : red;
}
@media screen and (max-width: 428px) {
    
}

`

const Hr = styled.hr`
width : 90%;
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


            <ReservationContainer>
             <h1>예약가능 물품 </h1>

                <ReservationItem>
                    
                    <h3>노트북</h3>
                    <p className='green'>대여가능</p>
                    <p>다솔관 컴퓨터공학과 사무실</p>
                </ReservationItem>

                <Hr />

                <ReservationItem>
                    
                    <h3>노트북</h3>
                    <p className='green'>대여가능</p>
                    <p>다솔관 컴퓨터공학과 사무실</p>
                </ReservationItem>
            </ReservationContainer>

            <ReservationContainer>
            <h1>예약불가능 물품 </h1>

            <ReservationItem>
                    
                    <h3>노트북</h3>
                    <p className='red'>대여불가능</p>
                    <p>다솔관 컴퓨터공학과 사무실</p>
                </ReservationItem>
            
            </ReservationContainer>
           

        </Container>
  )}