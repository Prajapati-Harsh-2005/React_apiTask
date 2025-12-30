import React, { useState, useEffect } from 'react';
export default function DataLoader(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setData(data));
    });
    return(
        <div>
            <ul>
                {data.map(mydata => (
                    <li key={mydata.id}>{mydata.title}</li>
                ))}
            </ul>
        </div>
    );
}