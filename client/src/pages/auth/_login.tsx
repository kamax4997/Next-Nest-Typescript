import React, { useEffect, useState } from 'react';
import AuthLayout from '../../app/components/Layout/auth/AuthLayout'
import { AuthState, useAuth } from '../../utils/hooks/useAuth';
import { useRouter } from 'next/router';
import firebase from 'firebase';

export default function Login() {
    const router = useRouter();
    const auth: AuthState = useAuth();
    // const [user] = useUserAuth();
    // const [login] = useLoginMutation();
    // const [error, setError] = useState('');
    // const [showAlert, setShowAlert] = useState(false);
    // const router = useRouter();

    useEffect(() => {
        if (auth.user) return; // do nothing if the user is logged in
        // router.replace("/dashboard", "/auth/login", { shallow: false });
    }, []);
    
    return (
        <AuthLayout></AuthLayout>
    );
};
