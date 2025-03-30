
export function renderTracks(tracks, container) {
    container.innerHTML = ''; // Clear previous track results

    tracks.forEach(track => {
        const trackElement = document.createElement('div');
        trackElement.innerHTML = `
            <h3>${track.name} by ${track.artist}</h3>
            <a href="${track.url}" target="_blank">Listen on Last.fm</a>
            <button class="favorite-button" data-track="${encodeURIComponent(
                JSON.stringify(track)
            )}">Favorite</button>
        `;
        container.appendChild(trackElement);// Append each track element to the container
    });

    // Add event listeners to "Favorite" buttons
    const favoriteButtons = container.querySelectorAll('.favorite-button');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const trackData = JSON.parse(decodeURIComponent(event.target.dataset.track));
            addToFavorites(trackData);
        });
    });
}

 function addToFavorites(track) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Check if the track is already in the favorites list
    const isAlreadyFavorited = favorites.some(fav => fav.name === track.name && fav.artist === track.artist);
    
    if (!isAlreadyFavorited) {
        favorites.push(track);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${track.name} by ${track.artist} has been added to your favorites!`);
    } else {
        alert(`${track.name} by ${track.artist} is already in your favorites!`);
    }
}
//Render Favorities 
export function renderFavorites() {
    const favoritesList = document.getElementById('favorites-list'); 
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favoritesList.innerHTML = ''; // Clear any existing content

    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>No favorite tracks yet!</p>';
    } else {
        favorites.forEach(track => {
            const trackElement = document.createElement('div');
            trackElement.innerHTML = `
                <h3>${track.name} by ${track.artist}</h3>
                <a href="${track.url}" target="_blank">Listen on Last.fm</a>
                <button class="remove-favorite-button" data-track="${encodeURIComponent(JSON.stringify(track))}">
                    Remove
                </button>
            `;
            favoritesList.appendChild(trackElement);
        });
    }

    // Add event listeners to the "Remove" buttons
    const removeButtons = favoritesList.querySelectorAll('.remove-favorite-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', event => {
            const trackData = JSON.parse(decodeURIComponent(event.target.dataset.track));
            removeFromFavorites(trackData); 
            renderFavorites(); // Re-render favorites after removal
        });
    });
}

 function removeFromFavorites(track) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Filter out the track to be removed
    favorites = favorites.filter(fav => fav.name !== track.name || fav.artist !== track.artist);
    localStorage.setItem('favorites', JSON.stringify(favorites));

    alert(`${track.name} by ${track.artist} has been removed from your favorites.`);
}



//Render Artist Informations
export function renderArtistInfo(artist, container) {
    container.innerHTML = `<h3>Artist:</h3>
        <h2>${artist.name}</h2>
        <img src="${artist.image[2]['#text']}" alt="${artist.name}" />
        <p>${artist.bio.summary}</p>
        <a href="${artist.url}" target="_blank">More on Last.fm</a>`;
}

//Render  Similar Artists
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
    }else{
        container.innerHTML += '<p>No similar artists found.</p>';
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

//Render Top Charts: Tracks and artists
export function renderTopCharts(items, container) {
    container.innerHTML = ''; // Clear existing content

    if (items.length === 0) {
        container.innerHTML = '<p>No data available</p>';
    } else {
        items.forEach((item, index) => {
            const element = document.createElement('div');
            element.innerHTML = `
                <p><strong>${index + 1}.</strong> ${item.name} ${item.artist ? `by ${item.artist.name}` : ''}</p>
                <a href="${item.url}" target="_blank">More on Last.fm</a>
            `;
            container.appendChild(element);
        });
    }
}


