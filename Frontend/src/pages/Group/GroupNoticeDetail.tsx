import React from "react";

import { styled } from "styled-components";

const Container = styled.div`
width : 70vw;

margin : 0 auto;

h1 {
    margin : 30px 6vw;

    @media screen and (min-width: 1200px) {
        margin : 30px 10vw;

}
    display : flex; 
    justify-content : start;    
}
`

const NoticeContainer = styled.div`
width : 70vw;
display : flex;
flex-direction : column;
justify-content : center;
`


const NoticeItem = styled.div`
width : 70%;

margin : 5px auto;
padding : 20px 15px;

background : #e2e2e2;

border-radius : 12px;

display : flex;
align-items : center;
text-align: left; /* Add this line to align text to the left */

`
const Comment = styled.div`
width : 70%;
margin : 5px auto;
padding : 20px 15px;

background : #e2e2e2;
border-radius : 12px;

display : flex;

`

const Avator = styled.div`
img{
    width : 70px;
    height : 70px;

    border-radius : 8px;
}
`
const Right = styled.div`
display : flex;
flex-direction : column;

`
const Name = styled.div`
margin : 0px 20px 10px;

text-align: left; /* Add this line to align text to the left */

span{
    font-weight : 1000;
}

`

const Content = styled.div`
margin : 0px 20px;

`


export default function Group(){
    return(
        <Container>

            <h1>
                GDSC 
            </h1>

            {/* 그룹 공지 */}

            <h1>11월 1일날 일정</h1>

            <NoticeContainer>
                <NoticeItem>
                안녕하세요 11월 1일날 저희 모각코 시간에 GDSC 가천대학교 챕터와 일자가 겹쳐서 가가전을 개최하게 되었습니다!<br /><br />
                가가전은 총 3개의 라운드로 구성되어 있습니다<br /><br />

                1. 가천대 vs 가톨릭대 연합 테트리스 (전원참여)<br />
                2. 끄투 온라인 4vs4 대항전<br />
                3. 리그오브레전드 5vs5 대항전을 거쳐서<br />
                3판 2선승제로 승점을 많이 가져간 팀이 우승하는 것으로 정해졌습니다!

                </NoticeItem>
                <Comment>
                    <Avator>
                        <img src='data:image/jpeg;base64,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' alt='x' />                    
                    </Avator>
                    
                    <Right>
                        <Name>
                            <span>닝닝</span>
                        </Name>

                        <Content>
                            우와 ~ 재미겠다
                        </Content>
                    </Right>
                    
                </Comment>
                
                <Comment>
                    <Avator>
                        <img src='data:image/jpeg;base64,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' alt='x' />                    
                    </Avator>
                    
                    <Right>
                        <Name>
                            <span>윈터</span>
                        </Name>

                        <Content>
                            나 참여해야겠다
                        </Content>
                    </Right>
                    
                </Comment>
            </NoticeContainer>


        </Container>
  )}