
import './App.css'
import Accordian from './components/Accondian'
import RandomColor from './components/randomColor'
import StartRatting from './components/StarRatting'

function App() {


  return (
   <div>
     <Accordian/>
     <RandomColor/>
     <StartRatting noOfStars={5}/>

   </div>
  )
}

export default App
