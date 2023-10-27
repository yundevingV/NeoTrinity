import styled from "styled-components"

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

function DetailButton(){
    return(
        <Box>
            <ImageBox>이미지</ImageBox>
            <p>설명</p>
        </Box>
    )
}

export default DetailButton;