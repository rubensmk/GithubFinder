import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Profile, Header } from './styles';

interface Profile {
  name: string;
  login: string;
  id: number;
  avatar_url: string;
  location: string;
}

const Searched: React.FC = () => {
  const [empty, setEmpty] = useState('');
  const [profiles, setProfiles] = useState<Profile[]>(() => {
    const storageProfiles = localStorage.getItem('@GithubFinder:profiles');
    if (storageProfiles) {
      return JSON.parse(storageProfiles);
    }

    return [];
  });

  function handleClearAll() {
    localStorage.removeItem('@GithubFinder:profiles');
    setProfiles([]);
  }

  useEffect(() => {
    if (profiles.length === 0) {
      setEmpty('Histórico de pesquisas vazio.');
    }
  }, [profiles]);
  return (
    <>
      <Header>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <Profile>
        <button type="submit" onClick={handleClearAll}>
          Limpar Histórico
        </button>
        {empty && <h3>{empty}</h3>}
        {profiles &&
          profiles.map(profile => (
            <>
              <Link key={profile.login} to={`/users/${profile.login}`}>
                <img src={profile.avatar_url} alt={profile.login} />
                <div>
                  <strong>{profile.name}</strong>
                  <p>{profile.login}</p>
                  <p>{profile.location}</p>
                </div>
                <FiChevronRight size={20} />
              </Link>
            </>
          ))}
      </Profile>
    </>
  );
};

export default Searched;
