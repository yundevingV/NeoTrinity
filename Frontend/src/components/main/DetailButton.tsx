import styled from "styled-components"

const Box = styled.div`
    display: flex;
    //flex: 0 0 auto;
    width: 300px;
    height: 300px;
    align-items: center;
    flex-direction: column;
    background-color: white;
    margin: 40px;

    @media (max-width: 428px){
        width: 130px;
        height: 160px;
        margin: 10px;
    }
`
const ImageBox = styled.div`
    display: table-cell;
    width: 250px;
    height: 140px;
    background-color: lightgrey;
    margin-top: 10px;
    overflow: hidden;

    @media (max-width: 428px){
        width: 120px;
        height: 70px;
        margin: 5px;
    }
`

const Image = styled.img`
   
    object-fit: cover;
`

function DetailButton(props: any) {
    
   
    return (
        <Box>
            <ImageBox>
                image
            </ImageBox>
            <p>description</p>
        </Box>
    )
    
    
}

export default DetailButton;