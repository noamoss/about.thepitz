#!/bin/bash

# Image Optimization Script for The Pitz Studio
# This script optimizes images for web performance

echo "🖼️  Starting image optimization..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Please install it first:"
    echo "   Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "   macOS: brew install imagemagick"
    exit 1
fi

# Create optimized images directory
mkdir -p assets/optimized

# Optimize SVG files (if needed)
echo "📐 Optimizing SVG files..."
for svg in assets/icons/*.svg; do
    if [ -f "$svg" ]; then
        echo "   Optimizing: $svg"
        # SVG optimization (basic)
        cp "$svg" "assets/optimized/$(basename "$svg")"
    fi
done

# Optimize PNG files
echo "🖼️  Optimizing PNG files..."
for png in assets/*.png; do
    if [ -f "$png" ]; then
        echo "   Optimizing: $png"
        convert "$png" -strip -quality 85 "assets/optimized/$(basename "$png")"
    fi
done

# Create WebP versions
echo "🌐 Creating WebP versions..."
for img in assets/*.{png,jpg,jpeg}; do
    if [ -f "$img" ]; then
        filename=$(basename "$img" | cut -d. -f1)
        echo "   Creating WebP: $filename.webp"
        convert "$img" -quality 85 "assets/optimized/$filename.webp"
    fi
done

echo "✅ Image optimization complete!"
echo "📁 Optimized images saved to: assets/optimized/"
echo ""
echo "💡 Next steps:"
echo "   1. Update HTML to use optimized images"
echo "   2. Add WebP support with fallbacks"
echo "   3. Implement lazy loading" 