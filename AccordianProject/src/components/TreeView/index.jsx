import React from 'react'
import MenuList from './MenuList'
import './style.css'

function TreeView({menus = []}) {
  return (
    <div className='treeView'>
        <div className='heading'>
           <h2>Tree View</h2> 
        </div>
        <div className='tree-view-container'>
         <MenuList list={menus}/> 
        </div>
    </div>
  )
}

export default TreeView