import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import getDefaultAppColor from './getDefaultAppColor.js';
import HttpError from './HttpError.js';
import Token from '../models/token.js';
import Theme from '../models/theme.js';

const authMiddleware = async (req, _, next) => {
  const appHeader = req.headers['x-app-name'] || 'teachers';

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(HttpError(401));
  }
  const [bearer, token] = authHeader.split(' ');
  if (bearer !== 'Bearer') {
    return next(HttpError(401));
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
    if (err) {
      return next(HttpError(401));
    }
    try {
      const user = await User.findById(decode.id);
      if (!user) {
        throw HttpError(401);
      }

      if (!user._id || !user.email || !user.name) {
        throw HttpError(401);
      }

      const userToken = await Token.findOne({ user: user._id, app: appHeader });
      if (!userToken || userToken.token !== token) {
        throw HttpError(401);
      }

      const userTheme = await Theme.findOne({ user: user._id, app: appHeader });
      const defaultColor = getDefaultAppColor(appHeader);

      // if (!user || user.token !== token) {
      //   throw HttpError(401);
      // }

      req.user = {
        id: user._id,
        name: user.name,
        email: user.email,
        avatarURL: user.avatarURL,
        password: user.password,
        theme: userTheme?.color || defaultColor,
        app: appHeader,
      };
      next();
    } catch (error) {
      next(error);
    }
  });
};

export default authMiddleware;
