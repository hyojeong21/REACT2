// 백엔드랑 연결하는 파일
// 백단 서버와 ajax 통신을 할 수 있는 모듈을 설계함
// 먼저, 하나의 Todo 항목과 List를 얻어내도록 요청한다

// axios: HTTP 요청 보내는 라이브러리
import axios from "axios"

// 하나의 모듈에서 여러 개의 컴포넌트를 export할 때는 export 컴포넌트명으로 정의한다
// API_SERVER_HOST: 백엔드 서버 주소
export const API_SERVER_HOST='http://localhost'
// prefix: 모든 API의 기본 경로
const prefix = `${API_SERVER_HOST}/api/todo`

// 수정 모듈
export const putOne = async (todo) => {
    const res = await axios.put(`${prefix}/${todo.tno}`, todo);
    return res.data;
};

// 삭제 모듈
export const deleteOne = async (tno) => {
    const res = await axios.delete(`${prefix}/${tno}`);
    return res.data;
};

// 등록 모듈 작성
export const postAdd = async (todoObj)=>{
    const res = await axios.post(`${prefix}/`, todoObj)
    return res.data
}

// 특정 Todo 하나 조회
export const getOne = async (tno) =>{
    // 글번호 tno를 받아서 ajax로 백단 서버에 데이터 요청한다
    // 이때 사용하는 api가 axio.get, post, put 등의 메서드이다
    // async를 사용했기 때문에 반드시 await을 통해 서버에 요청하고 결과를 받아낸다
    // axios.get: 서버에 GET 요청
    const res = await axios.get(`${prefix}/${tno}`)

    // 데이터만 반환
    return res.data;
}

// 목록 조회 + 페이징
export const getList = async(pageParam)=>{
    // 구조 분해
    const{page,size} = pageParam

    // GET 요청 + 쿼리 파라미터
    const res = await axios.get(`${prefix}/list`,{params:{page:page,size:size}})

    // 응답 반환
    return res.data;
}