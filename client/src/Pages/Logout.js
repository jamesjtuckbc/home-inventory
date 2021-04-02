import React from 'react';
import { useHistory } from 'react-router-dom';
import { API } from '../utils/API';
import { useAuth } from '../utils/context'

export function Logout() {
    const { setAuth } = useAuth();
    API.logout();
    setAuth(null);
    const history = useHistory();
    history.push('/');
    return (
        <div>
            
        </div>
    )
}
