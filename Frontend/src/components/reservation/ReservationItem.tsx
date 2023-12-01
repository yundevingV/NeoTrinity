import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ReservationItem() {
    return (
        <>
            <Container>
                <h3>물품이름</h3>
                <p className='green'>대여가능</p>
                <ButtonContainer>
                    <ButtonText to={'/reservation/detail'}>예약하기</ButtonText>
                </ButtonContainer>
            </Container>
            <Hr />
        </>
    )
}

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