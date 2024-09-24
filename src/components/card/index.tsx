import { useNavigate } from "react-router-dom";

import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

import "./index.css";

interface CardProps {
  post: {
    id: number;
    title: string;
    body: string;
    updated_at: string;
    number: number;
  };
}

export function Card({ post }: CardProps) {
  const navigate = useNavigate();

  const handleCardClick = (number: number) => {
    navigate(`/details/${number}`);
  };

  const date = parseISO(post.updated_at);
  const dateFormatted = formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <div
      className="card-container"
      onClick={() => handleCardClick(post.number)}
    >
      <div className="card-header">
        <h1>{post.title}</h1>
        <time>{dateFormatted}</time>
      </div>
      <p>{post.body}</p>
    </div>
  );
}
