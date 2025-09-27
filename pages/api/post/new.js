import { connectDB } from "@/util/database"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        // console.log(req.body)
        const db = (await connectDB).db(process.env.DB_NAME)
        const result = await db
            .collection(process.env.COLLECTION_NAME)
            .insertOne(req.body)
        return res.status(200).redirect('/list')

    }
}