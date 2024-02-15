import "./App.css";
import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function App() {
  const [liked, setLiked] = useState(0);

  const handleLike = () => {
    setLiked(liked + 1);
  };

  const handleDislike = () => {
    setLiked(liked - 1);
  };

  return (
    <div>
      <h1 className="">I'm a Software Engineering Student.</h1>
      <h2>
        <button onClick={handleLike}>
          <FaThumbsUp />
        </button>
        <button onClick={handleDislike}>
          <FaThumbsDown />
        </button>
        {liked}
      </h2>
    </div>
  );
}

export default App;