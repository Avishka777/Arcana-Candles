import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import validator from 'validator';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
  const { firstName, lastName, userName, email, address, mobile, password, isAdmin } = req.body;

  if (
    !firstName || !lastName || !userName || !email || !address || !password || !mobile
  ) {
    next(errorHandler(400, 'All fields are required'));
  }

  if (req.body.email) {
    if (!validator.isEmail(req.body.email)) {
      return res.status(400).json({ message: 'Enter Valid Email Address.' });
    }
  }

  if (!/^\d{10}$/.test(mobile)) {
    return res.status(400).json({ message: 'Mobile Number Should Contain 10 Digits.' });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    firstName,
    lastName,
    userName,
    email,
    address,
    mobile,
    password: hashedPassword,
    isAdmin,
  });

  try {
    await newUser.save();
    res.json('Signup Successful');
  } catch (error) {
    next(error);
  }
};