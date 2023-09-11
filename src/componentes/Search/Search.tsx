import React, { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};
//typagem de loadUser para definir o nome da pessoa

const Search = ({ loadUser }: SearchProps) => {
  // O SearchProps foi typado na parte de cima e é uma props
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className="box-input">
      <h2>Busque seu nome:</h2>
      <div className="input-text">
        <input
          type="text"
          placeholder="Digite o nome sem espaço"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
        <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
