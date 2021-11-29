import React from 'react';

// Import elements
import {
    NotFoundWrapper,
} from './elements';

const NotFound = () => {
    return (
        <>
            <main>
                
                {/* Not found wrapper */}
                <NotFoundWrapper>
                    <h1>Page not found</h1>
                </NotFoundWrapper>
            </main>
        </>
    )
}

export default NotFound;