import authSlice from './slices/auth/auth.slice'
import authLoadersSlice from './slices/loaders/auth-loaders/auth-loaders.slice'
import usersLoadersSlice from './slices/loaders/users-loaders/users-loaders.slice'
import organizationsLoadersSlice from './slices/loaders/organizations-loaders/organizations-loaders.slice'
import notificationSlice from './slices/notification/notification.slice'
import subscriptionSlice from './slices/subscription/subscription.slice'
import usersSlice from './slices/users/users.slice'
import organizationsSlice from './slices/organizations/organizations.slice'
import metricsSlice from './slices/metrics/metrics.slice'
import reportsSlice from './slices/reports/reports.slice'

export default {
  auth: authSlice,
  subscription: subscriptionSlice,
  users: usersSlice,
  notification: notificationSlice,
  organizations: organizationsSlice,
  metrics: metricsSlice,
  reports: reportsSlice,
  // LOADERS
  authLoader: authLoadersSlice,
  usersLoaders: usersLoadersSlice,
  organizationsLoaders: organizationsLoadersSlice
}
