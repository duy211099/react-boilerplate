import './App.css'
import { Center } from '@mantine/core'

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Center style={{width: 400, height: 200}}>
          <div>All elements inside Center are centered</div>
        </Center>
    </div>
  )
}

export default App
