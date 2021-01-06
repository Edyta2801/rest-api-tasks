import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";

import UsersList from "./components/UsersList";
import UserDetail from "./components/UserDetail";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <Router>
        <Button variant="outlined">
          <Link to="/">Home</Link>
        </Button>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <UsersList />
          </Grid>
          <Grid item xs={6} sm={6}>
            <UserDetail />
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
