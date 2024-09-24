import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";

import {
  ArrowSquareOut,
  CaretLeft,
  ChatTeardrop,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";

import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

import api from "../../services/api";

import "./index.css";

interface DetailsData {
  title: string;
  user: {
    login: string;
  };
  updated_at: string;
  comments: number;
  body: string;
}

export default function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState<DetailsData>({} as DetailsData);

  useEffect(() => {
    api
      .get(`/repos/REACT-LEARNING-CHALLENGES/Github-Blog/issues/${id}`)
      .then((response) => {
        setDetails(response.data);
      });
  }, [id]);

  const formatDate = (dataISO: string) => {
    const data = parseISO(dataISO);
    return formatDistanceToNow(data, { addSuffix: true, locale: ptBR });
  };

  return (
    <div className="details-container">
      <div className="details-profile-container">
        <div className="details-profile-content">
          <div className="details-profile-header">
            <a href="/">
              <CaretLeft size={14} color="#3294f8" />
              VOLTAR
            </a>

            <a href="https://www.github.com">
              VER NO GITHUB
              <ArrowSquareOut size={14} color="#3294f8" />
            </a>
          </div>

          <h2>{details.title}</h2>

          <div className="details-profile-footer">
            <div>
              <GithubLogo size={20} weight="fill" />
              <span>{details?.user?.login || "eliasjanuario"}</span>
            </div>

            <div>
              <ChatTeardrop size={20} weight="fill" />
              <span>
                {details.updated_at ? formatDate(details.updated_at) : ""}
              </span>
            </div>

            <div>
              <Users size={20} weight="fill" />
              <span>{`${details.comments} comentários`}</span>
            </div>
          </div>
        </div>
      </div>

      <Markdown className="details-markdown-container">{details.body}</Markdown>
    </div>
  );
}
