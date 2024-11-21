
import './App.css'

function App() {

  return (
    <>
    <div> This is a Vite-React app used for netlify deployment testing purpose. </div>
    <h2>Coder Name - {import.meta.env.VITE_USERNAME}</h2>
    <p>.env added & its not visible haha</p>
    </>
  )
}

export default App
