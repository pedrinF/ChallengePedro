import { useState } from 'react';
import axios from 'axios';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Link,
  CircularProgress,
  Box,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/system';


interface Repo {
  id: string;
  name: string;
  html_url: string;
  private: boolean;
  created_at: string;
}


interface User {
  avatar_url: string;
  login: string;
}


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0366d6',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, Arial, sans-serif',
  },
});


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0366d6',
    },
    background: {
      default: '#ffffff',
      paper: '#f4f4f4',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, Arial, sans-serif',
  },
});


const MainContainer = styled(Container)`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;


const UserProfileContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const UserProfile = ({ avatarUrl, username }: { avatarUrl: string; username: string }) => (
  <UserProfileContainer>
    <Box
      component="img"
      src={avatarUrl}
      alt={username}
      sx={{
        width: 100,
        height: 100,
        borderRadius: '50%',
        border: '3px solid #0366d6',
        marginBottom: 1,
      }}
    />
    <Typography variant="h6" color="textPrimary">
      {username}
    </Typography>
  </UserProfileContainer>
);

const GithubSearch = () => {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const fetchUserDataAndRepos = async (username: string) => {
    if (!username.trim()) {
      alert('Por favor, insira um nome de usuário válido.');
      return;
    }
  
    setLoading(true);
  
    try {
      const token = import.meta.env.VITE_GITHUB_TOKEN;
  
      if (!token) {
        throw new Error('Token de autenticação não encontrado ou inválido!');
      }
  
      
      const reposResponse = await axios.get(`http://localhost:8080/api/v1/repos/${username}`, {
        headers: {
          token: token,
        },
      });
  
      
      setRepos(reposResponse.data);
  
      
      const userData = reposResponse.data[0]?.owner;  
  
      if (userData) {
        setUser({
          avatar_url: userData.avatar_url,  
          login: userData.login,            
        });
      }
    } catch (error: any) {
      console.error('Erro ao buscar dados:', error.response ? error.response.data : error.message);
      setUser(null); 
      setRepos([]);   
    } finally {
      setLoading(false);
    }
  };
  

  const CreationDate = ({ createdAt }: { createdAt: string }) => {
    const date = new Date(createdAt);
    if (isNaN(date.getTime())) {
      return <Typography color="textSecondary">Data de criação: Não disponível</Typography>;
    }

    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    return <Typography color="textSecondary">Data de criação: {formattedDate}</Typography>;
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <MainContainer maxWidth="md">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          maxWidth="500px"
          mb={3}
        >
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
            label="Modo Escuro"
          />
        </Box>

        <Box display="flex" gap={2} alignItems="center" width="100%" maxWidth="500px" mb={3}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Buscar usuário GitHub"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => fetchUserDataAndRepos(username)}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Buscar'}
          </Button>
        </Box>

        {user && user.avatar_url && (
          <UserProfile avatarUrl={user.avatar_url} username={user.login} />
        )}

        {repos.length > 0 ? (
          repos.map((repo) => (
            <Card key={repo.id} variant="outlined" sx={{ mb: 2, width: '100%' }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="baseline">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="h6"
                    color="primary"
                    sx={{ flexGrow: 1 }}
                  >
                    {repo.name}
                  </Link>
                  <Typography variant="caption" color="textSecondary" sx={{ ml: 2 }}>
                    {repo.private ? 'Privado' : 'Público'}
                  </Typography>
                </Box>
                <Box mt={1}>
                  <CreationDate createdAt={repo.created_at} />
                </Box>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary">
            Nenhum repositório encontrado ou usuário não existe.
          </Typography>
        )}
      </MainContainer>
    </ThemeProvider>
  );
};

export default GithubSearch;
