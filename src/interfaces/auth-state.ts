  import { IUser } from "@app/interfaces/auth-user";

  /** @description */
  export interface IAuthState {
      user: IUser | null;
      isAuthenticated: boolean;
      loading: boolean;
      error: string | null;
  }