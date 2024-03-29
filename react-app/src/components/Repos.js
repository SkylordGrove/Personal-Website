import React from 'react';
import { useState, useEffect } from 'react';
import Repo from './Repo';

const getRepos = async() => {
    let res = await fetch(
        `https://api.github.com/users/SkylordGrove/repos`
    );
    let data = await res.json();
    return data;
}

function Repos() {
    const [repoInfo, setRepoInfo] = useState([]);

    useEffect(() => {
        getRepos()
        .then(data=>
            setRepoInfo(data)
        );
    }, [])

    return(
        <ul>
            {repoInfo.map((repo) => <Repo repository={repo}/>)}
        </ul>
    )
}

export default Repos