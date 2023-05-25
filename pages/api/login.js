export default async function handler(req, res) {
  if (req.method === "GET") {
    console.log(req.cookies);
    return res.status(200).send("test");
  }
}
