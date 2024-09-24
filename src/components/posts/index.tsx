import { useEffect, useState } from "react";
import { Card } from "../card";
import { Search } from "../search";

import "./index.css";
import api from "../../services/api";

interface PostsProps {
  items?: Array<{
    id: number;
    title: string;
    body: string;
    updated_at: string;
    number: number;
  }>;
}

export function Posts({ query = "" }) {
  const [posts, setPosts] = useState<PostsProps>([] as PostsProps);

  useEffect(() => {
    api
      .get(
        `/search/issues?q=${query}%20repo:REACT-LEARNING-CHALLENGES/Github-Blog`
      )
      .then((response) => {
        setPosts(response.data);
      });
  }, [query]);

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h3>Publicações</h3>
        <span>{`${posts.items?.length} publicações`}</span>
      </div>

      <Search />

      <div className="posts-list">
        {posts.items?.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
