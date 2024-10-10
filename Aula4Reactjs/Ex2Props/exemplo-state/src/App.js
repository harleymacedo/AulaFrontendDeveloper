import './App.css'
import Post from './components/Post'

function App() {
    return (
        <div className="App">
            <Post pensamento='Pensamento A' cor='silver' />
            <Post pensamento='Pensamento B' cor='yellow' />
            <Post pensamento='Pensamento C' cor='pink' />
            <Post pensamento='Pensamento D' cor='gray' />
        </div>
    )
}

export default App
