import {setAccessToken} from '../../App'

export const logout = () => {
    setAccessToken('')
    localStorage.removeItem('user')
    localStorage.removeItem('token')
}