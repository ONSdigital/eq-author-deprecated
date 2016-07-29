export const selectEditorValue = state => state.get('editor').get('value')
export const selectEditorTitle = state => state.get('editor').get('title')
export const selectIsSaving = state => state.get('editor').get('isSaving')
export const selectIsFetching = state => state.get('editor').get('isFetching')
