export const selectSurveys = state => state.getIn(['surveys', 'items']).toJS()
export const selectAddSurveyModal = state => state.getIn(['surveys', 'addSurveyModal']).toJS()
export const selectAddQuestionnaireModal = state => state.getIn(['surveys', 'addQuestionnaireModal']).toJS()
