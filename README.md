# Multi-Purpose Search Engine - Customized APIs

A production-ready search engine with real API integrations from Google, Bing, NewsAPI, Wikipedia, and image sources.

## 🚀 Now with Real API Integrations!

✨ **Search Sources**
- 🔍 Google Custom Search API
- 🔍 Bing Search API  
- 🔍 DuckDuckGo (Public API)
- 📰 NewsAPI (Article search)
- 📚 Wikipedia (Encyclopedia)
- 📷 Unsplash (Stock photos)
- 📷 Pixabay (Free images)

✨ **Advanced Features**
- 🎯 Real-time search suggestions
- 📜 Search history with MongoDB
- 📊 Search analytics & statistics
- 🎨 Dark/Light theme
- 📱 Mobile responsive
- ⚡ Performance optimized
- 🛡️ Secure API integration

## Quick Start

### 1. Get API Keys (5 minutes)

```bash
# Free API Keys:
- Google Custom Search: https://cse.google.com/cse/
- Bing Search: https://portal.azure.com/
- NewsAPI: https://newsapi.org/
- Unsplash: https://unsplash.com/developers
- Pixabay: https://pixabay.com/api/
- DuckDuckGo & Wikipedia: No keys needed!
```

See [QUICK_START_APIS.md](./docs/QUICK_START_APIS.md) for detailed setup.

### 2. Configure Environment

```bash
cd backend
cp .env.example .env

# Edit .env and add your API keys
```

### 3. Start with Docker

```bash
docker-compose up --build
```

Visit: http://localhost:3000

### 4. Or Manual Setup

```bash
# Terminal 1 - Backend
cd backend
npm install
npm run dev

# Terminal 2 - Frontend
cd frontend
npm install
npm start
```

## API Endpoints

### Search
```bash
# Universal search (all sources)
GET /api/search?q=python

# Specific web search source
GET /api/search/web?q=python&source=google
GET /api/search/web?q=python&source=bing
GET /api/search/web?q=python&source=duckduckgo

# News search
GET /api/search/news?q=technology&category=general

# Image search
GET /api/search/images?q=nature&source=unsplash
GET /api/search/images?q=nature&source=pixabay

# Search suggestions
GET /api/suggestions?q=pyt
```

### History & Analytics
```bash
# Get search history
GET /api/history?limit=50&page=1

# Save search
POST /api/history
Body: {"query": "python", "results_count": 42}

# Get statistics
GET /api/history/stats

# Clear history
DELETE /api/history
```

## Response Format

### Search Results
```json
{
  "query": "python",
  "results": {
    "google": [
      {
        "title": "Welcome to Python.org",
        "url": "https://www.python.org/",
        "snippet": "The official home...",
        "source": "google",
        "image": "https://..."
      }
    ],
    "bing": [...],
    "duckduckgo": [...],
    "wikipedia": [...]
  },
  "total": 45,
  "timestamp": "2024-01-20T10:30:00Z"
}
```

## Project Structure

```
search-engine/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── searchController.js      # Google, Bing, DuckDuckGo, Wikipedia
│   │   │   ├── suggestionsController.js # Real-time suggestions
│   │   │   └── historyController.js     # MongoDB integration
│   │   ├── models/
│   │   │   └── SearchHistory.js         # Database schema
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.js
│   ├── .env.example                     # API keys template
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── styles/
│   └── Dockerfile
├── docs/
│   ├── API_CUSTOMIZATION.md            # Detailed API setup
│   ├── QUICK_START_APIS.md             # Quick reference
│   ├── INSTALLATION.md
│   ├── API.md
│   └── DEPLOYMENT.md
└── docker-compose.yml
```

## Configuration

### Environment Variables (backend/.env)

```
# Server
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000

# Database
MONGO_URI=mongodb://root:password@localhost:27017/search-engine

# Google Custom Search
GOOGLE_SEARCH_API_KEY=AIzaSyD...
GOOGLE_SEARCH_ENGINE_ID=017643...

# Bing Search
BING_SEARCH_API_KEY=8e1a2b3c...

# NewsAPI
NEWS_API_KEY=abcdef123456...

# Image APIs
UNSPLASH_API_KEY=xyz123abc...
PIXABAY_API_KEY=abc123xyz...
```

## Key Features

### 🔄 Multi-Source Aggregation
- Fetch results from multiple sources in parallel
- Graceful fallback if one API fails
- Deduplication and ranking

### 💾 Smart Caching
- Search history stored in MongoDB
- Recent searches cached in memory
- TTL-based expiration

### 📊 Analytics
- Track search queries
- Measure execution time
- Trending searches
- Usage statistics

### 🛡️ Error Handling
- Retry logic with exponential backoff
- Graceful degradation
- Detailed error logging

### ⚡ Performance
- Request timeout: 8 seconds
- Parallel API calls
- Response compression
- Optimized database queries

## Deployment

### GitHub Pages + Heroku

```bash
# Deploy frontend to GitHub Pages
cd frontend
npm run deploy

# Deploy backend to Heroku
cd backend
heroku create search-engine-api
git push heroku main
```

### Docker

```bash
# Build and push to Docker Hub
docker-compose build
docker tag search-engine-backend alagbe003/search-engine-backend:latest
docker push alagbe003/search-engine-backend:latest
```

## Documentation

- **[Quick Start APIs](./docs/QUICK_START_APIS.md)** - Get API keys in 5 minutes
- **[API Customization](./docs/API_CUSTOMIZATION.md)** - Detailed setup guide
- **[Installation](./docs/INSTALLATION.md)** - Full installation guide
- **[API Reference](./docs/API.md)** - Complete API documentation
- **[Deployment](./docs/DEPLOYMENT.md)** - Production deployment guide

## Troubleshooting

### No Results?
1. Check API keys in `.env`
2. Verify APIs are enabled in dashboards
3. Check backend logs: `npm run dev`
4. Test health: `curl http://localhost:5000/api/health`

### Rate Limit Errors?
1. Check free tier limits
2. Consider upgrading to paid plans
3. Implement request caching
4. Add throttling/rate limiting

### MongoDB Connection Failed?
1. Start MongoDB: `mongod`
2. Or use Docker: `docker-compose up`
3. Verify connection string in `.env`

## Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push and create PR

## License

MIT License - See LICENSE file

## Support

Have questions? 
- Check [documentation](./docs/)
- Open an issue on GitHub
- Contact maintainers

---

**Live Demo**: Coming soon!
**Repository**: https://github.com/alagbe003/search-engine
**API Docs**: http://localhost:5000/api/health (when running)
