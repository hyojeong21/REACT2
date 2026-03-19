import { useNavigate, useParams } from "react-router-dom";
import ModifyComponent from "../../components/ModifyComponent";

const ModifyPage = () => {
    const { tno } = useParams();
    const navigate = useNavigate();
    const moveToRead = () => {
        navigate({ pathname: `/todo/read/${tno}` })
    }
    const moveToList = () => {
        navigate({ pathname: `/todo/list` })
    }

    return (
        <div className="text-3xl font-extrabold">
            Todo Modify Page
            <ModifyComponent
                tno={tno}
                moveList={moveToList}
                moveRead={moveToRead}
            />
        </div>
    );
}

export default ModifyPage;