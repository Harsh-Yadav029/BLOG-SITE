import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        // This effect handles page protection based on authentication status.
        // It redirects the user if they do not meet the authentication requirements for a given route.

        const isPublicPage = authentication === false;
        
        // If user must be logged in, but isn't -> redirect to login
        if (authentication && authStatus !== authentication) {
            navigate('/login');
        // If it's a public page (like login) and user is already logged in -> redirect to home
        } else if (isPublicPage && authStatus !== authentication) {
            navigate('/');
        }
        
        setLoader(false);

    }, [authStatus, navigate, authentication]);

    // Display a loading indicator while authentication status is being verified.
    return loader ? (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-semibold text-gray-700">Loading...</h1>
        </div>
    ) : (
        <>{children}</>
    );
}