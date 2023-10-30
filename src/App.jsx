
import './App.css'
import MovieList from './components/MovieList'

const movie = [
  {
    title: 'The Matrix',
    description: 'Info about the movie...'
  },
  {
    title: 'The ONe',
    description: 'Info about the movie2...'
  }
]

function App() {

  return (
    <>
    <h1>Testing demo react vite</h1>
<MovieList headingText='Movie List' secondaryText='Secoundary Text' />
<MovieList>Foafsa</MovieList>
    </>
  )
}

export default App
