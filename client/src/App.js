import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// IMPORT COMPONENTS
import Main from './Components/Main';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import { ChechUserExists } from './helper/helper';


// ROUTES
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <ChechUserExists><Quiz/></ChechUserExists> 
  },
  {
    path: '/result',
    element: <ChechUserExists><Result/></ChechUserExists>
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
