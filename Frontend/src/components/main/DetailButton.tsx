import styled from "styled-components"

interface Props{
    src : string,
    description : string,
    
}
const Box = styled.div`
    display: flex;
    //flex: 0 0 auto;
    width: 100px;
    height: 300px;
    align-items: center;
    flex-direction: column;
    background-color: white;
    margin: 40px;
    word-break:break-all;

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
    overflow: hidden;

    @media (max-width: 428px){
        width: 120px;
        height: 70px;
    }
`

const Image = styled.img`
width: 100%;
  height: 100%;
  word-break:break-all;

   
`
const Description = styled.div`
    width: 100px;
    height: 100px;
    word-break:break-all;
    font-weight: 700;

    @media (max-width: 428px){
        width: 120px;
        height: 70px;
        word-break:break-all;
        font-weight: 700;
    }
`

function DetailButton({src , description} : Props) {
    
   
    return (
        <Box>
            <ImageBox>
                <Image src={src} alt='x' />
            </ImageBox>
            <Description>{description}</Description>
        </Box>
    )
    
    
}

export default DetailButton;