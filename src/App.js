import './App.css';
import Playlist from './Playlist Component/Playlist';

function App() {
  return (

    //Pass M1 for Model1 and M2 for Model2

    //Model 1 Component Calls

    // <Playlist model='M1' playlist='Angry'/>
    // <Playlist model='M1' playlist='Calm'/>
    // <Playlist model='M1' playlist='Content'/>
    // <Playlist model='M1' playlist='Delighted'/>
    // <Playlist model='M1' playlist='Depressed'/>
    // <Playlist model='M1' playlist='Excited'/>
    // <Playlist model='M1' playlist='Happy'/>
    // <Playlist model='M1' playlist='Sad'/>
    <Playlist model='M1' playlist='Sleepy'/>

    //Model 2 Componet Calls
    // <Playlist model="M2" playlist="Happy"/>
    // <Playlist model="M2" playlist="Sad"/>
    // <Playlist model="M2" playlist="Calm"/>
    // <Playlist model="M2" playlist="Angry"/>
  );
}

export default App;
