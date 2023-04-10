import User from "../model/userSchema.js";

export const userSignup = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(401).json({ message: "You already have an account." });
    }

    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    res.status(200).json({ message: userDetails });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const userLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    let user = await User.findOne({ email: email, password: password });
    if (user) {
      return res.status(200).json({ data: user });
    } else {
      return res.status(401).json(`User not found, please signup instead`);
    }
  } catch (error) {
    res.status(500).json(`Error:`, error.message);
  }
};
