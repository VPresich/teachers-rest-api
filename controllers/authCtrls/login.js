import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../../models/user.js';
import HttpError from '../../helpers/HttpError.js';
import Theme from '../../models/theme.js';
import Token from '../../models/token.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const login = ctrlWrapper(async (req, res, next) => {
  const { email, password, app = 'teachers' } = req.body;

  const defaultColor = app === 'teachers' ? 'yellow' : 'red';

  const emailInLowerCase = email.toLowerCase();

  const user = await User.findOne({ email: emailInLowerCase });

  if (!user) {
    throw new HttpError(401, 'Email or password is wrong');
  }

  // Uncomment if account verification is needed
  // if (!user.verify) {
  //   throw new HttpError(401, 'Your account is not verified');
  // }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new HttpError(401, 'Email or password is wrong');
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });

  let userToken = await Token.findOne({ user: user._id, app });
  if (userToken) {
    userToken.token = token;
    await userToken.save();
  } else {
    await Token.create({ user: user._id, app, token });
  }

  const theme = await Theme.findOne({ user: user._id, app });
  if (!theme) {
    await Theme.create({ user: user._id, app, color: defaultColor });
  }

  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({
    token,
    user: {
      name: user.name,
      email: user.email,
      avatarURL: user.avatarURL,
      theme: theme?.color || defaultColor,
    },
  });
});

export default login;
