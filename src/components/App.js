import React,{ Component} from 'react'
import '../assets/global.css'
import Header from './Header'
import Course from './Course'

 class App extends Component {
  render () {
   return (
    <div className='App'>
         <Header />
         <Course />
    </div>
    )
 }
}
export default App