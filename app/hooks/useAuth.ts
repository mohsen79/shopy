import useSWR from "swr";
import Cookies from "universal-cookie";
import callApi from "../helpers/callApi";

const cookie = new Cookies();

const useAuth = () => {
    const { data, error } = useSWR('user_me', () => {
        return callApi().get('/user', {
            headers: {
                authorization: cookie.get('shopy')
            }
        });
    });

    return { user: data?.data?.user, error, loading: !data && !error }
}

export default useAuth;