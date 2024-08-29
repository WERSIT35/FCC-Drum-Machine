import './App.css'
import { AudioClip } from './types'
import Drum from './Drum'


const audioclip: AudioClip[]=[
  {
    keyTrigger:'Q',
    url:'http://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    description:'Heater 1',
  },
  {
    keyTrigger:'W',
    url:'http://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    description:'Heater 2',
  },
  {
    keyTrigger:'E',
    url:'http://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    description:'Heater 3',
  },
  {
    keyTrigger:'A',
    url:'http://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    description:'Heater 4',
  },
  {
    keyTrigger:'S',
    url:'http://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    description:'Clap',
  },
  {
    keyTrigger:'D',
    url:'http://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    description:'Open HH',
  },
  {
    keyTrigger:'Z',
    url:'http://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    description:"Kick n' Hat",
  },
  {
    keyTrigger:'X',
    url:'http://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    description:'Kick',
  },
  {
    keyTrigger:'C',
    url:'http://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    description:'Closed HH',
  },
]
function App() {
  const playAudio = (e:React.KeyboardEvent<HTMLDivElement>) =>{
    const clip = audioclip.find((clip)=>clip.keyTrigger === e.key.toUpperCase());
    if(!clip) return;
      (
       document.getElementById(clip.keyTrigger) as HTMLAudioElement
      ).play().catch(console.error);


      document.getElementById("drum-"+clip.keyTrigger)?.focus();
      document.getElementById("display")!.innerText = clip.description;
   }

  return (
    <div className="container" id="drum-machine" onKeyDown={playAudio}>
      <h1>FCC Drum Machine</h1>
      <div className="whole-drum">
        {audioclip.map((clip)=>(
          <Drum key={clip.keyTrigger} audioClip={clip} />//
        ))}
      </div>
      <div id="display">

      </div>
    </div>
  );
}

export default App
