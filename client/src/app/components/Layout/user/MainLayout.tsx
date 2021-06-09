import Container from '@material-ui/core/Container';
import React from 'react';
import { Footer } from './Footer';
import Header from './Header';
import { TopBar } from './TopBar';

interface MainLayoutProps {}
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <TopBar />
            <Header />
            <main className="py-3" style={{ minHeight: '85vh' }}>
                {/* <Container className="px-0"> */}
                    {children}
                {/* </Container> */}
            </main>

            <Footer />
        </>
    );
};
