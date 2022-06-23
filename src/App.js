import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCard from './Component/Profile/ProfileCard';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <ProfileCard />
    </div>
  );
}

export default App;
