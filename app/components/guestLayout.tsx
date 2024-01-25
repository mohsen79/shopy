import { ReactNode } from "react"
import useAuth from "../hooks/useAuth"
import { useRouter } from "next/router";

interface Props {
    children: ReactNode
}
const GuestLayout = ({ children }: Props) => {
    const { user, error, loading } = useAuth();
    const router = useRouter();

    if (user) {
        router.push('/panel');
        return <></>;
    }

    console.log(user);

    return <div>{children}</div>
}

export default GuestLayout;