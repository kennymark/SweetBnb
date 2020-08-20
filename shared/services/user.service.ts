import api, { authHeaders } from "./http.service"
import { User } from "../models/user.model"


class UserService {
  getCurrentUser() {
    return api.get('user/me', authHeaders())
  }

  getTeam() {
    return api.get('user/team', authHeaders())
  }

  updateUser(user: User) {
    return api.put('user/me', user, authHeaders())
  }

}

export default new UserService()