import { NAV_LINKS } from '@/enums/navLinks'
import { USER_ROLES } from '@/enums/userRoles'
import { RouteProps } from 'react-router-dom'

export type RoleBasedRouteProps = RouteProps & { roles: USER_ROLES[]; subRoutes?: RouteProps[] }

export const publicRoutes: RouteProps[] = [
  {
    path: NAV_LINKS.LOGIN,
    async lazy() {
      const Login = await import('../pages/login/LoginPage')
      return { Component: Login.default }
    }
  },
  {
    path: NAV_LINKS.RESET_PASSWORD,
    async lazy() {
      const ResetPassword = await import('@/pages/resetPassword/ResetPasswordPage')
      return { Component: ResetPassword.default }
    }
  },
  {
    path: NAV_LINKS.REGISTER,
    async lazy() {
      const Register = await import('../pages/register/RegisterPage')
      return { Component: Register.default }
    }
  }
]

export const privateRoutesPerRole: RoleBasedRouteProps[] = [
  {
    path: NAV_LINKS.DASHBOARD,
    async lazy() {
      const Dashboard = await import('../pages/dashboard/DashboardPage')
      return { Component: Dashboard.default }
    },
    roles: [USER_ROLES.SUPER_ADMIN, USER_ROLES.ORG_ADMIN, USER_ROLES.EMPLOYEE]
  },
  {
    path: NAV_LINKS.MANAGE_ACCOUNTS,
    async lazy() {
      const ManageAccounts = await import('../pages/manageAccounts/ManageAccountsPage')
      return { Component: ManageAccounts.default }
    },
    roles: [USER_ROLES.SUPER_ADMIN, USER_ROLES.ORG_ADMIN]
  },
  {
    path: NAV_LINKS.LICENSE_PLAN,
    async lazy() {
      const LicensePlan = await import('../pages/licensePlan/LicensePlanPage')
      return { Component: LicensePlan.default }
    },
    roles: [USER_ROLES.SUPER_ADMIN, USER_ROLES.ORG_ADMIN]
  },
  {
    path: NAV_LINKS.LICENSE_MANAGEMENT,
    async lazy() {
      const LicenseManagement = await import('../pages/licenseManagement/LicenseManagementPage')
      return { Component: LicenseManagement.default }
    },
    roles: [USER_ROLES.SUPER_ADMIN, USER_ROLES.ORG_ADMIN]
  },
  {
    path: NAV_LINKS.LICENSES_ADMINISTRATION,
    async lazy() {
      const LicensesAdmin = await import('../pages/licensesAdmin/LicensesAdminPage')
      return { Component: LicensesAdmin.default }
    },
    roles: [USER_ROLES.SUPER_ADMIN]
  },
  {
    path: NAV_LINKS.REPORTS_AUDITED,
    async lazy() {
      const Reports = await import('../pages/reports/ReportsPage')
      return { Component: Reports.default }
    },
    roles: [USER_ROLES.SUPER_ADMIN, USER_ROLES.ORG_ADMIN]
  }
]
