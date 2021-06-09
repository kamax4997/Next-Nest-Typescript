// import React from 'react';
import { ApolloProvider } from '@apollo/client';
import NextApp, { AppProps } from 'next/app';
import { useApollo } from '../utils/apollo';
import { ToastContainer } from 'react-toastify';
import { ProvideAuth } from '../utils/hooks/useAuth';
import '../assets/styles/css/custom.css';
import firebase from 'firebase/app';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from '../utils/theme';

// ------------------- Function Component ----------------------

function MyApp({ Component, pageProps }: AppProps) {

    if (!firebase.apps.length) {
        firebase.initializeApp({
            apiKey: "AIzaSyDNuziv0K5uEaIQbPIzHZENe7yGQOqEDNA",
            authDomain: "business-matching-4286a.firebaseapp.com",
            projectId: "business-matching-4286a",
            storageBucket: "business-matching-4286a.appspot.com",
            messagingSenderId: "27419774034",
            appId: "1:27419774034:web:4faf324d86b91e4afba38b",
            measurementId: "G-2Y6K141T8C"
        });
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={theme}>
                <ProvideAuth>
                    <Component {...pageProps} />
                </ProvideAuth>
                <ToastContainer />
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default MyApp
