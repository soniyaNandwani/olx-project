export interface LoginData {
    email: string;
    password: string;
  }

export interface SignupData {
    email?: string;
    name?: string;
    password?: string;
    accessToken?:string;
  }
 