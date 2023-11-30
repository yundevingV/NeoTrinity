import React, { useState } from "react";

import { styled } from "styled-components";
import FetchGroupBoardDetail from "../../../components/group/board/model/FetchGroupBoardDetail";

interface DataProps{
    title: string;  
    description: string;    
    cadidates : string;
}

const Container = styled.div`
width : 70vw;

margin : 0 auto;

@media (max-width: 428px){
    width: 100vw;
}

h1 {
    display : flex; 
    justify-content : start;    
}
`

const VoteContainer = styled.div`
width : 70vw;
display : flex;
flex-direction : column;
justify-content : center;
@media (max-width: 428px){
 width   : 100vw;
}


`


const VoteItem = styled.div`
width : 70%;

margin : 5px auto;
padding : 20px 15px;

background : #fff;
border : 1px solid #e2e2e2;
border-radius : 15px;

display : flex;
flex-direction : column;
align-items : center;
text-align: left; /* Add this line to align text to the left */

@media (max-width: 428px){
    width: 84vw;
}

`

export default function VoteDetail(){
    let { data } = FetchGroupBoardDetail();

    const [item,setItem] = useState<DataProps>();
    
    const options = ['a', 'b']; // Add more options as needed

    const [elect, setElect] = useState<string>();

    const handleChange=(e : any)=>{
        setElect( e.target.value);
        console.log(elect)
     }
    const vote = () =>{
        console.log(elect)
    }
    return(
        <Container>

            {/* 그룹 공지 */}


            <VoteContainer>

                <VoteItem>
                <h1>투표 제목</h1>

                투표 내용

                </VoteItem>
                
                <form>
                    {options.map((option) => (
                    <label key={option}>
                        <input
                        type="radio"
                        name="vote"
                        value={option}
                        onChange={handleChange}
                        />
                        {`${option.toUpperCase()}`}
                    </label>
                    ))}
                    <button type="button" onClick={vote}>
                    Vote
                    </button>
                </form>

            </VoteContainer>
            

        </Container>
  )}