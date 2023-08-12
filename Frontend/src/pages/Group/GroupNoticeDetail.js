import React from "react";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { styled } from "styled-components";
import { Avatar } from "@mui/material";

import GroupIcon from '@mui/icons-material/Group';

import SideBar from '../../components/sidebar'
import { H1 } from "../../styles/HStyles";

export default function GroupNoticeDetail(){
    return(
        <>
            {/* <SideBar /> */}
            <ContainerGrid container spacing={1}>
            
            {/* 그룹 로고 & 설명 */}

            
            <Grid item xs={12} sm={12}>
                <Box p={1} displat="flex" justifyContent="flex-start">
                    <H1> Notice Title</H1>
                </Box>
            </Grid>

            {/* 그룹 공지 */}

            <Grid item xs={12} sm={12}>

                <Box bgcolor="#e2e2e2" color="info.contrastText" p={15}>
                {/* 몇개이상이면 더보기 만들기 */}
                <div>
                    이번주에는 시험기간으로 쉽니다!!
                </div>
                
                </Box>
            </Grid>

            <Grid item xs={12} sm={12}>

                <Box bgcolor="#e2e2e2" color="info.contrastText" p={1}>
                {/* 몇개이상이면 더보기 만들기 */}
                <div>
                    네
                </div>
                
                </Box>
            </Grid>
            </ContainerGrid>
        </>
  )}

const ContainerGrid = styled(Grid)`
    
    padding : 100px;
    margin: 0 auto;
`