import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

const App = () => {
    const [books, setBooks] = useState([]);

    useEffect(async () => {
        const response = await fetch('http://localhost:3002/api/books');
        const responseJson = await response.json();

        setBooks(responseJson);
    }, []);

    return (
        <>
            <h1>Hello From Web App With Proxy</h1>

            <ul>
                {books.map((item, index) => (
                    <li key={index}>Author: {item.author}, title: {item.title}</li>
                ))}
            </ul>
        </>
    )
};

render(< App />, document.getElementById("root"));