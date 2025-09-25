export default function dateHandler(req, res) {
    let now = new Date();
    res.status(200).json(now)
}