#!/bin/bash

# Deployment script for The Pitz Studio
# This script replaces the analytics ID before deployment

echo "🚀 Starting deployment process..."

# Check if analytics ID is provided
if [ -z "$GA_MEASUREMENT_ID" ]; then
    echo "❌ Error: GA_MEASUREMENT_ID environment variable not set"
    echo "Please set it with: export GA_MEASUREMENT_ID=G-2EWWZWLJVF"
    exit 1
fi

# Backup original file
cp index.html index.html.backup

# Replace analytics ID
sed -i "s/GA_MEASUREMENT_ID/$GA_MEASUREMENT_ID/g" index.html

echo "✅ Analytics ID replaced: $GA_MEASUREMENT_ID"

# Optional: Add git commands
echo "📝 Ready to commit and push..."
echo "Run these commands:"
echo "  git add ."
echo "  git commit -m 'Update analytics ID'"
echo "  git push origin main"

# Restore backup after deployment
echo "🔄 To restore original file: cp index.html.backup index.html" 