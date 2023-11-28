import axios from 'axios';
import { useEffect, useState } from 'react';

interface FetchGroupBoardData {

    description: string;
    id: number;
    status: string;
    title: string;
}

export default function FetchGroupBoard() {

    let token = sessionStorage.getItem('token');

    const [data, setData] = useState<FetchGroupBoardData[]>();

    useEffect(() => {
        axios
            .get(`https://neotrinity.kro.kr/boards`, {
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

