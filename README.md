# Application : 
This project is a music discovery web application that allows users to explore and interact with music data using the Last.fm API
# Features : 
- Track Search :
  * Allow users to search for songs by name and display results with song details.
  *  It uses the  function to retrieve songs based on the user's input (). 
  * The results are displayed in the  div with details such as the track name, artist name, and a link to listen on Last.fm.
- Artist Discovery : 
  * Show artist information and similar artists to explore.
  * The  function fetchArtistInfo() to retrieve artist details (name, bio, image, etc.) from api.js.
  * The fetchSimilarArtists() function to fetch similar artists from api.js.
  * Results are displayed in the (#artist-info) div using renderArtistInfo()  and renderSimilarArtists() from ui.js.
- Recommendations : have problems
  * Suggest tracks or albums based on the user’s searches or preferences.
  * The fetchRecommendations function calls the Last.fm track.getsimilar endpoint to suggest tracks based on the user’s search.
- User Favorites :
  * Let users "favorite" songs and save them locally
  * The addToFavorites() function saves tracks, and renderFavorites() displays them in the favorites section.
  Users can also remove tracks from their favorites using the removeFromFavorites() function.
- Top Charts : 
  * Display top tracks or artists by genre.
  * The fetchTopTracks() and fetchTopArtists() functions from api.js fetch global top tracks and artists.
  * Buttons for loading top tracks and artists have been integrated, and the renderTopCharts() function displays the results.
- Scrobble Tracks : not finished yet
  * endpoint allows users to log tracks they’ve listened to.  

# Last.fm API endpoints used :
- track.search : Fetch tracks based on user input 
- artist.getinfo : Retrieve detailed information about an artist, including biography and image
- artist.getsimilar : etch a list of artists similar to the input artist
- track.getsimilar : Suggest tracks similar to the input track
- chart.gettoptracks : Retrieve the globally top-ranked artists.

# Requirements : 
1-  Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features : Used the fetch API extensively to interact with the Last.fm API  by utilize the previeus endpoints (api.js)
2- Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data: from api.js using fetchTrack() function retrieves data based on user input and in app.js connects the search feature to the user interface
3- Enable user manipulation of data within the API through the use of POST, PUT, or PATCH requests. Ensure your chosen API supports this feature before beginning : Last.fm user manipulation of data through its API, primarily using POST requests and one of the Supported POST Operations is the Scrobble Tracks, and to integrate the OAuth flow , but it didn't work for me aniways ////////////////
used documentation from : https://www.last.fm/api/show/track.scrobble
4- Make use of Promises and async/await syntax as appropriate: from api.js exp: export async function fetchTrack(trackName){const response = await fetch .....}
5- Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary:
api.js and ui.js used for export and the app.js for import callback.js: Handles OAuth callback (getting session key) after the user authorizes.
6- Ensure the program runs as expected, without any undesired behavior caused by misunderstanding of the JavaScript event loop (such as race conditions, API calls being handled out of order, etc.): cheked
7- Create an engaging user experience through the use of HTML and CSS: cheked in index.html and style.css
8- Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit): cheked
9- Commit frequently to the git repository : more than 4 commits
10- Include a README file that contains a description of your application : Cheked
11- Level of effort displayed in creativity, presentation, and user experience: Users can search for tracks, view results, learn more about artists, discover similar artists, and receive track recommendations. This interactivity keeps users engaged and encourages them to explore more content.
