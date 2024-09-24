import { useEffect, useState } from "react";
import {
  ArrowSquareOut,
  Building,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";

import api from "../../services/api";

import "./index.css";

interface ProfileProps {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  company: string;
  followers: number;
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);

  useEffect(() => {
    api.get(`/users/eliasjanuario`).then((response) => {
      setProfile(response.data);
    });
  }, []);

  return (
    <div className="profile-container">
      <img src={profile.avatar_url} alt="Profile" />

      <div className="profile-content">
        <div className="profile-header">
          <h2>{profile.name}</h2>

          <a href="">
            GITHUB
            <ArrowSquareOut size={14} color="#3294f8" />
          </a>
        </div>

        <p>{profile.bio}</p>

        <div className="profile-footer">
          <div>
            <GithubLogo size={20} weight="fill" />
            <span>{profile.login}</span>
          </div>

          <div>
            <Building size={20} weight="fill" />
            <span>{profile.company}</span>
          </div>

          <div>
            <Users size={20} weight="fill" />
            <span>{`${profile.followers} seguidores`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
