
import './App.css'
import Accordian from './components/Accondian'
import ImageSlider from './components/imageSlider'
import RandomColor from './components/randomColor'
import StartRatting from './components/StarRatting'

function App() {


  return (
   <div>
     <Accordian/>
     <RandomColor/>
     <StartRatting noOfStars={5}/>
     <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}/>

   </div>
  ) 
}

export default App
