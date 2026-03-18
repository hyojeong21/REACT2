import { lazy,Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import todoRouter from "./todoRouter";

// lazy 컴포넌트가 로딩되는 동안 보여줄 화면
const Loading = <div>Loading..</div>
// lazy: 필요할 때 컴포넌트 로딩
// lazy 방식으로 하면 해당 페이지로 이동할 때만 로딩돼서 초기 로딩 속도 빨라짐
const Main = lazy(()=>import("../pages/MainPage"))
const About = lazy(()=>import("../pages/About"))
const TodoIndex = lazy(()=>import("../pages/todo/IndexPage"))
const TodoList = lazy(()=>import("../pages/todo/ListPage"))

// 라우터 배열을 전달함. 각 객체가 하나의 경로(path)임
const root = createBrowserRouter([
    {
   // 기본 경로
        path:"",
   // element: 화면에 보여줄 컴포넌트, Suspense: 로딩 중 화면 표시, fallback: 대체 화면(로딩 중에 대신 보여줄 UI)
        element:<Suspense fallback={Loading}><Main /></Suspense>
    },
    {
        path:"about",
        element:<Suspense fallback={Loading}><About /></Suspense>
    },
    {
        path:"todo",
        element:<Suspense fallback={Loading}><TodoIndex/></Suspense>,
   // todoRouter(): /todo 하위 라우트들을 todoRouter.js 파일에서 따로 관리
        children: todoRouter()
    },
])

export default root;