import { connectDB } from "@/util/database";

export default async function List() {

    const db = (await connectDB).db(process.env.DB_NAME);
    let result = await db.collection(process.env.COLLECTION_NAME).find().toArray();
    // 데이터 가져오기
    // console.log(result[0].title);

    return (
        <div className="list-bg">
            {result.map(function (a, i) {
                return (
                    <div className="list-item" key={a._id.toString()}>
                        <h4>{a.title}</h4>
                        <p>{a.content}</p>
                    </div>
                );
            })}
        </div>
    )
} 