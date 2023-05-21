import { PrincipalLayout } from './layout'
import { About, Home, Advertisement, Contact } from './pages'
import { Detail } from './pages/Detail'

function App() {

  return (
    <PrincipalLayout>
      {/* <Loader/> */}
      <Home/>
      <About/>
      <Advertisement/>
      <Detail/>
      <Contact/>
    </PrincipalLayout>
  )
}

export default App
