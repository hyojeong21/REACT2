import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import root from './router/root';

function App() {
  return(
    // 라우터를 제공해주는 애를 선언해서, 라우팅 준비
    <RouterProvider router={root}></RouterProvider>
  ); 
}

export default App;