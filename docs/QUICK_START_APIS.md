# Quick API Setup

## Get Free API Keys (5 minutes)

### 1️⃣ Google Custom Search
- Visit: https://cse.google.com/cse/
- Create new search engine
- Get Engine ID from dashboard
- Visit: https://console.cloud.google.com/
- Enable Custom Search API
- Create API Key

### 2️⃣ Bing Search
- Visit: https://portal.azure.com/
- Create "Bing Search v7" resource
- Copy API Key from Keys section
- Free: 3 TPS, 1,000 transactions/month

### 3️⃣ NewsAPI
- Visit: https://newsapi.org/
- Sign up (free)
- Copy API Key from dashboard
- Free tier available

### 4️⃣ Unsplash Images
- Visit: https://unsplash.com/developers
- Create application
- Get Access Key
- Free: 50 requests/hour

### 5️⃣ Pixabay Images
- Visit: https://pixabay.com/api/
- Sign up
- Get API Key
- Free: 45 requests/hour

### 6️⃣ DuckDuckGo & Wikipedia
- ✅ No API keys needed!
- Public endpoints
- Free unlimited access

---

## Setup in 3 Steps

### Step 1: Update .env
```bash
cd backend
cp .env.example .env
```

Edit `.env` and add your keys:
```
GOOGLE_SEARCH_API_KEY=your_key
GOOGLE_SEARCH_ENGINE_ID=your_id
BING_SEARCH_API_KEY=your_key
NEWS_API_KEY=your_key
UNSPLASH_API_KEY=your_key
PIXABAY_API_KEY=your_key
MONGO_URI=mongodb://root:password@localhost:27017/search-engine
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Server
```bash
npm run dev
```

---

## Test the APIs

```bash
# Universal search
curl "http://localhost:5000/api/search?q=javascript"

# Google search
curl "http://localhost:5000/api/search/web?q=javascript&source=google"

# News search
curl "http://localhost:5000/api/search/news?q=technology"

# Image search
curl "http://localhost:5000/api/search/images?q=nature"

# Search suggestions
curl "http://localhost:5000/api/suggestions?q=java"

# Health check
curl "http://localhost:5000/api/health"
```

---

## Features Enabled

✅ Google Custom Search - Web search  
✅ Bing Search - Web search  
✅ DuckDuckGo - Web search (no key)  
✅ NewsAPI - News articles  
✅ Wikipedia - Encyclopedia entries  
✅ Unsplash - High-quality images  
✅ Pixabay - Free stock images  
✅ Real-time suggestions  
✅ Search history tracking  
✅ Search analytics  

---

## Troubleshooting

**No results?**
- Check API keys in .env
- Verify APIs are enabled
- Check MongoDB connection
- View backend logs

**Rate limit errors?**
- Use free tier limits
- Implement caching
- Add request throttling
- Upgrade to paid plans

**MongoDB error?**
- Start MongoDB: `mongod`
- Or use Docker: `docker-compose up`

---

For detailed setup, see [API_CUSTOMIZATION.md](./API_CUSTOMIZATION.md)
