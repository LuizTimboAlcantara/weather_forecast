import axios from "axios";

const apiGit = axios.create({
  baseURL: "https://api.github.com/users/",
  timeout: 5000,
});

export const fetchGitHub = async (username: string) => {
  const { login, avatar_url } = await apiGit.get(username).then((response) => response.data);

  return { login, avatar_url };
};
