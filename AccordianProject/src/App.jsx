
import './App.css'
import Accordian from './components/Accondian'
import ImageSlider from './components/imageSlider'
import LoadMoreData from './components/LoadMoreData'
import RandomColor from './components/randomColor'
import StartRatting from './components/StarRatting'
import TreeView from './components/TreeView'
import {menus} from './components/TreeView/data'

function App() {


  return (
   <div>
     <Accordian/>
     <RandomColor/>
     <StartRatting noOfStars={5}/>
     <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}/>
     <LoadMoreData/>
     <TreeView menus={menus}/>

   </div>
  ) 
}

export default App
