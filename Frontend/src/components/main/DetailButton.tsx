import { useMediaQuery } from "react-responsive";
import styled from "styled-components"

function DetailButton(){
    const isPc = useMediaQuery({
        query: "(min-width:769px)"
      });
    
    if(isPc){
    return(
        <Box>
            <ImageBox>이미지</ImageBox>
            <p>설명</p>
        </Box>
    )}
    else{
        return(
            <MobileBox>
                <MobileImageBox>Image</MobileImageBox>
                <p>Detail</p>
            </MobileBox>
        )
    }
}

export default DetailButton;

//Styled components for PC
const Box = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 300px;
    height: 300px;
    align-items: center;
    flex-direction: column;
    background-color: white;
    margin: 40px;
`
const ImageBox = styled.div`
    width: 250px;
    height: 140px;
    background-color: lightgrey;
    margin-top: 10px;
`

//Styled components for mobile

const MobileBox = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 130px;
    height: 160px;
    align-items: center;
    flex-direction: column;
    background-color: white;
    margin: 10px;
`
const MobileImageBox = styled.div`
    width: 120px;
    height: 70px;
    background-color: lightgrey;
    margin-top: 5px;
`