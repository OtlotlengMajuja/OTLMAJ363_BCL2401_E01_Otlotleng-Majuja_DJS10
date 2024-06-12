import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then(data => setPosts(data))
      .catch(error => setError(error.message));
  }, []);


  return ()
}

