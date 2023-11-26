import axios from 'axios';
import { useNavigate } from 'react-router';

interface AddGroupBoardData {
  title: string;
  description: string;
  status : string;
}

export default function AddGroupBoard(){
  
  const navigate = useNavigate();

  const addGroupBoard = async (data: AddGroupBoardData) => {
    try {
      if (data.title.trim() === '' || data.description.trim() === '' || data.status.trim() === '') {
        alert('빈칸을 채워주세요 !'); 
        return;
      }

      const response = await axios.post(`https://neotrinity.kro.kr/boards`, data);
      navigate('/group');
      console.log(response)

    } catch (error) {
    console.log(data);
      console.log('Error:', error);
      
    }
  };

  return { addGroupBoard};
};

