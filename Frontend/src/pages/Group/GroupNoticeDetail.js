import React from "react";

import AppBar from '../../components/NavigationBar';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { styled } from "styled-components";

import { H1 } from "../../styles/HStyles";

export default function GroupNoticeDetail(){
    return(
        <AppBar content={
        <>
            <ContainerGrid container spacing={1}>
            
            {/* 그룹 로고 & 설명 */}

            
            <Grid item sx={{ xs : 12, sm : 12 }}>
                <Box p={1} displat="flex" justifyContent="flex-start">
                    <H1> Notice Title</H1>
                </Box>
            </Grid>

            {/* 그룹 공지 */}

            <Grid item xs={100} sm={12}>

                <Box sx={{borderRadius : 5 , bgcolor : '#e2e2e2' , color : 'text.primary', p : 2 }}>
                <div>
                    이번주에는 시험기간으로 쉽니다!!
                    이번주에는 시험기간으로 쉽니다!!

                    이번주에는 시험기간으로 쉽니다!!
                    이번주에는 시험기간으로 쉽니다!!
                    이번주에는 시험기간으로 쉽니다!!
                    이번주에는 시험기간으로 쉽니다!!
                    이번주에는 시험기간으로 쉽니다!!
                    이번주에는 시험기간으로 쉽니다!!
                    이번주에는 시험기간으로 쉽니다!!
                    이번주에는 시험기간으로 쉽니다!!
                    
                    이번주에는 시험기간으로 쉽니다!!

                </div>
                
                </Box>
            </Grid>


            {/* 댓글 */}
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
        }/>
  )}

const ContainerGrid = styled(Grid)`
    
    
    
`