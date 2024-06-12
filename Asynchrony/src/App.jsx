import { useState, useEffect } from 'react'

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // Fetching API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error("Data fetching failed");
        }
        return response.json();
      })
      .then(data => setPosts(data))
      .catch(error => setError(error.message));
  }, []);

  // Error handling and rendering
  if (error) {
    return (<div style={{ color: 'black', }}>{error}</div>);
  }

  // Normal rendering when there's no error
  return (
    <div>
      <h1>Posts</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.map((post, index) => (
          <li key={post.id}>
            <h2> {index + 1}. {post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
 
}

