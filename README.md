# PyxiVortex.js

Official JavaScript SDK for PyxiVortex Search API. Search across images, news, videos, and text with ease.

## Installation

```bash
npm install pyxivortex
```
```html
<script src="https://cdn.jsdelivr.net/npm/pyxivortex@1.0.0/dist/pyxivortex.min.js"></script>
```

## Usage

```javascript
const PyxiVortex = require('pyxivortex');

// Initialize the client
const pyxi = new PyxiVortex();

// Search for images
const imageResults = await pyxi.images('cats', { limit: 10, page: 1 });

// Search for news
const newsResults = await pyxi.news('technology', { limit: 10, page: 1 });

// Search for videos
const videoResults = await pyxi.videos('tutorials', { limit: 10, page: 1 });

// Search for text
const textResults = await pyxi.text('article', { limit: 10, page: 1 });

// Generic search with type specification
const results = await pyxi.search({
    query: 'search term',
    type: 'images', // 'images', 'news', 'videos', 'text'
    limit: 10,
    page: 1
});
```

## API Reference

### Constructor

```javascript
const pyxi = new PyxiVortex(config);
```

Config options:
- `timeout`: Request timeout in milliseconds (default: 30000)

### Methods

#### search(options)
Generic search method that supports all content types.
- `options.query`: Search query string
- `options.type`: Content type ('images', 'news', 'videos', 'text')
- `options.limit`: Number of results per page (default: 10)
- `options.page`: Page number (default: 1)

#### images(query, options)
Search for images
- `query`: Search query string
- `options.limit`: Number of results per page (default: 10)
- `options.page`: Page number (default: 1)

#### news(query, options)
Search for news articles
- `query`: Search query string
- `options.limit`: Number of results per page (default: 10)
- `options.page`: Page number (default: 1)

#### videos(query, options)
Search for videos
- `query`: Search query string
- `options.limit`: Number of results per page (default: 10)
- `options.page`: Page number (default: 1)

#### text(query, options)
Search for text content
- `query`: Search query string
- `options.limit`: Number of results per page (default: 10)
- `options.page`: Page number (default: 1)
## Demo

**Visit our [live demo](https://www.pyxivortex.run.place/) for testing!**
