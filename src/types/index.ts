export interface FormData {
  username: string
  email: string
  password: string
  confirmPassword: string
  phone: string
  gender: string
  hobbies: string[]
  otherHobby: string
  bio: string
  agreeTerms: boolean
}

export interface Props {
  show: boolean
  currentValue: string
}

export interface Emits {
  (e: 'update:show', value: boolean): void
  (e: 'save', value: string): void
}