import { useEffect } from "react";
import { useState } from "react";

function Content() {
  const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
  const [titles, setTitles] = useState([]);
  const [type, setType] = useState("posts");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((e) => e.json())
      .then((data) => setTitles(data));
  }, [type]);
  console.log(type);
  return (
    <div>
      {tabs.map((tab) => (
        <button
          style={
            type === tab
              ? {
                  color: "white",
                  backgroundColor: "blue",
                }
              : {}
          }
          key={tab}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <ul>
        {titles.map((a) => (
          <li key={a.id}>{a.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
