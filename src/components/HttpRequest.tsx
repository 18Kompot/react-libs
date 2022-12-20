import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
  title: string;
  id: number;
}
function HttpRequest() {
  const baseUrl = "https://jsonplaceholder.typicode.com/";
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    axios.get(`${baseUrl}users/1/posts`).then((response) => {
      setPosts(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(`${baseUrl}posts`, {
        title: "New post title",
        body: "New post body",
      })
      .then((res) => {
        setPosts([...posts, res.data]);
      });
  }

  if (posts.length === 0) return <div>No posts</div>;

  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
      <button onClick={createPost}>Create Post</button>
    </>
  );
}

export default HttpRequest;
