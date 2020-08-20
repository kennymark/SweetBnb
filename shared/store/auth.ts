import { action, Action, computed, Computed } from "easy-peasy";
import { User } from "../models/user.model";



const AuthStore: AuthModel = {
  user: null,
  token: null,
  expiresAt: null,
  isAuthenticated: computed(state => state.user != null),

  setUser: action((state, payload) => {
    return state.user = payload
  }),

  setToken: action((state, payload) => {
    return state.token = payload
  }),

  setExpiresAt: action((state, payload) => {
    return state.expiresAt = payload
  })

}

export interface AuthModel {
  user: User;
  token: string;
  expiresAt: string
  isAuthenticated: Computed<AuthModel, boolean>;
  setUser: Action<AuthModel, any>;
  setToken: Action<AuthModel, any>;
  setExpiresAt: Action<AuthModel, any>;
}

export interface iAuth {
  user: User;
  token: string;
  expiresAt: string
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  setExpiresAt: (date: string) => void;
}

export default AuthStore

