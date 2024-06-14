import { useState, useEffect } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // Fetching API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Data fetching failed");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError("Data fetching failed");
      }
    };

    fetchPosts();
  }, []);

  // Error handling and rendering
  if (error) {
    return (
      <div style={{ color: "black" }}>
        <strong>{error}</strong>
      </div>
    );
  }

  // Normal rendering when there's no error
  return (
    <div>
      <h1>Posts</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.map((post, index) => (
          <li key={post.id}>
            <h2>
              {" "}
              {index + 1}. {post.title}
            </h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
