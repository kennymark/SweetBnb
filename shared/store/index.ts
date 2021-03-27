





import { action, createStore } from 'easy-peasy';



const data = {
  viewPort: {
    latitude: 51.523305664462555,
    longitude: -0.09780459021801577,
    zoom: 11
  },

  setViewPort: action((state: any, payload) => {
    state.viewPort = { ...state.viewPort, ...payload }
  })
}
const properties = {
  all: null,
  selected: {},

  setProperties: action((state: any, payload) => {
    state.all = payload
  }),

  setSelected: action((state: any, payload) => {
    state.selected = payload
  })

}
const store = createStore({
  map: data,
  properties
});


export default store