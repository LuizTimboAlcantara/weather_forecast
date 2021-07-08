import React, { useState } from "react";

import { fetchGitHub } from "../services/gitApi";

interface UserContextProps {
  name?: string;
  avatarUrl?: string;
  getUserName?: (name: string) => Promise<void>;
  clearUser?: () => void;
}

const userContext = React.createContext<UserContextProps>({});

export const UserProvider: React.FC = ({ children }) => {
  const [name, setName] = useState<string>();
  const [avatarUrl, setAvatarUrl] = useState<string>();

  async function getUserName(name: string): Promise<void> {
    const { login, avatar_url } = await fetchGitHub(name);

    setValues(login, avatar_url);
  }

  function setValues(username: string, avatar_url: string) {
    setName(username);
    setAvatarUrl(avatar_url);
  }

  function clearUser() {
    setName("");
    setAvatarUrl("");
  }

  return <userContext.Provider value={{ name, avatarUrl, getUserName, clearUser }}>{children}</userContext.Provider>;
};

export default userContext;
