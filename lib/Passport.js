const LocalStrategy = require("passport-local").Strategy;
const userModel = require("./models/UserSchema.js");
const bcrypt = require("bcrypt");

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = await getUserByEmail(email);
    console.log(email);
    if (!user) {
      console.log("false email");
      return done(null, false, {
        message: "No user was found with that email",
      });
    }

    try {
      if (!(await bcrypt.compare(password, user.password)))
        return done(null, false, { message: "Incorrect password" });
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  };
  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });
}

export default initialize();