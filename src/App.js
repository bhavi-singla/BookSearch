import './App.css';
import Main from './Components/Main';
import './Components/style.css';
function App({showSearchPage}) {
  return (
    <div className="App">
      {showSearchPage}:<Main/>?{window.location="http://localhost:8000"};
    </div>
  );
}

export default App;
