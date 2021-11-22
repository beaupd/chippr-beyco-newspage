import React from 'react';

import { articleData } from './data.js';

const Articles = () => {
    return (
        <>
            {articleData.map((data, i) => {
                return (
                    <p key={i}>
                        {data.title}
                    </p>
                )
            })}
        </>
    )
}

export default Articles;