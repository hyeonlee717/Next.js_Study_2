import { connectDB } from "@/util/database";

export default async function listApi(req, res) {
    if (req.method !== 'GET')
        return res.status(405).end();
    try {
        const db = (await connectDB).db(process.env.DB_NAME)
        const result = await db
            .collection(process.env.COLLECTION_NAME)
            .find()
            .toArray()
        res.status(200).json(result)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "DB 조회 실패" })
    }

}

// await connectDB에 괄호가 들어가지 않으면
// connectDB가 없는데
// 자바스크립트가 connectDB.db(...)을 실행하려고 하기 때문
// 그래서 connectDB를 먼저 기다려야하기때문에 (await connectDB)
// 그래서 db변수가 이제 확정됐으니까 그 밑에줄에서는
// await db에는 괄호 사용 x
// toArray()가 비동기 메서드라서
// (db.collection(...).find().toArray()는 promise)를 반환하는데
// await로 이 결과 값을 받아야만 result를 array로 출력가능