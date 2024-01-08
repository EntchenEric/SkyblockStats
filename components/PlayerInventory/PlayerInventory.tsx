import { useEffect, useState } from "react";
import {decodeSkyblockData} from "../../api/decodeSkyblockData";

export function PlayerInventory({profileData, uuid}: {profileData: any, uuid: string}){
    const [inventoryData, setInventoryData] = useState();
    useEffect(() => {
        const memData = profileData.members[uuid.replaceAll("-", "")];
        console.log("memdata", memData)
        const inventory = memData.inventory.inv_contents.data;
        console.log("inventory", inventory);
        const decoded = atob(inventory);
        console.log("decoded", decoded);
    }, []);

    return(
        <>

        </>
    )
}