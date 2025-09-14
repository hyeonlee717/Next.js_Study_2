'use client'

import { useRouter } from "next/navigation";

export default function DetailLink() {
    let router = useRouter();
    // useRouter()은 리액트 훅(Hook)으로 리액트의 상태 관리, 생명주기기능 등을 사용하게 해주는 특별한 함수임
    // 반드시 컴포넌트 최상위에서 호출되어야하는 규칙이 존재함
    // 따라서, onClick같은 이벤트 핸들러가 클릭될 때 실행되기 위해서는 핸들러 안에서 정의되는게 아니라
    // 미리 상단에 정의해놓고 사용하는 것으로 해야함
    // 추가적으로 컴포넌트 최상위에서 선언된 router 변수는 DetailLink 함수 컴포넌트가 렌더링되는 동안 계속 존재함
    // 이는 자바스크립트의 고유 기능인 클로저(Closure) 기능이 작동하기 때문임
    // 그렇기 때문에 onClick={function () { useRouter().back() }} 이런식으로 작성하면 안됨
    return (
        <button onClick={function () { router.back() }}>버튼</button>
        // router에는 back() prefetch() forward() 등 다양한 기능 존재
    );
}