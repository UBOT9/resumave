'use client';

import { Provider } from 'react-redux';
import store from '.';
import { useEffect, useState } from 'react';

const ReduxProvider = ({ children }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <div className="flex min-h-screen items-center justify-center">
            <div className="text-xl">Loading...</div>
        </div>;
    }

    return <Provider store={store}>{children}</Provider>;
};