import Cookies from 'universal-cookie';



const setCookies = (key,value,expireAt) => {
    
    const cookies = new Cookies();
    cookies.set(key, value, {
      path: '/',
      expires: new Date(expireAt),
    })
}


export {
    setCookies,

}