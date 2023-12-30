export interface ValidationUserData {
  displayName: string
  email: string
  password: {
    password: string
    confirm: string
  }
}
