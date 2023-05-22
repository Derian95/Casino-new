import { NavBarMobile } from './components/ui/NavBarMobile'
import { About, Home, Advertisement, Contact } from './pages'

function App() {

  return (
    <>
      {/* <Loader/> */}
      <NavBarMobile/>
      <Home/>
      <About/>
      <Advertisement/>
      <Contact/>
    </>
  )
}

export default App
