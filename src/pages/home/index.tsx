import { Posts } from "../../components/posts";
import { Profile } from "../../components/profile";

import "./index.css";

export function Home() {
  return (
    <div className="home-container">
      <Profile />
      <Posts />
    </div>
  );
}

export default Home;
