export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export interface IAuthState {
   user: IUser;
  isLoading: boolean;
  error: string;
}
