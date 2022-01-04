import './App.css'
import ResourceManager from './ResourceManager'

function App() {
  return (
    <div className="App">
        <ResourceManager resources={{ 'coin': 1, 'worker': 1, 'food': 1, 'culture': 1}}/>
    </div>
  );
}

export default App;
