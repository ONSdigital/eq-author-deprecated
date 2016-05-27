/*
 *
 * Editor actions
 *
 */

import { CHANGE_VALUE } from './constants'

export function changeValue(value) {
  return {
    type: CHANGE_VALUE,
    value
  }
}
