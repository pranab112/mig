# Security Headers Configuration

## Important Note
Due to the static export configuration (`output: 'export'`), Next.js cannot inject custom headers automatically. These headers must be configured at the hosting/CDN level.

## Required Security Headers

### X-Frame-Options
Prevents clickjacking attacks by controlling whether the page can be embedded in frames.
```
X-Frame-Options: DENY
```

### X-Content-Type-Options
Prevents MIME type sniffing attacks.
```
X-Content-Type-Options: nosniff
```

### Referrer-Policy
Controls how much referrer information is shared.
```
Referrer-Policy: origin-when-cross-origin
```

### Permissions-Policy
Controls browser features that can be used.
```
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Content-Security-Policy
Prevents XSS attacks by controlling resource loading.
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-src 'none'
```

## Hosting Provider Configuration

### Vercel (_headers file)
Create a `public/_headers` file:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-src 'none'
```

### Netlify (_headers file)
Create a `public/_headers` file with the same content as Vercel.

### Apache (.htaccess)
```apache
<IfModule mod_headers.c>
    Header always set X-Frame-Options "DENY"
    Header always set X-Content-Type-Options "nosniff"
    Header always set Referrer-Policy "origin-when-cross-origin"
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
    Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-src 'none'"
</IfModule>
```

### Nginx
```nginx
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-src 'none'" always;
```

## Testing Headers
Use online tools to verify headers are properly configured:
- [Security Headers](https://securityheaders.com/)
- [Mozilla Observatory](https://observatory.mozilla.org/)

## Implementation Status
- ✅ XSS Protection: Implemented via DOMPurify
- ✅ Dependency Vulnerabilities: Fixed via npm updates
- ⚠️ Security Headers: Requires hosting-level configuration
- ✅ Build Process: Compatible with static export