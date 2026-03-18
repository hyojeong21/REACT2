import { useCallback } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () =>{
    // useParams()를 이용한 파라미터 get..
    const {tno} = useParams();

    // 페이지 이동 함수
    const navigate = useNavigate();

    // 쿼리 스트링으로 전달된 프라미터는 useSearchParams()로 얻어내고, 
    // createSearchParams()를 이용해서 router 함수를 통해 modify/xx로 필요시 쿼리 스트링을 전달해주도록 작성한다

    // 쿼리 파라미터 가져오기
    const[queryParams] = useSearchParams();
    // 값 꺼내기. 없으면 기본값 (page -> 1, size -> 10)
    const page = queryParams.get("page")?parseInt(queryParams.get("page")):1;
    const size = queryParams.get("size")?parseInt(queryParams.get("size")):10;

    // 쿼리 문자열 생성
    const queryStr = createSearchParams({page,size}).toString()
    
    // 수정 페이지로 이동하는 역할
    const movetoModify = useCallback((tno)=>{
        navigate({
            pathname:`/todo/modify/${tno}`,
       // 쿼리 유지
            search:queryStr
        })
    },[tno,page,size])   // 이 값들이 바뀔 때만 함수를 다시 만듦

    // 리스트 페이지로 이동하는 역할
    const movetoList = useCallback(()=>{
        navigate({pathname:`/todo/list`, search:queryStr})
    },[page,size])

    return(
        <div className="text-3xl font-extrabold">
            Todo Read Page component  {tno}
            <div>
                <button onClick={()=>movetoModify(33)}>Test Modify</button>

                <button onClick={()=>movetoList()}>Test List</button>

                <ReadComponent tno={tno}></ReadComponent>
            </div>
        </div>
    );
}

export default ReadPage;