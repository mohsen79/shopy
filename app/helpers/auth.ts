import Cookies from 'universal-cookie';

const stroeLoginCookie = async (token: string, days: number = 10) => {
    let res = await fetch('/api/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    });

    // without http only
    // const cookies = new Cookies();
    // cookies.set('shopy', token, { maxAge: days * 24 * 3600 });
}

const removeLoginCookie = async () => {
    let res = await fetch('/api/logout', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    //without http only
    // let cookie = new Cookies();
    // cookie.remove('shopy_token');
}

export { stroeLoginCookie, removeLoginCookie };