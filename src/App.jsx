import { Button } from '@chakra-ui/react'
import { Provider } from "@/components/ui/provider"
import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode"
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './Layouts/PageLayout/PageLayout';
import ProfilePage from './pages/ProfilePage/ProfilePage';



function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = {
    styles: {
      global: {
        body: {
          bg: colorMode === 'light' ? 'gray.100' : 'gray.800',
          color: colorMode === 'light' ? 'gray.800' : 'whiteAlpha.900',
        },
      },
    },
    // colors: { 
    //   brand: {
    //     100: '#f0e7db', // Example Brand Color
    //     500: '#a08877',
    //   },
    // },
  };

  return (
    <Provider>
      <PageLayout>

        <Routes>
          <Route path='/' element= {<HomePage />} />
          <Route path='/auth' element= {<AuthPage />} />
          <Route path='/:username' element= {<ProfilePage />} />
        </Routes>

      </PageLayout>
    </Provider>
  )
}

export default App
