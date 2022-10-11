import { NonEmptyArray } from 'utils/typingHelpers'

export const signedIn = ['user', 'admin']
export const signedOut = ['guest']
export const roles = [...signedIn, ...signedOut] as const
export type Role = typeof roles[number]

type AuthInfo = {
  currentRoles: NonEmptyArray<Role>
}

const useAuth = (): AuthInfo => ({ currentRoles: ['admin'] }) // - mock

export default useAuth
