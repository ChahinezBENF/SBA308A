const API_KEY = 'd14b6563838c504d042e94cc0be30957';
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';
const SECRET = 'e0cbb371782841a98c422ffed91f7efc'; // Last.fm shared secret


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
        const response = await fetch(`${BASE_URL}?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`);
    
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
        const response = await fetch(`${BASE_URL}?method=artist.getsimilar&artist=${artistName}&api_key=${API_KEY}&format=json` );
    
        if (!response.ok) {  throw new Error("Could not Fetch Resources"); }
    
        const data = await response.json();
    
        return data.similarartists.artist; // Returns an array of similar artists
    } catch (error) {
        console.log(error);
    }
   
}



//Fetch recommendations

export async function fetchRecommendations(trackName, artistName = '') {
    try {
        const response = await fetch(
            `${BASE_URL}?method=track.getsimilar&track=${trackName}&artist=${artistName}&api_key=${API_KEY}&format=json`
        );

        if (!response.ok) {
            throw new Error('Could not fetch resources');
        }

        const data = await response.json();

        if (!data.similartracks || !data.similartracks.track || data.similartracks.track.length === 0) {
            console.warn('No recommendations found for this track.');
            return [];
        }

        return data.similartracks.track; // Return an array of similar tracks
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        return [];
    }
}

//Fetch Topt Tracks
// export async function fetchTopTracks() {
//     try {
//         const response = await fetch(
//             `${BASE_URL}?method=chart.gettoptracks&api_key=${API_KEY}&format=json`
//         );
//         if (!response.ok) {
//             throw new Error('Could not fetch top tracks');
//         }
//         const data = await response.json();
//         return data.tracks.track; // Returns an array of top tracks
//     } catch (error) {
//         console.error('Error fetching top tracks:', error);
//         return [];
//     }
// }



export async function fetchTopTracks(limit = 10, page = 1) {
    try {
        const response = await fetch(
            `${BASE_URL}?method=chart.gettoptracks&api_key=${API_KEY}&limit=${limit}&page=${page}&format=json`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch top tracks');
        }

        const data = await response.json(); // Parse the JSON response
        return data.tracks.track; // Return an array of top tracks
    } catch (error) {
        console.error('Error fetching top tracks:', error);
        return []; // Return an empty array if there's an error
    }
}


//Fetch Topt Artist
export async function fetchTopArtists() {
    try {
        const response = await fetch(
            `${BASE_URL}?method=chart.gettopartists&api_key=${API_KEY}&format=json`
        );
        if (!response.ok) {
            throw new Error('Could not fetch top artists');
        }
        const data = await response.json();
        return data.artists.artist; // Returns an array of top artists
    } catch (error) {
        console.error('Error fetching top artists:', error);
        return [];
    }
}


