export async function getSkyblockProfileData(uuid: string) {
    const HYPIXEL_KEY = process.env.HYPIXEL_KEY;
    const response = await fetch(`https://api.hypixel.net/v2/skyblock/profiles?key=${HYPIXEL_KEY}&uuid=${uuid}`)
    if(response.status === 403) return "API DISABLED"
    if(response.status === 400) return "BAD REQUEST"
    if(response.status === 429) return "RATE LIMITED"
    if(response.status === 422) return "INVALID UUID"
    if(response.status !== 200) return "UNKNOWN ERROR"
    const data = await response.json();
    return data;
}