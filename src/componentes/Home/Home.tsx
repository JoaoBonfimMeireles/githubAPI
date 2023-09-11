import "./Home.css";

import { UserProps } from "../../types/user";

import { useState } from "react";
import Search from "../Search/Search";

function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [contentVisible, setContentVisible] = useState(false);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    const {
      avatar_url,
      login,
      location,
      followers,
      following,
      name,
      public_repos,
    } = data;

    const userData: UserProps = {
      avatar_url,
      followers,
      following,
      location,
      login,
      name,
      public_repos,
    };

    setUser(userData);
    setContentVisible(true); 
  };

  return (
    <div className="box-all">
      <div className="box-text">
        <Search loadUser={loadUser} />
      </div>
      <div className={`box-content ${contentVisible ? "" : "hidden"}`}>
        {user && <p>{user.name}</p>}
        {user && (
          <img src={user.avatar_url} alt={"User do GitHub: " + user.name}></img>
        )}
        <div className="box-inf">
          {user && <p>Projetos: {user.public_repos}</p>}
          {user && <p>Seguindo: {user.following}</p>}
          {user && <p>Seguidores: {user.followers}</p>}
        </div>
      </div>
    </div>
  );
}

export default Home;
