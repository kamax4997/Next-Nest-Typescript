import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export interface AuthState {
    user: firebase.User | null;
    signInWithFacebook: () => Promise<firebase.User | null>;
    signInWithTwitter: () => Promise<firebase.User | null>;
    signInWithGoogle: () => Promise<firebase.User | null>;
    signout: () => Promise<void>;
}

const authContext = createContext<AuthState>({
    user: null,
    signInWithFacebook: async () => null,
    signInWithTwitter: async () => null,
    signInWithGoogle: async () => null,
    signout: async () => {
        return;
    },
});

function useProvideAuth(): AuthState {
    const [user, setUser] = useState<firebase.User | null>(null);

    const signout = (): Promise<void> => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(null);
            });
    };

    const signInWithFacebook = (): Promise<firebase.User | null> => {
        const provider = new firebase.auth.FacebookAuthProvider();
        return firebase
            .auth()
            .signInWithPopup(provider)
            .then((userCredential: firebase.auth.UserCredential) => {
                const user = userCredential.user;
                console.log("user", user);
                setUser(user);
                return user;
            });
    }

    const signInWithTwitter = (): Promise<firebase.User | null> => {
        const provider = new firebase.auth.TwitterAuthProvider();
        return firebase
            .auth()
            .signInWithPopup(provider)
            .then((userCredential: firebase.auth.UserCredential) => {
                const user = userCredential.user;
                console.log("twitter user", user);
                setUser(user);
                return user;
            });
    }

    // const signInWithLinkedin = (): Promise<firebase.User | null> => {
    //     const provider = new firebase.auth.LinkedInAuthProvider();
    //     return firebase
    //         .auth()
    //         .signInWithPopup(provider)
    //         .then((userCredential: firebase.auth.UserCredential) => {
    //             const user = userCredential.user;
    //             setUser(user);
    //             return user;
    //         });
    // }

    const signInWithGoogle = (): Promise<firebase.User | null> => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase
            .auth()
            .signInWithPopup(provider)
            .then((userCredential: firebase.auth.UserCredential) => {
                const user = userCredential.user;
                setUser(user);
                return user;
            });
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        // Cleanup subscription on unmount
        return (): void => unsubscribe();
    }, []);

    // Return the user object and auth methods
    return {
        user,
        signInWithFacebook,
        signInWithTwitter,
        signInWithGoogle,
        signout,
    };
}

export function ProvideAuth({ children }: { children: React.ReactNode }): JSX.Element {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = (): AuthState => {
    return useContext(authContext);
};
