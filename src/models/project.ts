 const projectModel = {
  namespace: 'project',
  state: {
    update: ''
  },
  reducers: {
    'changeState': function(state, { payload: name }) {
      console.log('sate', name)
      return {
        update: name
      }
    },
  },
}

export default projectModel