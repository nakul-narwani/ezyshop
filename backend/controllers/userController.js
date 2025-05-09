import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userModel from "../models/userModel.js";
import { sendEmail } from "../utils/sendEmail.js"; // <- import added

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does not exists" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);

      // Send login notification
      await sendEmail(
        user.email,
        "Login Notification - EzyShop",
        "You have successfully logged in to your EzyShop account.",
        `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <p>Hello ${user.name},</p>
            <p>We're confirming that you successfully logged in to your EzyShop account.</p>
            <p>If this wasn't you, please change your password immediately.</p>
            <p>Thanks,<br><strong>EzyShop Security Team</strong></p>
            <img src="https://res.cloudinary.com/dpiabzkdj/image/upload/v1746765836/kr8wu5y5fcureoemakk6.png" alt="EzyShop Logo" style="width: 100px; margin-bottom: 20px;" />
          </div>
        `
      );

      res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};

// Route for user register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({ name, email, password: hashedPassword });
    const user = await newUser.save();

    const token = createToken(user._id);

    // Send welcome email
    await sendEmail(
      user.email,
      "Welcome to EzyShop",
      "Thanks for registering with EzyShop!",
      `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; text-align: center;">
        <h2 style="color: #4CAF50;">Welcome to EzyShop, ${name}!</h2>
        <p>We're thrilled to have you on board. Here's what you can look forward to:</p>
        <ul style="text-align: left; display: inline-block; margin: 0 auto;">
        <li>✅ Exclusive fashion deals every week</li>
        <li>✅ Fast and secure checkout</li>
        <li>✅ Top-rated customer support</li>
        </ul>
        <p>Start shopping now and enjoy the latest trends at unbeatable prices.</p>
        <p>Best Regards,<br><strong>The EzyShop Team</strong></p>
        <img src="https://res.cloudinary.com/dpiabzkdj/image/upload/v1746765836/kr8wu5y5fcureoemakk6.png" alt="EzyShop Logo" style="width: 100px; margin-bottom: 20px;" />
        </div>
      `
    );

    res.json({ success: true, token });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};

// Route for Admin login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};
