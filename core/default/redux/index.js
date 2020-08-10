const initialState = {
  default: true,
}

export default (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    default:
      return state
  }
}
