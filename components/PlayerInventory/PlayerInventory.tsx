import { useEffect, useState } from "react";

export function PlayerInventory({profileData, uuid}: {profileData: any, uuid: string}){
    const [memberData, setMemberData] = useState();
    useEffect(() => {
        const memData = profileData.members[uuid];
        setMemberData(memData);
        console.log(memData)
    }, []);

    return(
        <>

        </>
    )
}