import React, { FormEvent, useState, useEffect } from 'react';
import { FiChevronRight, FiList } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Form, Profile, Error, Searched } from './styles';
import api from '../../services/api';

interface Profile {
  name: string;
  login: string;
  id: number;
  avatar_url: string;
  location: string;
}

const Dashbord: React.FC = () => {
  const [newProf, setNewProf] = useState('');
  const [inputError, setInputError] = useState('');
  const [currentProfile, setCurrentProfile] = useState<Profile[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>(() => {
    const storageProfiles = localStorage.getItem('@GithubFinder:profiles');
    if (storageProfiles) {
      return JSON.parse(storageProfiles);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubFinder:profiles', JSON.stringify(profiles));
  }, [profiles]);

  async function handleAddProfile(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newProf) {
      setInputError('Digite o nome do perfil do GitHub ');
      return;
    }
    try {
      const response = await api.get(`users/${newProf}`);

      const profile = response.data;
      const current = response.data;

      setProfiles([...profiles, profile]);
      setCurrentProfile([current]);
      setNewProf('');
      setInputError('');
    } catch (err) {
      setInputError(
        'Erro na busca por esse perfil, digite o nome corretamente',
      );
    }
  }

  return (
    <>
      <Searched>
        <Link to="/searched">
          <button type="submit">
            <FiList size={28} />
          </button>
        </Link>
        Histórico de Pesquisas
      </Searched>

      <Title>Procure um perfil no GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleAddProfile}>
        <input
          value={newProf}
          onChange={e => setNewProf(e.target.value)}
          placeholder="Digite o nome do perfil"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Profile>
        <>
          {currentProfile.map(current => (
            <Link key={current.login} to={`/users/${current.login}`}>
              <img src={current.avatar_url} alt={current.login} />
              <div>
                <strong>{current.name}</strong>
                <p>{current.login}</p>
                <p>{current.location}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          ))}
        </>
      </Profile>
    </>
  );
};

export default Dashbord;
