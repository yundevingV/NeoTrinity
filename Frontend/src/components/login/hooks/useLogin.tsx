import axios from 'axios';
import { useNavigate } from 'react-router';

interface LoginData {
  email: string;
  password: string;
}

export default function useLogin(){
  
  const navigate = useNavigate();

  const login = async (data: LoginData) => {
    try {
      if (data.email.trim() === '' || data.password.trim() === '' ) {
        alert('빈칸을 채워주세요 !'); 
        return;
      }

      const response = await axios.post(`https://neotrinity.kro.kr/auth/signin`, data);
      sessionStorage.setItem('token',response.data.accessToken)
      navigate('/main');
      console.log(response)

    } catch (error) {
    console.log(data);
      console.log('Error:', error);
      
    }
  };

  return { login};
};

