import {
  ArrowSquareOut,
  Building,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";

import "./index.css";

export function Profile() {
  return (
    <div className="profile-container">
      <img
        src="https://avatars.githubusercontent.com/u/68289275?v=4"
        alt="Profile"
      />

      <div className="profile-content">
        <div className="profile-header">
          <h2>Elias Januario</h2>

          <a href="">
            GITHUB
            <ArrowSquareOut size={14} color="#3294f8" />
          </a>
        </div>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div className="profile-footer">
          <div>
            <GithubLogo size={20} weight="fill" />
            <span>Repositories</span>
          </div>

          <div>
            <Building size={20} weight="fill" />
            <span>Followers</span>
          </div>

          <div>
            <Users size={20} weight="fill" />
            <span>Following</span>
          </div>
        </div>
      </div>
    </div>
  );
}
