export default function handler(req, res) {
    // 파라미터는 (요청, 응답)의 순서를 지켜야 함
    // localhost:3000/api/test를 주소창에 입력하는게 '요청'하는 행위
    if (req.method == 'POST') {
        res.status(200).json('POST 요청 처리완료')
    }
    else if (req.method == 'GET') {
        res.status(200).json('GET 요청 처리완료')
    }
}