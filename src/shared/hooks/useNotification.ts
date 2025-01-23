import { notification as notificationAntd } from 'antd';
import { useEffect } from 'react';
import { userGlobalContext } from './UserGlobalContext';

export const useNotification = () => {
    const [api, contextHolder] = notificationAntd.useNotification();
    const { notification } = userGlobalContext();

    useEffect(() => {
        if (notification?.message && notification.type) {
            api[notification.type]({
                message: `${notification.message}`,
                description: notification.description,
                placement: 'topRight',
            });
        }
    }, [notification]);

    return {
        api,
        contextHolder,
    };
};
