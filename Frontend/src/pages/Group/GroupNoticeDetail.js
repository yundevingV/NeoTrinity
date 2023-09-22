import React from "react";

import AppBar from '../../components/NavigationBar';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { styled } from "styled-components";

import { H1 } from "../../styles/HStyles";
import { Avatar } from "@mui/material";

export default function GroupNoticeDetail(){
    return(
        <AppBar content={
        <>
            <ContainerGrid container spacing={1}>
            
            {/* 그룹 로고 & 설명 */}

            
            <Grid item sx={{ xs : 12, sm : 12 }}>
                <Box sx={{ p : 1 }} >
                    <H1> 시험 기간 관련 공지</H1>
                </Box>
            </Grid>

            {/* 그룹 공지 */}

            <Grid item xs={100} sm={12}>

                <Box sx={{borderRadius : 5 , bgcolor : '#e2e2e2' , color : 'text.primary', p : 2 }}>
                <div>
                    이번주에는 시험기간으로 쉽니다!!
                    이번주에는 시험기간으로 쉽니다!!


                </div>
                
                </Box>
            </Grid>


            {/* 댓글 */}
            <Grid item xs={12} sm={12}>
                <Box
                    sx={{
                    bgcolor: "#e2e2e2",
                    color: "text.primary",
                    p: 1,
                    
                    borderRadius : 4,
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>

                    <Avatar>
                    
                    </Avatar>
                    <div style={{ display: "flex", alignItems: "flex-start" , flexDirection : "column"}}>

                        <NickName>Yunstar </NickName>

                        <Content>yes ! Good luck on your exam~</Content>

                    </div>
                    </div>
                </Box>
                </Grid>
            </ContainerGrid>
        </>
        }/>
  )}

const ContainerGrid = styled(Grid)`
    
`

const NickName = styled.span`
/* layout */
margin-left : 10px;

/* style */
font-weight : 700;

`
const Content = styled.span`
margin-left : 10px;

`
