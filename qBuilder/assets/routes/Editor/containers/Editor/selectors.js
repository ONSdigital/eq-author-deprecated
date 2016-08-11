export const selectSchemaValue = state => state.get('editor').get('schema')
export const selectEditorTitle = state => state.get('editor').get('title')
export const selectIsSaving = state => state.get('editor').get('isSaving')
export const selectIsFetching = state => state.get('editor').get('isFetching')
