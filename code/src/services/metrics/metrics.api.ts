import getAuditsMetrics from './audits/audits'
import getChatMetrics from './chat/chat'
import getErrorsMetrics from './errors/errors'
import getQuestionsMetrics from './questions/questions'
import getTemplatesMetrics from './templates/templates'
import getUsageMetrics from './usage/usage'

export default {
  getAudits: getAuditsMetrics,
  getUsage: getUsageMetrics,
  getTemplates: getTemplatesMetrics,
  getChat: getChatMetrics,
  getQuestions: getQuestionsMetrics,
  getErrors: getErrorsMetrics
}
