import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

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

    const page = getNum(queryParams.get('page'),1)
    const size = getNum(queryParams.get('size'),10)

    const queryDefault = createSearchParams({page,size}).toString()

    // 상세 페이지 이동
    const moveToRead = (num)=>{
        console.log(queryDefault)
        navigate({
            pathname:`../read/${num}`,
            search:queryDefault
        })
    }

    const moveToList = (pageParam) =>{
        let queryStr = ""

        if(pageParam){
            const pageNum = getNum(pageParam.page, 1)
            const sizeNum = getNum(pageParam.size, 10)

            queryStr = createSearchParams({page:pageNum, size:sizeNum}).toString();
        } else{
            queryStr = queryDefault
        }
        navigate({pathname:`../list`, search:queryStr})
    }

    const moveToModify = (num)=>{
        navigate({
            pathname:`../modify/${num}`,
            search:queryDefault
        })
    }

    return {moveToList,moveToModify,moveToRead,page,size}
}

export default useCustomMove;