import './App.css';
import Navbar from './Navbar.js';
import SearchBar from './SearchBar.js';
import PostList from './PostList.js';
import Profile from './Profile.js';
import Login from './Login';
import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';

function App(){
  const [post, setPost] = useState([]);
  const [section, setSection] = useState("Post");
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");

  const getProfile = code =>{
    const setProfileData = (user, avat, biog) => {
      setUsername(user);
      setAvatar(avat);
      setBio(biog);
    };
    if(code !== "ERROR" && code !== "undefined"){
      const url = "https://three-points.herokuapp.com/api/users/" + localStorage.getItem('id');
      fetch(url)
      .then(resp => resp.json())
      .then(datos => setProfileData("@" + datos.username, datos.avatar, datos.bio));
    }
    else{
      console.log("ERROR: " + code);
      setError(code);
    }
  }
  
  useEffect(() => {
    const url = "https://three-points.herokuapp.com/api/posts";
    fetch(url)
    .then(resp => resp.json())
    .then(data => setPost(data));
    getProfile("");
  },[]);

  const getComponent = () => {
    if (localStorage.getItem('id') === null || localStorage.getItem('id') === "undefined")
    {
      localStorage.clear();
      if( window.location.href !== "http://localhost:3000/login" ){
        window.location.href="http://localhost:3000/login";
      }
      return( 
            <Switch>
              <Route path="/login" exact>
                <Login onLoginComplete={(err) => getProfile(error)} err={error} />;
              </Route>
            </Switch>
      );
    }
    else{
      return (
        <div>
          <Navbar onLogoClick={(opcion) => setSection(opcion)} onProfileClick={(opcion) => setSection(opcion)} />
          {
            section === "Post" ? 
            (
              <div className="container">
                {
                  post.length > 0 ? 
                  (
                    <SearchBar value={search} onSearch={opcsearch => setSearch(opcsearch)} />
                  ) 
                  : 
                  (
                    <div className="loading">
                      Loading
                      <span id="circulo"></span>
                    </div>
                  )
                }
                <PostList tweets={post} buscar={search} />        
              </div>
            )
            : ( 
                <Profile username={username} avatar={avatar} bio={bio} />
              )
          }
        </div>
      );
    }
  };

  return (
    <div className="App">
      {
        getComponent()
      }
    </div>
  );
}

export default App;
