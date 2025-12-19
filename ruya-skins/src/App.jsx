import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cartonas from './components/cartonas'

function App() {
  const [count, setCount] = useState(0)

const cartonase = [
  {
    title: "BLABLABLABLA",
    description: "We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant."
  },
  {
    title: "Parking Space",
    description: "Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant."
  }
]

  return (
    <>

{cartonase.map((cartonas, index) => (
  <Cartonas 
    key={index}
    title={cartonas.title}
    description={cartonas.description}
  />
))}

    </>
  )
}

export default App
