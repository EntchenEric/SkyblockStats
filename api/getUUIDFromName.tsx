export async function getUUIDFromName(name: string) {
    try{
        const response = await fetch(`https://api.ashcon.app/mojang/v2/user/${name}`);
        if(response.status !== 200) return null;
        const data = await response.json();
        if(data.error){
            return null;
        }
        return data.uuid;
    } catch{
        return null;
    }
}