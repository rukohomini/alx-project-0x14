# alx-project-0x14

## API Overview

The Movie Database (TMDb) API provides comprehensive data about movies, TV shows, actors, and related media. Using this API, you can:

- Retrieve movie and TV show metadata (titles, overviews, genres, release dates, etc.)
- Search and discover movies and TV shows by various criteria
- Access cast and crew information
- Fetch images such as posters, backdrops, and profile pictures
- Retrieve trending or popular titles

This API is ideal for building movie apps, streaming guides, recommendation systems, or any project requiring up-to-date movie/TV data.  

## Version

**TMDb API v3**  

## Available Endpoints

| Endpoint | Description |
|----------|-------------|
| `/movie/{movie_id}` | Get detailed information about a specific movie by its ID (title, overview, genres, release date, poster path, etc.) |
| `/movie/popular` | Retrieve a list of currently popular movies |
| `/movie/top_rated` | Get top-rated movies based on user ratings |
| `/movie/upcoming` | Fetch upcoming movies that will be released soon |
| `/discover/movie` | Discover movies using filters such as genre, release date, or popularity |
| `/search/movie` | Search for movies by name |
| `/genre/movie/list` | Get a list of movie genres and their IDs |
| `/movie/{movie_id}/credits` | Retrieve cast and crew information for a specific movie |
| `/tv/{tv_id}` | Get detailed information about a specific TV show |
| `/tv/popular` | Retrieve popular TV shows |
| `/tv/top_rated` | Get top-rated TV shows |
| `/search/tv` | Search for TV shows by name |

> Note: The API also provides endpoints for images, configuration, and trending content.  

## Request and Response Format

### Base URL
```
https://api.themoviedb.org/3/
```

### Example: Fetch a movie by ID

**Request**
```
GET https://api.themoviedb.org/3/movie/550?api_key=YOUR_API_KEY
```

**Response** (partial)
```json
{
  "adult": false,
  "backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
  "belongs_to_collection": null,
  "budget": 63000000,
  "genres": [
    { "id": 18, "name": "Drama" }
  ],
  "id": 550,
  "imdb_id": "tt0137523",
  "original_language": "en",
  "original_title": "Fight Club",
  "overview": "A ticking-time-bomb insomniac and a soap maker form an underground fight club...",
  "popularity": 0.5,
  "poster_path": "/...jpg",
  "release_date": "1999-10-15"
}
```

### Example: Discover movies by genre

**Request**
```
GET https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=28&sort_by=popularity.desc
```

**Response**
```json
{
  "page": 1,
  "results": [
    {
      "id": 634649,
      "title": "Spider-Man: No Way Home",
      "genre_ids": [28, 12, 878],
      "overview": "Peter Parker seeks Doctor Strange's help...",
      "release_date": "2021-12-15",
      "poster_path": "/...jpg"
    },
    ...
  ],
  "total_pages": 500,
  "total_results": 10000
}
```

## Authentication

- Create a free account on [TMDb](https://www.themoviedb.org/).
- Go to **Settings → API → Request API Key**. Choose "Developer" type and submit.
- Include your API key as a query parameter in requests:
```
?api_key=YOUR_API_KEY
```
- Use HTTPS for all requests to ensure security.

## Error Handling

- **401 Unauthorized:** Missing or invalid API key.
- **404 Not Found:** Resource does not exist (e.g., invalid movie ID).
- **429 Too Many Requests:** Rate limit exceeded.
- Always check the HTTP status code before processing the response.
- Handle missing optional fields, such as `poster_path` or `backdrop_path`.
- For paginated responses, use `page` and `total_pages` to fetch all results if needed.

## Usage Limits and Best Practices

- Free for non-commercial use; include proper attribution to TMDb.
- Avoid making excessive requests; respect rate limits.
- Use configuration endpoint for images to ensure compatibility with CDN changes.
- Cache results when possible to reduce API calls.
- Properly handle errors and fallback cases (e.g., missing data).
- Maintain security by never exposing your API key publicly in client-side code.

