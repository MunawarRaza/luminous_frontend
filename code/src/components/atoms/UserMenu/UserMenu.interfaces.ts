interface IUserMenuProps {
  user: {
    name: string
    email: string
    avatar: string
  }
  logout: () => void
}

export type UserMenuProps = IUserMenuProps
