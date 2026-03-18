import { useEffect, useState } from "react"
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    tno: 0,
    title: '',
    writer: '',
    dueDate: null,
    complete: false
}

const ReadComponent = ({ tno }) => {
    const [todo, setTodo] = useState(initState); // 초기화 및 상태 관리자 선언

    const{moveToList, moveToModify} = useCustomMove();

    useEffect(() => {
        getOne(tno).then(data => {
            console.log(data);
            setTodo(data);
        })
    }, [tno])

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
                    onClick={()=> moveToModify()}
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