export const state = () => ({
  alert: {
    show: false,
    type: "success",
    message: ""
  }
})

export const mutations = {
  toggleAlert (state, alert) {
    Object.assign(state.alert, alert)
  }
}