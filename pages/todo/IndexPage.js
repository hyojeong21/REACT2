import { Outlet, useNavigate } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";
import { useCallback } from "react";

const IndexPage = () => {
    // 링크 등을 이용하는 대신, useNavigate()를 이용해서 페이지 링크 처리를 한다
    // 훨씬 효율적으로 이동이 가능하다

    const navigate = useNavigate();

    const handleClickList = useCallback(()=>{
        navigate({pathname:'list'})
    })

    const handleClickAdd = useCallback(()=>{
        navigate({pathname:'add'})
    })

    return (
        <BasicLayout>
            <div className="w-full flex m-2 p-2">
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline" onClick={handleClickList}>
                    LIST
                </div>
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline" onClick={handleClickAdd}>
                    ADD
                </div>
            </div>

            <div className="flex flex-wrap w-full">
                <Outlet />
            </div>
        </BasicLayout>
    );
};

export default IndexPage;