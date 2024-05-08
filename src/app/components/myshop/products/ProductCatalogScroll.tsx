// components/PostList.tsx

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement>(null);

  const fetchPosts = async (currentPage: number) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.SERVER_ENDPOINT}/api/myshop-board/products?id=3`
      );
      const newPosts = response.data;
      console.log(newPosts);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      fetchPosts(page);
    }
  };

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "20px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef]);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="py-2">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      <div ref={loaderRef} />
    </div>
  );
};

export default PostList;
