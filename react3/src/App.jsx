
import './App.css'
import CompoundComp from './components/compondComp'
import Game from './components/game'
import ReverseGame from './components/reverseGame'
import NestedComments from './components/nestedcomments'
import commentsData from './data/comment.json'

function App() {
// console.log(commentsData)

  return (
    <>
    <Game/>
    <ReverseGame/>
    <CompoundComp/>
    <div>
      <h1>Nested Comment system</h1>
      <NestedComments comments = {commentsData}
      onSubmit={(content)=>{}}
      onEdit={(content)=>{}}
      onDelete={()=>{}}
      onUpvote={()=>{}}
      onDownvote={()=>{}}

      />
    </div>
    </>
  )
}

export default App
