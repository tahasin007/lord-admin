import TopBar from './components/TopBar/TopBar'
import SideBar from './components/SideBar/SideBar'
import Home from './pages/Home/Home'
import './App.scss'
import { Switch, Route } from 'react-router-dom'
import Employees from './pages/Employees/Employees'
import AddEmployee from './pages/AddEmployee/AddEmployee'
import UploadFile from './pages/UploadFile/UploadFile'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <TopBar />

      <div className='content-wrapper'>
        <SideBar className='side-bar' />

        <div className='main-content'>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/employees' exact component={Employees}></Route>
            <Route path='/addemployees' exact component={AddEmployee}></Route>
            <Route path='/uploadcsv' exact component={UploadFile}></Route>
          </Switch>
        </div>
      </div>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
      />
    </>
  )
}

export default App
