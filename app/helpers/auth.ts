import Cookies from 'universal-cookie';

const stroeLoginCookie = async (token: string, days: number = 10) => {
    let res = await fetch('/api/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    });
}

const removeLoginCookie = () => { }

export { stroeLoginCookie, removeLoginCookie };