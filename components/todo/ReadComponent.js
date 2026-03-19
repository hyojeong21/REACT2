// 백엔드에서 데이터 가져와서 화면에 출력 + 페이지 이동

import { useEffect, useState } from "react"
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

// 초기 상태 ( 처음에는 데이터가 없기 때문에. 기본 구조를 미리 만들어둠)
const initState = {
    tno: 0,
    title: '',
    writer: '',
    dueDate: null,
    complete: false
}

// 컴포넌트 시작
// 부모 컴포넌트에서 tno를 전달받음
const ReadComponent = ({ tno }) => {
    // 상태 선언. todo → 현재 데이터, setTodo → 데이터 변경 함수
    const [todo, setTodo] = useState(initState); // 초기화 및 상태 관리자 선언

    // 페이지 이동 함수
    // 버튼 클릭 시 페이지 이동. moveToList() → 목록 페이지, moveToModify() → 수정 페이지
    const{moveToList, moveToModify} = useCustomMove();
 
    // 데이터 가져오기
    useEffect(() => {
        // getOne(tno) 호출 -> 응답 받음
        getOne(tno).then(data => {
            console.log(data);
            // 상태 업데이트. todo 값 변경 → 자동 리렌더링
            setTodo(data);
        })
    }, [tno])   // tno가 바뀔 때마다 실행

    // UI 렌더링
    // makeDiv: 화면 출력
    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {makeDiv('Tno', todo.tno)}
            {makeDiv('Writer', todo.writer)}
            {makeDiv('Title', todo.title)}
            {makeDiv('Due Date', todo.dueDate)}
            {makeDiv('Complete', todo.complete ? 'Completed' : 'Not Yet')}

            <div className = "flex justify-end p-4">
                <button
                    type="button"
                    className="rounded p-4 m-2 text-xl w-32 text-white bg-green-500"
                    onClick={()=> moveToModify(todo.tno)}
                >
                    MODIFY
                </button>
                <button
                    type="button"
                    className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                    onClick={()=> moveToList()}
                    >
                    LIST
                </button>
            </div>
        </div>
    );
}

const makeDiv = (title, value) => (
    <div className="grid grid-cols-1 md:grid-cols-3 items-start md:items-center mb-4 gap-2">
        <div className="p-2 md:p-4 font-bold text-gray-800">{title}</div>

        <div className="md:col-span-2 p-3 md:p-4 rounded border border-solid shadow-md bg-white/10 min-h-[48px] break-words">
            {value}
        </div>
    </div>
);

export default ReadComponent;