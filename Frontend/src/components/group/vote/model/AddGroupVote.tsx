import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface AddGroupVoteData {
  title : string,
  description: string,
  startDate : string,
  endDate : string,
  candidates: { candidate: string}[];
  
}

export default function AddGroupVote(){
  
  const navigate = useNavigate();

  let token = sessionStorage.getItem('token');

  const addGroupVote = async (data: AddGroupVoteData) => {
    try {
      if (data.title.trim() === '' || data.description.trim() === '' || data.startDate.trim() === '' || data.endDate.trim() === '') {
        alert('빈칸을 채워주세요 !'); 
        return;
      } 
      else {

      }
      const headers = {
        'Authorization': `Bearer ${token}`, 
      };

      const response = await axios.post(`https://neotrinity.kro.kr/vote`, data,{headers});
      navigate('/group');
      
      console.log(response)

    } catch (error) {
    console.log(data);
      console.log('Error:', error);
      
    }
  };

  return { addGroupVote};
};

