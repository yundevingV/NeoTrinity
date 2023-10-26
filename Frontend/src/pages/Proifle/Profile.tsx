import React from "react";
import { styled } from "styled-components";


const Container = styled.div`
margin : 0 auto;
background : #e0e0e0;

width : 70vw;
height : auto;

padding : 20px;
border-radius : 12px;
`

const ProfileImg = styled.div`
width : 40vw;
height : 15vh;

border-radius : 20px;

margin : 0 auto;
padding  : 20px;

div {
    margin : auto;

    background : #ffff;
    width : 50%;
    height : 100%;

    border-radius : 12px;
}
`

const ProfileInfo = styled.div`
width : 40vw;
height : auto;

border-radius : 20px;

margin : 0 auto;

background : #ffff;

display : flex;
flex-direction : column;

`

export default function Profile(){
    return(
        <Container>
            <ProfileImg>
                <div>
                    사진
                </div>
            </ProfileImg>

            <ProfileInfo>
                <p>이름 : 유지호</p>
                <p>학번 : 2018216216</p>
                <p>가입된 그룹 : X</p>
                <p>대여 목록 : X</p>

            </ProfileInfo>
        </Container>
    )
}