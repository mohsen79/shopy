import { removeLoginCookie } from '@/app/helpers/auth';
import useAuth from '../../hooks/useAuth';
import { useRouter } from 'next/router';

const UserInfo = () =>{
    let {user} = useAuth();
    const router = useRouter();

    const logoutHandler = async ()=>{
        await removeLoginCookie();
        await router.push('/');
    }
 
    return <>
        <span>useranme : </span>
        <h2>{user.name}</h2>
        <button onClick={logoutHandler}>Logout</button>
    </>
}

export default UserInfo;