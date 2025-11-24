// Hostinger Node.js entry point
// This file tells Hostinger this is a Node.js application

const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Starting AA.MIG deployment on Hostinger...');

// Check if we're in production and need to build
if (process.env.NODE_ENV === 'production' || !fs.existsSync('./out')) {
  console.log('📦 Building static site...');

  exec('npm run build', (error, stdout, stderr) => {
    if (error) {
      console.error(`Build error: ${error}`);
      return;
    }
    console.log('✅ Build completed successfully!');
    console.log('📂 Static files generated in ./out directory');

    // For Hostinger, we need to serve the static files
    console.log('🌐 Ready to serve from ./out directory');
  });
} else {
  console.log('✅ Using existing build in ./out directory');
}

// Export for Hostinger
module.exports = {
  name: 'AA.MIG',
  type: 'static',
  buildCommand: 'npm run build',
  outputDirectory: 'out'
};