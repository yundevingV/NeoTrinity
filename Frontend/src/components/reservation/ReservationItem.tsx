import { Link } from "react-router-dom";
import styled from "styled-components";

import startup from "../../assets/startup.jpeg";

interface ReservationItemProps {
    name: string;
    status: string;
    now: string; 
    contractID: string;// 예시에 따라 실제로 사용하는 상태에 따라 수정
  }
  

const ReservationItem: React.FC<ReservationItemProps> = ({ name, status, now, contractID }) => {
    console.log(now);
    return (
        <>
            <Container>
                <h3>{name}</h3>
                <p className={(status == '예약가능')?'green':'red'}>{status}</p>
                <img width={'180px'} height={'140px'} src={startup} alt="x"/>
                <ButtonContainer>
                    <ButtonText to={`/reservation/detail/${name}&${now}&${contractID}`}>상세보기</ButtonText>
                </ButtonContainer>
            </Container>
            <Hr />
        </>
    )
}

export default ReservationItem;

const Container = styled.div`
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
const ImageDisplay = styled.div`
    display: flex;
    flex-direction: row;
`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`


const ButtonText = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    width : 300px;
    height : 30px;

    color : #ffffff;

    margin-top : 10px;

    background-color: #567dfc;

    border : 2px solid #ffffff;
    border-radius : 8px;

    text-align: center;
    font-family: tway, sans-serif, Arial;
    font-size: 20px;
    font-weight: 500;

    &:hover {
        background-color: #567dfc;

        border : 2px solid #ffffff;

        color : #ffffff;    
        cursor : pointer;
    }
`

const Hr = styled.hr`
width : 90%;
`