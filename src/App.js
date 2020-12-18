import './App.css';
import { BrowserRouter as Router, Link} from "react-router-dom";

import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </Router>
      <UsersList />
    </div>
  );
}

export default App;
