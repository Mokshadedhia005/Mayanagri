import react from "react";
import { FaSearch } from "react-icons/fa";

import "./Home.css";
function Home() {
  return (
    <div className="nav">
      <h1>Mayanagri</h1>
      <a>Home</a>
      <a>Places to go</a>
      <button>About</button>
      <button>
        <FaSearch />
      </button>
    </div>
  );
}

export default Home;
