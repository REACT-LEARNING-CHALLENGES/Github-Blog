import { Card } from "../card";
import { Search } from "../search";

import "./index.css";

export function Posts() {
  return (
    <div className="posts-container">
      <div className="posts-header">
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </div>

      <Search />

      <div className="posts-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
