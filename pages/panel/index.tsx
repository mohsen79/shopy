import UserPanelLayout from "@/app/components/userPanelLayout";
import { NextPageWithLayout } from "../_app";
import { useEffect, useState } from "react";

const Panel: NextPageWithLayout = () => {

    return (
        <div>
            <h1>dashboard</h1>
        </div>
    )
}

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Panel;