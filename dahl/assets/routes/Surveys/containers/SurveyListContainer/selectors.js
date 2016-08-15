export const selectSurveys = state => state.getIn(['surveys', 'items']).toJS()
export const selectAddSurveyModal = state => state.getIn(['surveys', 'addSurveyModal'])
export const selectAddQuestionnaireModal = state => state.getIn(['surveys', 'addQuestionnaireModal'])
