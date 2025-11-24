# Security Headers Configuration for Static Export

Since this Next.js app uses `output: 'export'` for static hosting, security headers must be configured at the hosting/CDN level rather than in Next.js.

## Required Headers for Production

```nginx
# Nginx configuration example
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-src 'none'" always;
```

## Platform-Specific Setup

### Vercel
Create `vercel.json` in project root:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### Netlify
Create `_headers` file in `out/` directory:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: origin-when-cross-origin
```

### Cloudflare Pages
Configure in Cloudflare Dashboard → Rules → Transform Rules → HTTP Response Header Modification

## Verification
Test headers with: https://securityheaders.com/