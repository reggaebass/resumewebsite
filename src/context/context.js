import React, { createContext, useState } from 'react';

// Create the context
const HomepageContext = createContext();

// Create a provider component
const HomepageProvider = ({ children }) => {
    const [homepageState, setHomepageState] = useState('about');

    return (
        <HomepageContext.Provider value={{ homepageState, setHomepageState }}>
            {children}
        </HomepageContext.Provider>
    );
};

export { HomepageContext, HomepageProvider };