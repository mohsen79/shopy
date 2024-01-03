import { ReactNode } from "react"
import useAuth from "../hooks/useAuth"

interface Props {
    children: ReactNode
}
const UserPanelLayout = ({ children }: Props) => {
    const { user } = useAuth();
    return (
        <div>{children}</div>
    )
}

export default UserPanelLayout;