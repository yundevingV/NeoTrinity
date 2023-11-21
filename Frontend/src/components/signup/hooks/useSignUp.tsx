import axios from 'axios';
import { useNavigate } from 'react-router';

interface SignUpData {
  email: string;
  password: string;
  username: string;
}

export default function useSignUp(){
  
  const navigate = useNavigate();

  const signUp = async (data: SignUpData) => {
    try {
      if (data.email.trim() === '' || data.password.trim() === '' || data.username.trim() === '') {
        alert('빈칸을 채워주세요 !'); 
        return;
      }

      const response = await axios.post(`https://neotrinity.kro.kr/auth/register`, data);
      navigate('/login');
      console.log(response)

    } catch (error) {
    console.log(data);
      console.log('Error:', error);
      
    }
  };

  return { signUp};
};

