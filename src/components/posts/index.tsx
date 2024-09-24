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

export function Posts() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [posts, setPosts] = useState<PostsProps>([] as PostsProps);

  const fetchPosts = async (searchQuery: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(
        `/search/issues?q=${searchQuery}%20repo:REACT-LEARNING-CHALLENGES/Github-Blog`
      );
      setPosts(response.data);
    } catch {
      setError("Erro ao buscar publicações.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(query);
  }, [query]);

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h3>Publicações</h3>
        <span>{`${posts.items?.length} publicações`}</span>
      </div>

      <Search onSearch={setQuery} />

      <div className="posts-list">
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        {!loading &&
          !error &&
          posts.items?.map((post) => <Card key={post.id} post={post} />)}
      </div>
    </div>
  );
}
