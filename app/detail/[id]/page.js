import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
    const params = await props.params;
    const db = (await connectDB).db(process.env.DB_NAME);
    let result = await db
        .collection(process.env.COLLECTION_NAME)
        .findOne({ _id: new ObjectId(params.id) });
    // console.log(props);
    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    );
}