export const state = () => ({
  alert: {
    show: true,
    type: "success",
    message: "Test"
  }
})

export const mutations = {
  toggleAlert (state, alert) {
    Object.assign(state.alert, alert)
  }
}