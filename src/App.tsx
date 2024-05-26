import Home from './pages/Dashboard'
import{store} from'./redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store} >
    <Home/>
    </Provider>
  )
}

export default App
