import axios from 'axios';
import { useState } from 'react';
import { userGlobalContext } from './UserGlobalContext';

export const useRequests = () => {
    const [loading, setLoading] = useState(false);
    const { setNotification } = userGlobalContext();

    const getRequest = async (url: string) => {
        setLoading(true);
        return await axios({
            method: 'get',
            url: url,
        })
            .then((result) => {
                alert(`Fez login ${result.data.accessToken}`);
                return result.data;
            })
            .catch(() => {
                alert('Erro no get');
            });
    };

    const postRequest = async (url: string, body: any) => {
        setLoading(true);
        const returnData = await axios({
            method: 'post',
            url: url,
            data: body,
        })
            .then((result) => {
                // alert(`Fez login ${result.data.accessToken}`);
                setNotification('Fez login', 'success');
                return result.data;
            })
            .catch(() => {
                setNotification('Senha invalida', 'error');
            });

        setLoading(false);
        return returnData;
    };

    return {
        loading,
        getRequest,
        postRequest,
    };
};
