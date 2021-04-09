import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import {
  FiChevronLeft,
  FiClock,
  FiExternalLink,
  FiGitCommit,
} from 'react-icons/fi';

import { parseISO, format } from 'date-fns';
import api from '../../services/api';

import { Header, ProfileInfo, Repositories } from './styles';

interface ProfileParams {
  login: string;
}

interface Profile {
  name: string;
  login: string;
  id: number;
  avatar_url: string;
  location: string;
  public_repos: number;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
}

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  createdDate: string;
  pushedDate: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const { params } = useRouteMatch<ProfileParams>();

  useEffect(() => {
    api.get(`users/${params.login}`).then(response => {
      setProfile(response.data);
    });
    api.get(`users/${params.login}/repos`).then(response => {
      setRepositories(response.data);
      const repositoriesFormmated = response.data.map(
        (repo: { created_at: string; pushed_at: string }) => ({
          ...repo,
          createdDate: format(parseISO(repo.created_at), 'dd-MM-yyyy HH:mm'),
          pushedDate: format(parseISO(repo.pushed_at), 'dd-MM-yyyy HH:mm'),
        }),
      );
      setRepositories(repositoriesFormmated);
    });
  }, [params.login]);

  return (
    <>
      <Header>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <ProfileInfo>
        <header>
          <img src={profile?.avatar_url} alt={profile?.login} />
          <div>
            <strong>{profile?.name}</strong>
            <p>{profile?.login}</p>
            <p>{profile?.location}</p>
            <p>ID: {profile?.id}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{profile?.followers}</strong>
            <span>Seguidores</span>
          </li>
          <li>
            <strong>{profile?.following}</strong>
            <span>Seguindo</span>
          </li>
          <li>
            <strong>{profile?.public_repos}</strong>
            <span>Repositórios Públicos</span>
          </li>
        </ul>
      </ProfileInfo>
      <Repositories>
        {repositories.map(repository => (
          <a key={repository.id} href={repository.html_url}>
            <div>
              <strong>/{repository.name}</strong>
              <p>{repository.description}</p>
              <p>{repository.language}</p>
            </div>
            <div className="created">
              <FiClock size={20} />
              <strong>Data de criação</strong>
              <p>{repository.createdDate}</p>
            </div>
            <div className="pushed">
              <FiGitCommit size={20} />
              <strong>Data do último push</strong>
              <p>{repository.pushedDate}</p>
            </div>
            <FiExternalLink size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Profile;
