import useSWR from "swr";
import Cookies from "universal-cookie";
import callApi from "../helpers/callApi";

const cookie = new Cookies();

const useAuth = () => {
    const { data, error } = useSWR('user_me', () => {
        return callApi().get('/user/', {
            headers: {
                Authorization: cookie.get('shopy')
                // replace new back end source
                // check for login and setting cookie
                // continue video from minute 6
            }
        });
    });

    console.log(data, error);
    return { user: null }
}

export default useAuth;