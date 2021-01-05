import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams
} from "react-router-dom";
import axios from "axios";
// import "./styles.css";

const Users = ({ data }) => {
    const { results } = data;
    return (
        <div>
            <p>Hello from users component</p>
            {results &&
                results.map((user) => (
                    <div key={user.login.uuid}>
                        <Link to={`/users/${user.login.uuid}`}>
                            {user.name.first} {user.name.last}
                        </Link>
                    </div>
                ))}
        </div>
    );
};

const User = ({ data }) => {
    const { id } = useParams();
    const { results } = data;
    if (!results) {
        return null;
    }

    const matchingUsers = results.filter((elem) => elem.login.uuid === id);
    const user = matchingUsers[0];
    return <div>{user && user.name.first}</div>;
};

export default function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("https://randomuser.me/api/?results=10")
            // token: dsfjlksjfsj34jljsdljflsdjfl
            // expires - 3600s
            // option 1: logout
            // option 2: refresh -> https://api.random.com/refresh
            .then((response) => setUsers(response.data));
    }, []);
    // console.log(users);
    return (
        <div className="App">
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <Route exact path="/users/:id">
                    <User data={users} />
                </Route>
                {/* Zapis dla Routera w komponencie klasowym */}
                {/* <Route exact path="/users/:id" component={User} render={(props) => <User {...props} data={users} />} /> */}
                <Route exact path="/">
                    <Users data={users} />
                </Route>
            </Router>
        </div>
    );
}