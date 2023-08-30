import React from "react";

import AppBar from '../../components/NavigationBar';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { styled } from "styled-components";


import { H1 } from "../../styles/HStyles";

export default function GroupNotice(){
    return(
        
            <AppBar content={
            <>
            <ContainerGrid container spacing={1}>
            
            {/* 그룹 로고 & 설명 */}

            
            <Grid item xs={12} sm={12}>
                <Box p={1} displat="flex" justifyContent="flex-start">
                    <H1> Group Notice</H1>
                </Box>
            </Grid>

            {/* 그룹 공지 */}

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

            </ContainerGrid>
            </>
            }>

            </AppBar>
  )}

const ContainerGrid = styled(Grid)`
    
  
`