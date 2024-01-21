export interface ValidationUserData {
  displayName: string
  email: string
  password: {
    password: string
    confirm: string
  }
}

// hero-images-object interface
export interface ImageInfo {
  src: string
  alt: string
  author: string
}
