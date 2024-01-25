import UserPanelLayout from "@/app/components/userPanelLayout";
import { NextPageWithLayout } from "../_app";
import UserInfo from "../../app/components/panel/UserInfo";

const Panel: NextPageWithLayout = () => {

    return (
        <div>
            <UserInfo />
        </div>
    )
}

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Panel;