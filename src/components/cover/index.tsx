import githubBlogCover from "../../assets/cover.png";

import "./index.css";

export function Cover() {
  return (
    <div className="cover-container">
      <img src={githubBlogCover} alt="Github Blog Cover" />
    </div>
  );
}
