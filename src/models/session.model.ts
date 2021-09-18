interface SessionModel {
  token: string;
  refreshToken?: string;
  refreshNumber?: number;
  refreshedAt?: Date;
  createdAt?: Date;
  userAgent?: string;
  ip?: string;
  expiredAt?: Date;
}

export default SessionModel;
