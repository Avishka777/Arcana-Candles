import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import validator from 'validator';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';


//Function For Sign Up
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


//Function For Sign In
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, 'All Fields Are Required'));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'User Not Found'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, 'Invalid Password'));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};


//Function For Google Auth
export const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        userName:
          name.toLowerCase().split(' ').join('') +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};