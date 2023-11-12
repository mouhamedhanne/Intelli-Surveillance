import React, { useState, useEffect } from "react";

export default function Blog() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    function fetchData() {
      fetch("https://hn.algolia.com/api/v1/search?query=redux")
        .then((res) => res.json())
        .then((res) => setData(res.hits))
        .catch((err) => setError(err));
    }
    fetchData();
    console.log(setData);
  }, []);

  return (
    <div>
      <ul>
        {data.map((course) => (
          <li>
            <a href={course.url}>{course.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
