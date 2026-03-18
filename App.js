import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import root from './router/root';

// App은 앱의 최상위 컴포넌트임. 여기서는 라우터를 전체 앱에 연결하는 역할을 함
function App() {
  return(
    // 라우터를 제공해주는 애를 선언해서, 라우팅 준비
    // "이 앱에서 사용할 라우터는 root야" 라는 의미
    <RouterProvider router={root}></RouterProvider>
  ); 
}

export default App;