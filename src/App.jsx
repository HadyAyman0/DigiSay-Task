import './App.css'
import Home from './Pages/Home/Home'
import { Provider } from 'react-redux'
import { MyStore } from './App/Store'
import { NavbarSimple } from './Components/NavbarSimple/NavbarSimple'
function App() {
  return (
    <>
      <Provider store={MyStore}>
      <section className='bg-black min-h-[100vh]'>
      <NavbarSimple/>
      <Home/>
      </section>
      </Provider>
    </>
  )
}

export default App
