#!/bin/bash

# Script to format images for Instagram.
#
# This script takes a directory as an argument and, for each image inside the directory,
# creates a new image with the format required by Instagram (1080x1350, black background, centered).
#
# The new image will have "-IG" appended to its filename before the extension.
#
# Usage: ./format-image-instagram.sh <directory_path>
#
# Requires: ImageMagick (magick command)

set -euo pipefail

# Validate that the user passed a folder argument
if [[ $# -eq 0 ]]; then
  echo "Error: No directory provided."
  echo "Usage: $0 <directory_path>"
  exit 1
fi

TARGET_DIR="$1"

if [[ ! -d "$TARGET_DIR" ]]; then
  echo "Error: '$TARGET_DIR' is not a directory or does not exist."
  exit 1
fi

echo "Processing images in directory: $TARGET_DIR"
echo "------------------------------------------"

PROCESSED_FILES=()
SKIPPED_FILES=()

# Iterate through files in the directory
# Using nullglob to handle cases with no matching files
shopt -s nullglob

for file_path in "$TARGET_DIR"/*; do
  # Skip if it's a directory
  if [[ -d "$file_path" ]]; then
    continue
  fi

  filename=$(basename -- "$file_path")
  extension="${filename##*.}"
  filename_no_ext="${filename%.*}"

  # Check if the file is an image by extension (case-insensitive)
  # Basic image extensions for web
  if [[ "$extension" =~ ^(png|jpg|jpeg|webp|tiff|bmp)$ ]]; then
    # Skip if it already has the -IG suffix to avoid re-processing or infinite loops if re-run
    if [[ "$filename_no_ext" == *"-IG" ]]; then
       SKIPPED_FILES+=("$filename (already has -IG suffix)")
       continue
    fi

    output_filename="${filename_no_ext}-IG.${extension}"
    output_path="${TARGET_DIR}/${output_filename}"

    echo "Processing: $filename -> $output_filename"

    # Execute the magick command
    if magick "$file_path" -gravity center -background black -resize 1080x1350 -extent 1080x1350 "$output_path"; then
      PROCESSED_FILES+=("$filename")
    else
      echo "Error processing $filename"
      SKIPPED_FILES+=("$filename (magick command failed)")
    fi
  else
    SKIPPED_FILES+=("$filename (not a supported image format)")
  fi
done

echo ""
echo "Summary:"
echo "------------------------------------------"
echo "Processed files:"
if [[ ${#PROCESSED_FILES[@]} -eq 0 ]]; then
  echo "  None"
else
  for file in "${PROCESSED_FILES[@]}"; do
    echo "  - $file"
  done
fi

echo ""
echo "Skipped/Not processed files:"
if [[ ${#SKIPPED_FILES[@]} -eq 0 ]]; then
  echo "  None"
else
  for file in "${SKIPPED_FILES[@]}"; do
    echo "  - $file"
  done
fi
