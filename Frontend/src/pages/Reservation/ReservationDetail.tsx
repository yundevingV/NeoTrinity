import styled from "styled-components"

export default function ReservationDetail() {
    return (
        <Container>
            <InfoBox>
                <ImageBox></ImageBox>
                <DescriptionBox>
                    <h1>Title</h1>
                    <DetailText>details..</DetailText>
                </DescriptionBox>
            </InfoBox>
            <ReservationInfo>
            <InfoTitle>대여 시작</InfoTitle>
            <p>asfd</p>
            <InfoTitle>대여 기간</InfoTitle>

            <InputContainer>
                <Input type="number"/>
                <p>시간</p>
            </InputContainer>
            </ReservationInfo>
            <SubmitButton>예약하기</SubmitButton>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: start;

    padding-left: 20px;
    padding-top: 20px;
`

const InfoBox = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: start;
    margin-bottom: 20px;
`
const ImageBox = styled.div`
    background-color: #e2e2e2;
    width: 180px;
    height: 140px;
    margin-right: 15px;
`
const DescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
`
const DetailText = styled.h3`
    color: grey;
`
const ReservationInfo = styled.div`
    width: 80vw;
    border: 3px solid #e2e2e2;
    border-radius: 15px;
    
    display: flex;
    flex-direction: column;
    align-items: start;

    padding: 15px;
`

const InfoTitle = styled.div`
    font-size: 20px;
    font-weight: 500;
`

const InputContainer = styled.div`
    margin-top: 15px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 30px;
`
const Input = styled.input`
    width: 20px;
    
`

const SubmitButton = styled.button`

//기본 크기가 input > button
width : 355px;
height : 40px;

font-size : 20px;
color : #ffffff;

margin-top : 10px;

background-color: #567dfc;

border : 2px solid #ffffff;
border-radius : 8px;
font-family: tway, sans-serif, Arial;

&:hover {
    background-color: #567dfc;

    border : 2px solid #ffffff;

    color : #ffffff;    
    cursor : pointer;
    }
`