import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {

    const db = (await connectDB).db(process.env.DB_NAME);
    let result = await db.collection(process.env.COLLECTION_NAME).find().toArray();
    result.forEach(function (a) {
        console.log(a._id.toString());
    });

    return (
        <div className="list-bg">
            {result.map(function (a, i) {
                return (
                    <div className="list-item" key={a._id.toString()}>
                        <Link href={"detail/" + a._id.toString()}>
                            <h4>{a.title}</h4>
                        </Link>
                        <p>{a.content}</p>
                    </div>
                );
            })}
        </div>
    )
}