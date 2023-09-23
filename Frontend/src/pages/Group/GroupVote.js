import React from "react";

import AppBar from '../../components/NavigationBar';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { styled } from "styled-components";

import { H1 } from "../../styles/HStyles";

export default function GroupVote(){
    return(
        
            <AppBar content={
            <>
            <ContainerGrid container spacing={1}>
            
            {/* 그룹 로고 & 설명 */}
            
            <Grid item xs={12} sm={12}>
                <Box p={1} displat="flex" justifyContent="flex-start">
                    <H1> 진행중인 투표</H1>
                </Box>
            </Grid>

            {/* 그룹 공지 */}

            <Grid item xs={12} sm={12}>

                <Box bgcolor="#e2e2e2" color="info.contrastText" p={2}>
                {/* 몇개이상이면 더보기 만들기 */}
                <Vote >
                        <Title>
                            번개 참여!!
                        </Title>
                        <Status>
                            투표 가능 
                        </Status>
                        <Date>
                            D-Day
                        </Date>
                </Vote>

                <Vote >
                        <Title>
                            회장 선거
                        </Title>
                        <Status>
                            투표 가능 
                        </Status>
                        <Date>
                            D-8
                        </Date>
                </Vote>

                </Box>
            </Grid>


            <Grid item xs={12} sm={12}>
                <Box p={1} display="flex" justifyContent="flex-start">
                    <H1> 종료된 투표</H1>
                </Box>
            </Grid>

            {/* 그룹 공지 */}

            <Grid item xs={12} sm={12}>

                <Box bgcolor="#e2e2e2" color="info.contrastText" p={2}>
                {/* 몇개이상이면 더보기 만들기 */}
                <Vote>
                    <Title>
                    동방 선거
                    </Title>
                    <Date>
                        (23.08.01 ~ 23.08.25)
                    </Date>
                </Vote>
                
                </Box>
            </Grid>

            </ContainerGrid>

            </>

            
            }>

            </AppBar>
  )}

const ContainerGrid = styled(Grid)`
    

`
const Vote = styled.div`
/* layout */
display: flex;
alignItems: flex-start; 

/* style */


`

const Title = styled.span`
/* layout */

/* style */
color : #000;
`

const Status = styled.span`

/* layout */
margin-left: 10px;

/* style */
color : #000;
`

const Date = styled.span`
/* layout */
margin-left: 10px;
/* style */
color : #000;
`