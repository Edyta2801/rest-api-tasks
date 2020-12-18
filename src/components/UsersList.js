import React, { useState, useEffect } from 'react';



function UsersList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then((response) => response.json())
            .then((data) => {

                setUsers(data.results);
                setLoading(false);
                console.log(data.results);
            })
            .catch((error) => setError(true));
    }, []);


    return (
        <div className='Users'>
            {isLoading && <p>Loading...</p>}
            {hasError && <p>An error has occured</p>}
            {users.map(user => (
                <div key={user.id}>
                    <h3>{user.name.first} {user.name.last}</h3>
                  

                </div>
            ))}
        </div>
    );
}

export default UsersList;