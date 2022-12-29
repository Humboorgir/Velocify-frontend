import MongoConnect from "../../lib/MongoConnect";
import userModel from "../../models/userSchema";
import bcrypt from "bcrypt";
export default async function handler(req, res) {
  if (req.method === "POST") {
    // if password doesn't match confirm password, return an error
    if (req.body.password !== req.body.confirmPassword) {
      let data = {
        ok: false,
        content: "Passwords don't match",
      };
      let Data = await JSON.stringify(data);
      res.status(200).send(Data);
      return;
    }
    let password = await bcrypt.hash(req.body.password, 10);
    await MongoConnect();
    let data = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: password,
      id: Math.random(),
    });
    await data.save();
    if (await bcrypt.compare(req.body.password, password)) console.log("True");
    let response = {
      ok: true,
      content: `Account saved`,
    };
    let Response = await JSON.stringify(response);
    res.status(200).send(Response);
  }
}
