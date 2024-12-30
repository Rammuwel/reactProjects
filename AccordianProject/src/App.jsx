
import './App.css'
import Accordian from './components/Accondian'
import ModelTest from './components/CustemModelPopup/ModelTest'
import TabTest from './components/custom-tab/tab-test'
import GithubProfileFinder from './components/GitHubProfileFinder'
import ImageSlider from './components/imageSlider'
import LightDarkMode from './components/LightDarkMode'
import LoadMoreData from './components/LoadMoreData'
import QRCode from './components/QRCode'
import RandomColor from './components/randomColor'
import ScrollIndicator from './components/ScrollIndicator'
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
     <QRCode/>
     <LightDarkMode/>
     <TabTest/>
     <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
     <ModelTest/>
     <GithubProfileFinder/>

   </div>
  ) 
}

export default App
