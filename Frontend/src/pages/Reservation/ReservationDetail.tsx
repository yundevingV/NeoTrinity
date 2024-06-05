import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import startup from "../../assets/startup.jpeg";
import { reserve } from "../../utilities/login/reservation/GetReservation";

function parseDateTime(dateTimeString: string) {
    const regex = /(\d{4})-(\d{2})-(\d{2}) (\d{2})/;
    const match = dateTimeString.match(regex);
  
    if (match) {
      const [year, month, day, hour] = match.slice(1).map(Number);
      return { year, month, day, hour } as { year: number, month: number, day: number, hour: number };
    } else {
      console.error("Invalid date format");
      return null;
    }
  }

export default function ReservationDetail() {
    const { id } = useParams();
    const parsedArray = id!.split('&');
    const name = parsedArray[0];
    const time = parsedArray[1];
    const ID = parsedArray[2].toString();
  
    const [parsedTime, setParsedTime] = useState<{ year: number, month: number, day: number, hour: number } | null>(() => parseDateTime(time));
    const [selectedHours, setSelectedHours] = useState(0);
  
    const handleButtonClick = () => {
      console.log('Button clicked!');
      console.log(parsedTime);
      if (parsedTime) {
        reserve(ID, parsedTime.year, parsedTime.month, parsedTime.day, parsedTime.hour, selectedHours);
      }
    };
  

  useEffect(() => {
    // 이 곳에서 필요한 side effect 로직을 작성
    // 예를 들어, API 호출이나 다른 비동기 동작 등을 수행할 수 있음
  }, []); // useEffect의 의존성 배열은 빈 배열로 놔두면 처음 한 번만 호출

  return (
    <Container>
      <h1>{name}</h1>
      <InfoBox>
        <ImageBox>
          <img width={'180px'} height={'140px'} src={startup} alt="x"/>
        </ImageBox>
        <DescriptionBox>
          <DetailText>스터디, 회의 등을 <br></br>위한 공간입니다.</DetailText>
        </DescriptionBox>
      </InfoBox>
      <ReservationInfo>
        <InfoTitle>대여 시작</InfoTitle>
        <p>{time}</p>
        <InfoTitle>대여 기간</InfoTitle>
        <InputContainer>
          <Input
            type="number"
            value={selectedHours}
            onChange={(e) => setSelectedHours(Number(e.target.value))}
          />
          <p>시간</p>
        </InputContainer>
      </ReservationInfo>
      <SubmitButton onClick={handleButtonClick}>예약하기</SubmitButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;
  padding-top: 20px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  margin-bottom: 20px;
`;

const ImageBox = styled.div`
  background-color: #e2e2e2;
  width: 180px;
  height: 140px;
  margin-right: 15px;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailText = styled.h3`
  color: grey;
`;

const ReservationInfo = styled.div`
  width: 80vw;
  border: 3px solid #e2e2e2;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 15px;
`;

const InfoTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const InputContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

const Input = styled.input`
  width: 20px;
`;

const SubmitButton = styled.button`
  width: 355px;
  height: 40px;
  font-size: 20px;
  color: #ffffff;
  margin-top: 10px;
  background-color: #567dfc;
  border: 2px solid #ffffff;
  border-radius: 8px;
  font-family: tway, sans-serif, Arial;

  &:hover {
    background-color: #567dfc;
    border: 2px solid #ffffff;
    color: #ffffff;
    cursor: pointer;
  }
`;
