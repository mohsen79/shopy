import Cookies from 'universal-cookie';

const stroeLoginCookie = (token: string, days: number = 10) => {
    const cookies = new Cookies();
    cookies.set('shopy', token, { maxAge: days * 24 * 3600 });
}

const removeLoginCookie = () => { }

export { stroeLoginCookie, removeLoginCookie };