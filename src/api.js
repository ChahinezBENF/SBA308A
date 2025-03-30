const API_KEY = 'd14b6563838c504d042e94cc0be30957';
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

//retrive songs based on user's input
export async function fetchTrack(trackName) {
    try {
        const response = await fetch(
            `${BASE_URL}?method=track.search&track=${trackName}&api_key=${API_KEY}&format=json`);

         if (!response.ok) {
           throw new Error("Could not Fetch Resources");
       
          }

        const data = await response.json();
        console.log(data); 
        return data.results.trackmatches.track;
    } catch (error) {
        console.log(error);
    }  
}

//fetch artist details and similar artists using the Last.fm API endpoint

//Fetch Artist Info
export async function fetchArtistInfo(artistName) {
    try {
        const response = await fetch(
            `${BASE_URL}?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`);
    
            if (!response.ok) {  throw new Error("Could not Fetch Resources"); }
    
        const data = await response.json();
        return data.artist; // Returns detailed artist information
        
    } catch (error) {
        console.log(error);
    }   
}

//Fetch Similar Artists
export async function fetchSimilarArtists(artistName) {
    try {
        const response = await fetch(
            `${BASE_URL}?method=artist.getsimilar&artist=${artistName}&api_key=${API_KEY}&format=json` );
    
        if (!response.ok) {  throw new Error("Could not Fetch Resources"); }
    
        const data = await response.json();
    
        return data.similarartists.artist; // Returns an array of similar artists
    } catch (error) {
        console.log(error);
    }
   
}

//Fetch recommendations
export async function fetchRecommendations(trackName) {
    const response = await fetch(
        `${BASE_URL}?method=track.getsimilar&track=${trackName}&api_key=${API_KEY}&format=json`
    );
    const data = await response.json();
    return data.similartracks.track; // Returns an array of similar tracks
}



