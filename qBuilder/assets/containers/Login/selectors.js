export const selectUsername = state => state.get('login').get('username')
export const selectNext = state => state.get('login').get('next')
export const selectToken = state => state.get('login').get('csrfToken')
export const selectErrors = state => state.get('login').get('errors').toJS()
