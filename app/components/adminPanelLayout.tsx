import { ReactNode } from "react"
import useAuth from "../hooks/useAuth"
import { useRouter } from "next/router";

interface Props {
    children: ReactNode
}
const AdminPanelLayout = ({ children }: Props) => {
    const { user, error, loading } = useAuth();
    const router = useRouter();

    if (loading) return <h2>loading...</h2>
    if (error) {
        router.push('/auth/login');
        return <></>;
    }

    if (!user?.isAdmin) {
        router.push('/auth/login');
        return <></>;
    }

    console.log(user);

    return <div>{children}</div>
}

export default AdminPanelLayout;