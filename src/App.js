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
        <li><a target = "_blank" href = "https://twitter.com/MatthewDaveStev" rel="noreferrer noopener"><i className = "bi bi-twitter"></i> Twitter</a></li>
        <li><a target = "_blank" href = "https://www.youtube.com/channel/UCl8SdOVnxZzn7TmfNfzsRyQ" rel="noreferrer noopener"><i className = "bi bi-youtube"></i> YouTube</a></li>
        <li><a target = "_blank" href = "https://howmattdavewrites.blogspot.com/" rel="noreferrer noopener"><i class="bi bi-journal-bookmark-fill"></i> Blog</a></li>
      </ul>
    </div>
  );
}

export default App;
