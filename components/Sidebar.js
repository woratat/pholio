import { useSession } from 'next-auth/client'
import React from 'react'
import { UsersIcon } from "@heroicons/react/solid";

import  SidebarRow  from "./SidebarRow";

function Sidebar() {
    const [session, loading] = useSession();

    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow src={session.user.image} title={session.user.name}/>
            <SidebarRow Icon={UsersIcon} title="Friends"/>
        </div>
    );
}

export default Sidebar;
