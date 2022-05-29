import "./App.css"
import Page1 from "./Page1"
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import UserProfile from "./userProfile"
function App(){
  return(
    <Router>
    <Routes>
    <Route exact path='/' element={<Page1/>} />
    <Route exact path='/user/:id' element={<UserProfile/>} />
    </Routes>
    </Router>
  )
}
export default App