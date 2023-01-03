import React from 'react'
import './Home.css'
// import 'react-profile-avatar/dist/index.css'
// import HorizontalLinearStepper from './Components/Stepper'
import ButtonAppBar from './Components/Navbar'
import HorizontalLinearStepper from './Components/Stepper'
import { Button, Link } from '@mui/material'
// import { Button } from '@mui/material'
// import { Downloading } from '@mui/icons-material'

function App() {
  // const button = {
  //   textTransform: 'lowercase',
  //   color: 'white',
  //   backgroundColor: '#FFB703'
  // }
  return (
    <>
      <ButtonAppBar />
      <div className='container-fluid'>

        <div className='form'>
          {/* <HorizontalLinearStepper/> */}
          <p>
          Hey!!! I'm Ruphin, Junior Web Developer and I want to share this portfolio with you. You will find my soft kills and many other suprise.
          </p>
           <Button download="./Docs/Cv Ruphin.pdf" variant="outlined"><Link target="_blank" href="./Docs/Cv Ruphin.pdf" underline="none">Download Cv </Link></Button> 
          
        </div>
        <div className='img'>
          <img src="./img.svg" alt='img' width={500} />
        </div>
      </div>
    </>
  )
}

export default App