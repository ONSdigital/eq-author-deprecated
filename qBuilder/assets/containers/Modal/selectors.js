import { createSelector } from 'reselect'

/**
 * Direct selector to the modal state domain
 */
const selectModalDomain = () => state => state.get('modal')

/**
 * Other specific selectors
 */


/**
 * Default selector used by Modal
 */

const selectModal = () => createSelector(
  selectModalDomain(),
  (substate) => substate
)

export default selectModal
export {
  selectModalDomain,
}
