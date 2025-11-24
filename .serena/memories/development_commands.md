# MindIsGear Development Commands

## Essential Commands

### Development Workflow
```bash
# Start development server
npm run dev
# Runs on http://localhost:3000 with hot reload

# Production build
npm run build
# Builds optimized production version

# Static export (for hosting)
npm run export
# Note: Export happens automatically during build
# Static files generated in out/ directory

# Code quality
npm run lint
# ESLint with Next.js configuration
# Zero warnings or errors required

# Start production server (if needed)
npm run start
# Serves production build locally
```

### Development Best Practices
```bash
# Before working on project
npm install          # Ensure dependencies are up to date
npm run build        # Verify build works
npm run lint         # Check code quality

# After completing work
npm run build        # Ensure build still works
npm run lint         # Verify no new lint issues
```

## Task Completion Workflow

### When Task is Complete:
1. **Build Check**: `npm run build` - Must complete without errors
2. **Lint Check**: `npm run lint` - Must have zero warnings/errors  
3. **Type Check**: Already validated during build process
4. **Manual Test**: Check functionality in development mode

### Content Updates:
```bash
# After adding/editing MDX content
npm run build        # Regenerates static pages
# Content is automatically processed and included
```

## Deployment Commands

### Static Hosting (Recommended)
```bash
npm install
npm run build        # Generates out/ directory
# Deploy out/ directory to hosting provider
```

### Testing Deployment Locally
```bash
# Serve static export locally
npx serve out/
# Test the actual static export before deploying
```

## System Commands (macOS)

### File Management
- `ls` - List directory contents
- `cd <directory>` - Change directory
- `mkdir <name>` - Create directory
- `rm <file>` - Remove file
- `cp <source> <dest>` - Copy file

### Text Operations  
- `grep <pattern> <file>` - Search in files
- `find . -name <pattern>` - Find files by name
- `cat <file>` - Display file contents
- `head <file>` - Show first lines
- `tail <file>` - Show last lines

### Git Operations
- `git status` - Check repository status
- `git add .` - Stage all changes
- `git commit -m "message"` - Commit changes
- `git push` - Push to remote repository
- `git pull` - Pull from remote repository

## Project-Specific Notes
- **Node.js 18+** required
- **No test scripts** currently configured
- **Static export** is the primary deployment method
- **Environment variables** optional (see .env.example)
- **Hot reload** works in development mode
- **TypeScript strict mode** enabled - all type errors must be resolved