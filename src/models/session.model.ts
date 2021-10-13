import UserModel from "./user.model";

interface SessionModel {
  token: string;
  refreshToken?: string;
  refreshNumber?: number;
  refreshedAt?: Date;
  createdAt?: Date;
  userAgent?: string;
  ip?: string;
  expiredAt?: Date;
  user: UserModel
}

export default SessionModel;
