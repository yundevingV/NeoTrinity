import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/de';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import ReservationItem from "../../components/reservation/ReservationItem";
import { getName, checkReservation } from "../../utilities/login/reservation/GetReservation";

export default function Reservation() {
    const defaultTime = dayjs().add(1, 'hour');
    const [selectedTime, setSelectedTime] = useState<string>(defaultTime.format('YYYY-MM-DD HH'));
    const [itemNames, setItemNames] = useState<string[]>([]);
    const [itemStatuses, setItemStatuses] = useState<(string | "예약가능" | "예약불가")[]>([]);
    const [contractIDs] = useState([
        '0xaFe59e93DA9967089995656f8756f96F19734fe5',
        '0x6983ACCAF7D0dC8e3d0856acA8395fc96Bf976A4',
        '0xd5E9AE102A3dD23f7723D93E75dd03D59d5C28Dc'
    ]);

    useEffect(() => {
        const fetchData = async (contractID: string) => {
            const name = await getName(contractID);
            setItemNames(prevNames => [...prevNames, name]);

            const itemStatus = await checkReservation(contractID);
            if (itemStatus.length === 0) {
                setItemStatuses(prevStatuses => [...prevStatuses, '예약가능']);
                return;
            }

            const isReserved = itemStatus.some(r => r === selectedTime);
            setItemStatuses(prevStatuses => [...prevStatuses, isReserved ? '예약불가' : '예약가능']);
        };

        setItemNames([]);
        setItemStatuses([]);
        contractIDs.forEach(fetchData);
    }, [contractIDs, selectedTime]);

    return (
        <Container>
            <TopContainer>
                <h1>Product</h1>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-cn">
                    <MobileDateTimePicker
                        onChange={(newTime: Dayjs | null) => {
                            if (newTime) {
                                setSelectedTime(newTime.format('YYYY-MM-DD HH'));
                                console.log('선택한 시간:', newTime.format('YYYY-MM-DD HH'));
                                console.log(itemNames);
                                console.log(itemStatuses);
                            }
                        }}
                        defaultValue={defaultTime}
                        views={['year', 'month', 'day', 'hours']}
                    />
                </LocalizationProvider>
            </TopContainer>
            <SearchContainer>
                <SearchBar />
            </SearchContainer>
            <ReservationContainer>
                <h1>장소 목록</h1>
                <Hr />
                {contractIDs.map((item, index) => (
                    <ReservationItem key={item} name={itemNames[index]} status={itemStatuses[index]} now={selectedTime} contractID={contractIDs[index]} />
                ))}
            </ReservationContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 70vw;
    margin: 0 auto;
    display: flex;
    justify-content: start;
    flex-direction: column;

    @media screen and (max-width: 428px) {
        width: 100vw;
        margin: 0;
        align-items: start;
        padding-left: 6vw;
    }
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 428px) {
        width: 84vw;
        margin-top: 10px;
    }
`;

const Date = styled.div`
    padding: 10px;
    width: 20vw;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #e2e2e2;
`;

const SearchContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const SearchBar = styled.input`
    width: 70vw;
    height: 15px;
    padding: 10px;

    @media screen and (max-width: 500px) {
        width: 80vw;
    }
`;

const ReservationContainer = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 15px;
    border: 1px solid #e2e2e2;
    border-radius: 8px;
    margin: 10px auto;

    @media screen and (max-width: 428px) {
        width: 86vw;
        margin-left: 0;
    }
`;

const Hr = styled.hr`
    width: 90%;
`;
