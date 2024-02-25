import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`order/${query}`);
    setQuery("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="w-28 rounded-full px-4 py-2 text-sm transition-all placeholder:text-stone-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search order #"
        ></input>
      </form>
    </div>
  );
}
