import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GithubSearch from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GithubSearch />
  </StrictMode>,
)
