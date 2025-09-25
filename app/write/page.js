export default function Write() {
    return (
        <div>
            <h4>글작성</h4>
            {/* url과 method를 기재하여 서버에 요청 */}
            <form action="/api/test" method="POST">
                {/* action에 적힌 url로 POST 요청 */}
                <button type="submit">버튼</button>
            </form>
        </div>
    );
}