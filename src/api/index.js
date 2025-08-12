import httpClient from './httpClient'



//登录
export const webLogin = (data) => {
    return httpClient.post('/login',data)
}

export const getMockData = (data) => {
    return httpClient.get('/getFakeUser/'+data)
}

export const exportTxt = (data) => {
    return httpClient.get('/exportTxt/'+data)
}
