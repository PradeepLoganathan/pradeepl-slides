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

# Define paths for global dark mode files
dark_mode_css="dark-mode.css"
dark_mode_js="dark-mode.js"

# Iterate through Markdown files in content/slides
for presentation_dir in content/slides/*/
do
    presentation_name=$(basename "$presentation_dir")
    echo "Building presentation: $presentation_name"
    
    output_dir="public/$presentation_name"
    mkdir -p "$output_dir"  # Create output directory

    # Build the presentation
    marp "$presentation_dir/index.md" -o "$output_dir/index.html"
    if [ $? -ne 0 ]; then
        echo "Error: Failed to build $presentation_name. Skipping."
        continue
    fi

    # Check and copy images if they exist
    images_dir="${presentation_dir}images"
    if [ -d "$images_dir" ]; then
        images_output="$output_dir/images"
        mkdir -p "$images_output"  # Create the 'images' folder if needed
        cp "$images_dir"/*.{jpg,jpeg,png,gif,svg} "$images_output" 2>/dev/null || true
        echo "Images copied for $presentation_name."
    else
        echo "No images directory found for $presentation_name."
    fi

    # Copy global dark mode files to the output directory
    cp "$dark_mode_css" "$output_dir/"
    cp "$dark_mode_js" "$output_dir/"
done

echo "Slides built successfully!"
