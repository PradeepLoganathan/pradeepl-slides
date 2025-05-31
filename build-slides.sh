#!/bin/bash

# Clean the public directory
echo "Cleaning public directory..."
rm -rf public/*

# Ensure Marp CLI is installed
if ! command -v marp &> /dev/null
then
    echo "Error: Marp CLI is not installed. Please install it first."
    exit 1
fi

# Define paths
dark_mode_css="dark-mode.css"
dark_mode_js="dark-mode.js"
custom_theme="themes/pradeepl-slides-theme.css"

# Check if custom theme exists
if [ ! -f "$custom_theme" ]; then
    echo "Warning: Custom theme '$custom_theme' not found. Using default theme."
    theme_option=""
else
    echo "Found custom theme: $custom_theme"
    theme_option="--theme $custom_theme"
fi

# Iterate through Markdown files in content/slides
for presentation_dir in content/slides/*/
do
    presentation_name=$(basename "$presentation_dir")
    echo "Building presentation: $presentation_name"
    
    output_dir="public/$presentation_name"
    mkdir -p "$output_dir"

    # Build the presentation
    if [ -n "$theme_option" ]; then
        echo "Building with custom theme..."
        marp $theme_option "$presentation_dir/index.md" -o "$output_dir/index.html"
    else
        echo "Building with default theme..."
        marp "$presentation_dir/index.md" -o "$output_dir/index.html"
    fi
    
    if [ $? -ne 0 ]; then
        echo "Error: Failed to build $presentation_name. Skipping."
        continue
    fi

    # Rest of your existing code...
    images_dir="${presentation_dir}images"
    if [ -d "$images_dir" ]; then
        images_output="$output_dir/images"
        mkdir -p "$images_output"
        cp "$images_dir"/*.{jpg,jpeg,png,gif,svg} "$images_output" 2>/dev/null || true
        echo "Images copied for $presentation_name."
    fi

    # Copy theme and dark mode files
    if [ -f "$custom_theme" ]; then
        cp "$custom_theme" "$output_dir/"
    fi
    if [ -f "$dark_mode_css" ]; then
        cp "$dark_mode_css" "$output_dir/"
    fi
    if [ -f "$dark_mode_js" ]; then
        cp "$dark_mode_js" "$output_dir/"
    fi
done

echo "Slides built successfully!"

node generate-index.js
echo "Index created successfully!"