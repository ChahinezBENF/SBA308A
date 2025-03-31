
import { fetchTrack , fetchArtistInfo, fetchSimilarArtists, fetchRecommendations, fetchTopTracks, fetchTopArtists } from './api.js';
import { renderTracks, renderArtistInfo, renderSimilarArtists, renderRecommendations, renderFavorites, renderTopCharts  } from './ui.js';



document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button'); // Button for search
    const trackResultsDiv = document.getElementById('track-results');
    const artistInfoDiv = document.getElementById('artist-info');
    const recommendationsDiv = document.getElementById('recommendations');
    const topChartsDiv = document.getElementById('top-charts'); // To access the container for displaying Top Charts results.
    const loadTopTracksButton = document.getElementById('load-top-tracks'); // Button for top tracks
    const loadTopArtistsButton = document.getElementById('load-top-artists'); // Button for top artists



     // Render saved favorites 
     renderFavorites();


    searchButton.addEventListener('click', async () => {
        const query = document.getElementById('track-input').value;
        const artistName = document.getElementById('artist-input')?.value || '';

        // Clear previous results
        trackResultsDiv.innerHTML = '';
        artistInfoDiv.innerHTML = '';
        recommendationsDiv.innerHTML = '';

        try {
            // Fetch and render track results
        const tracks = await fetchTrack(query);
        if (tracks.length === 0) {
            // Display a message when no tracks are found
            trackResultsDiv.innerHTML = '<p>No tracks found. Please try a different search.</p>';
        } else {
            renderTracks(tracks, trackResultsDiv);
        }

        // Extract artist name from the first track result (if it exists)
        if (tracks.length > 0) {
            const artistName = tracks[0].artist; // Extract artist name from the first track result

            // Fetch and render artist info using  artist name
            const artist = await fetchArtistInfo(artistName);
            renderArtistInfo(artist, artistInfoDiv);

            // Fetch and render similar artists
            const similarArtists = await fetchSimilarArtists(artistName);
            renderSimilarArtists(similarArtists, artistInfoDiv);
        } else {
            artistInfoDiv.innerHTML = '<p>No artist information available.</p>';
        }

        // Fetch and render recommendations
        const recommendedTracks = await fetchRecommendations(query, artistName);
            if (recommendedTracks.length === 0) {
                recommendationsDiv.innerHTML = '<p>No Recommendations Found</p>';
            } else {
                renderRecommendations(recommendedTracks, recommendationsDiv);
            }

        } catch (error) {
            console.error(error);
        }
    });
        // Add event listeners for Top Charts buttons
    loadTopTracksButton.addEventListener('click', async () => {
        try {
            const topTracks = await fetchTopTracks(); // Fetch top tracks
            renderTopCharts(topTracks, topChartsDiv); // Render top tracks in the UI
        } catch (error) {
            console.error('Error loading top tracks:', error);
        }
          });

    loadTopArtistsButton.addEventListener('click', async () => {
        try {
            const topArtists = await fetchTopArtists(); // Fetch top artists
            renderTopCharts(topArtists, topChartsDiv); // Render top artists in the UI
        } catch (error) {
            console.error('Error loading top artists:', error);
        }
    });


    
});

