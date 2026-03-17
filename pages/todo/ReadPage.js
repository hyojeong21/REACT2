import { useCallback } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

const ReadPage = () =>{
    // useParams()를 이용한 파라미터 get..
    const {tno} = useParams();

    const navigate = useNavigate();

    // 쿼리 스트링으로 전달된 프라미터는 useSearchParams()로 얻어내고, 
    // createSearchParams()를 이용해서 router 함수를 통해 modify/xx로 필요시 쿼리 스트링을 전달해주도록 작성한다
    const[queryParams] = useSearchParams();
    const page = queryParams.get("page")?parseInt(queryParams.get("page")):1;
    const size = queryParams.get("size")?parseInt(queryParams.get("size")):10;

    const queryStr = createSearchParams({page,size}).toString()

    const movetoModify = useCallback((tno)=>{
        navigate({
            pathname:`/todo/modify/${tno}`,
            search:queryStr
        })
    },[tno,page,size])

    const movetoList = useCallback(()=>{
        navigate({pathname:`/todo/list`, search:queryStr})
    },[page,size])

    return(
        <div className="text-3xl font-extrabold">
            Todo Read Page component  {tno}
            <div>
                <button onClick={()=>movetoModify(33)}>Test Modify</button>

                <button onClick={()=>movetoList()}>Test List</button>
            </div>
        </div>
    );
}

export default ReadPage;