import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import routes from "./routes";
import { githubLoginCallback, facebookLoginCallback } from "./controllers/userController";
// import dotenv from "dotenv";
// import path from "path";

// require('dotenv').config({ path: path.join(__dirname, "src/.env") });
// require('dotenv').config();
// dotenv.config({ path: path.join(__dirname, "src/.env") });
// dotenv.config();

console.log(process.env);

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy({
    // clientID: "59d44893c2af94fbd3e4",
    // clientSecret: "c0389933d41f49c0d3a36b80525092f9e1dfc3e8",
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `http://localhost:4000${routes.githubCallback}`
  },
    githubLoginCallback
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: "651755138781006",
      clientSecret: "7fa2d736e2c8f20fd4a7cad2b985a7d3",
      callbackURL: `http://localhost:4000${routes.facebookCallback}`,
      profileFields: ["id", "displayName", "photos", "email"],
      scope: ["public_profile", "email"]
    },
    facebookLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
