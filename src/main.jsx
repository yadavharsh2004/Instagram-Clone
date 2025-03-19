import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "@/components/ui/provider"
import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode"
import { BrowserRouter } from 'react-router-dom'


// import {extendTheme} from '@chakra-ui/react'
// import { mode } from '@chakra-ui/theme-tools'
// const styles = {
//   global: (props)=>({
//     body:{
//       bg: mode("gray.100", "#000")(props),
//       color: mode("gray.800", "whiteAlpha.900")(props)
//     }
//   })
// }
// const config = {
//   initialColorMode: 'dark',
//   useSystemColorMode: false,
// }
// const theme = extendTheme({config, styles})



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </StrictMode>,
)
