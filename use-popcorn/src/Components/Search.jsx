import { useEffect, useRef } from "react";

export default function Search({ query, setQuery }) {
  const searchEl = useRef(null);

  useEffect(function () {
    function callback(e) {
      if (e.code === "Enter") {
        searchEl.current.focus();
      }
    }

    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown", callback);
  }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={searchEl}
    />
  );
}
