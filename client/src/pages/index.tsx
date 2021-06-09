import AuthLayout from '../app/components/Layout/auth/AuthLayout'
import { MainLayout } from '../app/components/Layout/user/MainLayout';
import { Purposes } from '../app/components/Layout/user/Purposes';
import { AuthState, useAuth } from '../utils/hooks/useAuth';

export default function Home() {
    const auth: AuthState = useAuth();

    return (
        <div>
            { auth.user ? (
                <MainLayout>
                    <Purposes />
                </MainLayout>
            ) : (
                <AuthLayout></AuthLayout>
            )}
        </div>
    )
}
