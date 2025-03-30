
import { fetchTrack , fetchArtistInfo, fetchSimilarArtists, fetchRecommendations } from './api.js';
import { renderTracks, renderArtistInfo, renderSimilarArtists, renderRecommendations } from './ui.js';



document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const trackResultsDiv = document.getElementById('track-results');
    const artistInfoDiv = document.getElementById('artist-info');
    const recommendationsDiv = document.getElementById('recommendations');

    searchButton.addEventListener('click', async () => {
        const query = document.getElementById('track-input').value;

        // Clear previous results
        trackResultsDiv.innerHTML = '';
        artistInfoDiv.innerHTML = '';
        recommendationsDiv.innerHTML = '';

        try {
            // Fetch and render track results
        const tracks = await fetchTrack(query);
        renderTracks(tracks, trackResultsDiv);

        // Fetch and render artist info
        const artist = await fetchArtistInfo(query);
        renderArtistInfo(artist, artistInfoDiv);

        // Fetch and render similar artists
        const similarArtists = await fetchSimilarArtists(query);
        renderSimilarArtists(similarArtists, artistInfoDiv);

        // Fetch and render recommendations
        const recommendedTracks = await fetchRecommendations(query);
        renderRecommendations(recommendedTracks, recommendationsDiv);
        } catch (error) {
            
        }
        console.error(error);

    });
});

