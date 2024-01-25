import useAuth from '../../hooks/useAuth';

const UserInfo = () =>{
    let {user} = useAuth();
 
    return <>
        <span>useranme : </span>
        <h2>{user.name}</h2>
    </>
}

export default UserInfo;