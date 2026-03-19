import { useState } from "react";
import { postAdd } from "../../api/todoApi";
import ResultModal from "../../components/common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    title: '',
    writer: '',
    dueDate: ''
}

const AddComponent = () => {

    const [todo, setTodo] = useState({ ...initState })

    const handleChangeTodo = (e) => {
        todo[e.target.name] = e.target.value
        setTodo({ ...todo })
    }

    // 결과 데이터가 있는 경우 모달 생성
    const[result, setResult] = useState(null);

    const { moveToList } = useCustomMove();

    const handleClickAdd = () => {
        postAdd(todo)
        .then(result =>{
            console.log(result);
            setResult(result.TNO)
            // 입력데이터 초기화
            setTodo({...initState})
        }).catch(e=>{
            console.log(e)
    })
    }

    const closeModal = () =>{
        setResult(null)
        moveToList();
    }

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">

            {/* 모달 처리 작성 */}
            {
                result?<ResultModal
                    title={'Add Result'}
                    content={`신규 ${result} 추가됨`}
                    callbackFn={closeModal}
                />:<></>
            }

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">
                        TITLE
                    </div>
                    <input
                        className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                        name="title"
                        type="text"
                        value={todo.title}
                        onChange={handleChangeTodo}
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">
                        WRITER
                    </div>
                    <input
                        className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                        name="writer"
                        type="text"
                        value={todo.writer}
                        onChange={handleChangeTodo}
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">
                        DUE DATE
                    </div>
                    <input
                        className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                        name="dueDate"
                        type="date"
                        value={todo.dueDate}
                        onChange={handleChangeTodo}
                    />
                </div>
            </div>

            <div className="flex justify-end p-4">
                <button
                    type="button"
                    onClick={handleClickAdd}
                    className="rounded-md bg-blue-500 px-6 py-2 text-white"
                >
                    ADD
                </button>
            </div>                           
        </div>
    );
}

export default AddComponent;