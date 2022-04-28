
import './App.css';
import ProfilePhoto from './Profile/ProfilePhoto';
import FullName from './Profile/FullName';
import Address from './Profile/Address';
function App() {
  return (
    <div className='Profile'>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
