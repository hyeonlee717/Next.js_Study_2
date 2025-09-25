import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {

    const db = (await connectDB).db(process.env.DB_NAME);
    let result = await db.collection(process.env.COLLECTION_NAME).find().toArray();
    // result.forEach(function (a) {
    //     console.log(a._id.toString());
    // });

    return (
        <div className="list-bg">
            {result.map(function (a, i) {
                return (
                    <div className="list-item" key={a._id.toString()}>
                        <Link prefetch={false} href={"detail/" + a._id.toString()}>
                            <h4>{a.title}</h4>
                        </Link>
                        {/* Link 태그는 자동적으로 prefetch 기능이 작동함. */}
                        <DetailLink />
                        <p>{a.content}</p>
                    </div>
                );
            })}
        </div>
    )
}