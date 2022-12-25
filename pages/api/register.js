// import MongoConnect from "../../lib/MongoConnect";
// import userModel from "../../models/userSchema";
// import bcrypt from "bcrypt";
export default async function handler(req, res) {
  // pdm : password doesn't match
  if (req.method === "POST") {
    // if (req.body.password !== req.body.confirmPassword)
    //   return res.status(404).json({ ok: false, error: "pdm" });
    // let password = await bcrypt.hash(req.body.password, 10);
    // await MongoConnect();
    // let data = new userModel({
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: password,
    //   id: Math.random(),
    // });
    // await data.save();
    // if (bcrypt.compare(req.body.password, password)) console.log("True");
    if (req.body.password !== req.body.confirmPassword) {
      let data = {
        ok: false,
        content: "Passwords don't match",
      };
      let Data = await JSON.stringify(data);
      res.status(200).send(Data);
      return;
    }
    console.log(req.body);
    let data = {
      ok: true,
      content: `Account saved`,
    };
    let Data = await JSON.stringify(data);
    res.status(200).send(Data);
  }
}
