import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './Search.css';

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
    const [userName, setUserName] = useState('');

    return (
        <div>
            <h2>Busque seu nome:</h2>
            <div className="input-text">
                <input
                    type="text"
                    placeholder="Digite o nome aqui"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    );
};

export default Search;
