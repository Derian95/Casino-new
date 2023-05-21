import { PrincipalLayout } from './layout'
import { About, Home, Advertisement, Contact } from './pages'

function App() {

  return (
    <PrincipalLayout>
      <Home/>
      <About/>
      <Advertisement/>
      <Contact/>
    </PrincipalLayout>
  )
}

export default App
