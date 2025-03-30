# Application :  music app using Last.fm's API
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
- Recommendations :  Suggest tracks or albums based on the user’s searches or preferences.
- User Favorites :  Let users "favorite" songs and save them locally
- Top Charts : Display top tracks or artists by genre.
