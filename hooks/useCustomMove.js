import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

// 문자열을 숫자로 변환 + 기본값 처리
// URL에서 가져온 값은 항상 문자열이라서 변환해야 함
const getNum = (param, defaultValue) =>{
    if(!param){
        return defaultValue
    }
    return parseInt(param)
}

const useCustomMove = () => {
    // 이동을 해야 하니까 Nevigate 생성
    const navigate = useNavigate();
    // 파라미터 정보 저장
    const[queryParams] = useSearchParams();

    // page, size 추출. page 없으면 → 1, size 없으면 → 10
    const page = getNum(queryParams.get('page'),1)
    const size = getNum(queryParams.get('size'),10)

    // 페이지 이동할 때 현재 상태 유지
    const queryDefault = createSearchParams({page,size}).toString()

    // 상세 페이지 이동
    const moveToRead = (num)=>{
        console.log(queryDefault)
        navigate({
            pathname:`/todo/read/${num}`,
            search:queryDefault
        })
    }

    // 목록 이동
    const moveToList = (pageParam) =>{
        // 기본 구조
        let queryStr = ""

   // pageParam 있을 때 직접 페이지 지정 가능
        if(pageParam){
            const pageNum = getNum(pageParam.page, 1)
            const sizeNum = getNum(pageParam.size, 10)

            queryStr = createSearchParams({page:pageNum, size:sizeNum}).toString();
   // pageParam 없을 때 현재 상태 유지
        } else{
            queryStr = queryDefault
        }
   // 최종 이동
        navigate({pathname:`../list`, search:queryStr})
    }

    // 수정 페이지 이동
    // 수정 후 다시 목록으로 돌아갈 때 페이지 유지 가능
    const moveToModify = (num)=>{
        navigate({
            pathname:`/todo/modify/${num}`,
            search:queryDefault
        })
    }

    return {moveToList,moveToModify,moveToRead,page,size}
}

export default useCustomMove;