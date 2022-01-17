export interface ILangStats {
  label: string;
  value: number;
  color: string;
}

export interface IUserData {
  login: string;
  id: number | string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string | null; 
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface IRepoData   {
  id: number | string; 
  name: string;
  html_url: string; 
  description: string;
  fork: boolean; 
  size: number; 
  language: string; 
  forks_count: number; 
  forks: number; 
  stargazers_count: number;
  }