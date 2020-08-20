





import { createStore, persist } from 'easy-peasy';
import AuthStore, { AuthModel } from './auth';




const store = createStore({
  auth: persist(AuthStore, { storage: 'localStorage' }),
});


export interface storeModel {
  auth: AuthModel;
}

export default store