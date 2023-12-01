import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';

interface FetchGroupBoardData {

    description: string;
    id: number;
    status: string;
    title: string;
    createdAt : any;
    user: {username : string};
}

export default function FetchGroupBoardDetail() {

    const params = useParams();
    
    let token = sessionStorage.getItem('token');


    const [data, setData] = useState<FetchGroupBoardData>();

    useEffect(() => {
        axios
            .get(`https://neotrinity.kro.kr/boards/${params.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            })
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log('에러:', error.response);
            });
    }, []);

    return { data };
};

