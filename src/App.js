import './App.css';
import devpic from "./devpic.jpg"

function App() {
  return (
    <div className="App">
      <img className = "devpic" src = {devpic}/>
      <h1>My Links:</h1>
      <h4>By Matthew "ragnarockerbunny" Stevens</h4>
      <ul>
        <li><a target = "_blank" href = "https://github.com/ragnarockerbunny" rel="noreferrer noopener"><i className = "bi bi-github"></i> Github</a></li>
        <li><a target = "_blank" href = "https://rgb-dev.co.za/" rel="noreferrer noopener"><i className = "bi bi-globe"></i> My Website</a></li>
        <li><a target = "_blank" href = "https://mas.to/@mdstevens0612" rel="noreferrer noopener"><i className="bi bi-mastodon"></i> Mastodon</a></li>
        <li><a target = "_blank" href = "https://bsky.app/profile/mdstevens0612.bsky.social" rel="noreferrer noopener"><i className="bi bi-at"></i> BlueSky</a></li>
        <li><a target = "_blank" href = "https://www.youtube.com/channel/UCl8SdOVnxZzn7TmfNfzsRyQ" rel="noreferrer noopener"><i className = "bi bi-youtube"></i> YouTube</a></li>
        <li><a target = "_blank" href = "https://howmattdavewrites.blogspot.com/" rel="noreferrer noopener"><i className="bi bi-journal-bookmark-fill"></i> Blog</a></li>
        <li><a target = "_blank" href = "https://ragnarockerbunny.itch.io/" rel="noreferrer noopener"><i className="bi bi-joystick"></i> Itch </li>
        <li><a target = "_blank" href = "https://gamejolt.com/@ragnarockerbunny" rel="noreferrer noopener"><i className="bi bi-joystick"></i> Gamejolt </li>
      </ul>
    </div>
  );
}

export default App;
