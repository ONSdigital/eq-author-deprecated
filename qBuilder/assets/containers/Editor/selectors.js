import { createSelector } from 'reselect'

/**
 * Direct selector to the editor state domain
 */
const selectEditorDomain = () => state => state.get('editor')

/**
 * Other specific selectors
 */

const selectValue = () => createSelector(
  selectEditor(),
  editorState => editorState.get('value')
)

/**
 * Default selector used by Editor
 */

const selectEditor = () => createSelector(
  selectEditorDomain(),
  (substate) => substate
)

export default selectEditor
export {
  selectEditorDomain,
  selectValue
}
