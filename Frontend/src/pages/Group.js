import React from "react";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Avatar } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';

import SideBar from '../components/sidebar'

import { styled } from "styled-components";

export default function Group(){
    return(
        <>
            <ContainerGrid container spacing={1}>
            
            <SideBar />
            
            {/* 그룹 로고 & 설명 */}

            
            <Grid item xs={12} sm={12}>
                <Box p={1}>
                    Group Name
                </Box>
            </Grid>

            <Grid item xs={12} sm={2}>
                
                <Box p={5}>
                <Avatar sx={{ width : 50, height : 50, bgcolor: 'secondary.main' }} >
                    <GroupIcon />
                </Avatar>
                </Box>
            </Grid>

            <Grid item xs={12} sm={8}>
                <Box p={5}>
                그룹의 설명란입니다. 감사합니다.
                </Box>
            </Grid>

            {/* 그룹 공지 */}

            <Grid item xs={12} sm={12}>
                <Box p={1}>
                    Notice
                </Box>
            </Grid>
            <Grid item xs={12} sm={12}>

                <Box bgcolor="#e2e2e2" color="info.contrastText" p={10}>
                {/* 몇개이상이면 더보기 만들기 */}
                <div>
                    공지1
                </div>
                <div>
                    공지2
                </div>
                <div>
                    공지3
                </div>
                </Box>
            </Grid>

            {/* 그룹 투표 */}
            <Grid item xs={12} sm={6}>
                <Box bgcolor="info.main" color="info.contrastText" p={7}>
                진행중인 투표
                </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Box bgcolor="info.main" color="info.contrastText" p={7}>
                종료된 투표
                </Box>
            </Grid>
            
            </ContainerGrid>
        </>
  )}

const ContainerGrid = styled(Grid)`
    
    padding : 100px;
    margin: 0 auto;
`