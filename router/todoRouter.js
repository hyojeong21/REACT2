import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom";

const Loading = <div>Loading..</div>
const TodoList = lazy(()=>import("../pages/todo/ListPage"))
const TodoRead = lazy(()=>import("../pages/todo/ReadPage"))
const TodoAdd = lazy(()=>import("../pages/todo/AddPage"))
const TodoModify = lazy(()=>import("../pages/todo/ModifyPage"))

// 함수를 이용해서 라우트 배열을 반환하는 구조
// todo 관련 하위 라우트들을 반환하는 함수
const todoRouter=()=>{
    return[
        {
            path: "list",
            element: <Suspense fallback={Loading}><TodoList /></Suspense>
        },
        {
            path: "",
       // Navigate는 강제 이동(리다이렉트) 시키는 컴포넌트임 (다른 경로로 자동 이동 시킴)
       // path: "" 이거는 부모 경로 그대로라는 뜻으로, 
       // 여기서는 /todo인데, /todo로 들어오면 자동으로 /todo/list로 보내겠다는 의미
       // replace: 현재 URL을 교체, 히스토리에 남지 않음
            element: <Navigate replace to="list" />
        },
        {
            path: "read/:tno",
            element: <Suspense fallback={Loading}><TodoRead /></Suspense>
        },
        {
            path: "add",
            element: <Suspense fallback={Loading}><TodoAdd /></Suspense>
        },
        {
            path: "modify/:tno",
            element: <Suspense fallback={Loading}><TodoModify /></Suspense>
        },
    ];
}

export default todoRouter;