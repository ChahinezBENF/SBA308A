
export function renderTracks(tracks, container) {
    container.innerHTML = ''; // Clear previous track results
    tracks.forEach(track => {
        const trackElement = document.createElement('div');
        trackElement.innerHTML = `
            <h3>${track.name} by ${track.artist}</h3>
            <a href="${track.url}" target="_blank">Listen on Last.fm</a>`;
        container.appendChild(trackElement);// Append each track element to the container
    });
}

export function renderArtistInfo(artist, container) {
    container.innerHTML = `
        <h2>${artist.name}</h2>
        <img src="${artist.image[2]['#text']}" alt="${artist.name}" />
        <p>${artist.bio.summary}</p>
        <a href="${artist.url}" target="_blank">More on Last.fm</a>`;
}

export function renderSimilarArtists(similarArtists, container) {
    if (similarArtists.length > 0) {
        container.innerHTML += '<h3>Similar Artists:</h3>';
        similarArtists.forEach(artist => {
            const artistElement = document.createElement('div');
            artistElement.innerHTML = `
                <p>${artist.name}</p>
                <img src="${artist.image[2]['#text']}" alt="${artist.name}" />
                <a href="${artist.url}" target="_blank">More on Last.fm</a> `;
            container.appendChild(artistElement);
        });
    }

}

//Render recommended tracks
export function renderRecommendations(tracks, container) {
    container.innerHTML = '<h2>Recommended Tracks:</h2>'; // Add a heading
    
    if (!tracks || tracks.length === 0) {
        container.innerHTML = '<h2>No Recommendations Found</h2>';
        return;
    }    
    tracks.forEach(track => {
        const trackElement = document.createElement('div');
        trackElement.innerHTML = `
            <h3>${track.name} by ${track.artist.name}</h3>
            <a href="${track.url}" target="_blank">Listen on Last.fm</a>
        `;
        container.appendChild(trackElement);
    });
}



