import React, { useState } from "react";

import { styled } from "styled-components";
import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/de';

import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

import ReservationItem from "../../components/reservation/ReservationItem";



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
    margin-top: 10px;
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




const Hr = styled.hr`
width : 90%;
`
export default function Reservation() {

    const defalutTime = dayjs().add(1, 'hour');
    const defalutTimeToString = defalutTime.format('YYYY-MM-DD HH');
    const [selectedTime, setSelectedTime] = useState<String | null>(defalutTimeToString);
    const handleTimeChange= (newTime: Dayjs | null) =>{
        if (newTime) {
            setSelectedTime(newTime.format('YYYY-MM-DD HH'));
            console.log('선택한 시간:', newTime.format('YYYY-MM-DD HH'));
            
          }
        
    }
    
    return (
        <Container>

            <TopContainer>
                <h1>
                    Product
                </h1>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-cn">
                    <MobileDateTimePicker 
                    onChange={handleTimeChange}
                    defaultValue={defalutTime}
                    label="시간을 선택해주세요" 
                    views={['year', 'month', 'day', 'hours']}
                     />
                </LocalizationProvider>
            </TopContainer>


            {/* 검색 */}
            <SearchContainer>
                <SearchBar />


            </SearchContainer>


            <ReservationContainer>
                <h1>예약가능 물품 </h1>
                <Hr/>

                <ReservationItem/>   

            </ReservationContainer>

            <ReservationContainer>
                <h1>예약불가능 물품 </h1>
            </ReservationContainer>


        </Container>
    )
}