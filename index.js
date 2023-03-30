const axios = require('axios');

// Replace with your own Steam API key
const api_key = "9E6F31CE4F7547EAEBA66E5E6E418368";

// Replace with the Steam ID of the user you want to retrieve
const steam_username = "STEAM_ID";

async function main() {
    const steamid = await getSteamId(steam_username)

    console.log(steamid)

    const steamgames = await getSteamGames(steamid);

    console.log(steamgames);
}

main();



async function getSteamId(steam_username) {
    const steam_id = "https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=" + api_key + "&vanityurl=" + steam_username;
    const result = await axios.get(steam_id);

    return result.data.response.steamid;
}

async function getSteamGames(steam_id) {
    const url = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${api_key}&steamid=${steam_id}&format=json`;
    const result = await axios.get(url)

    console.log(result.data ,url)
    const current_game_name = result.data.response.games[0].name;
    return current_game_name
}


