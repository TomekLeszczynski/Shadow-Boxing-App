export interface ValidationUserData {
  displayName: string
  email: string
  password: {
    password: string
    confirm: string
  }
}

// punch figure-icons on shadow boxing view
export interface punchType {
  number: string
  picture: string
  name: string
}
