#!/bin/bash
# submit-indexnow.sh — Submit all sitemap URLs via IndexNow protocol
# Usage: ./scripts/submit-indexnow.sh

set -euo pipefail

DOMAIN="https://bmi-imc.com"
KEY="6610dc5e8a7048a5a0aa3218b8deac9e"

echo "Fetching sitemap..."
ALL_URLS=$(curl -s "$DOMAIN/sitemap.xml" | grep -o '<loc>[^<]*</loc>' | sed 's/<loc>//g;s/<\/loc>//g' | sort -u)
TOTAL=$(echo "$ALL_URLS" | wc -l | tr -d ' ')
echo "Found $TOTAL URLs. Submitting all via IndexNow..."

JSON=$(echo "$ALL_URLS" | jq -R -s -c "{host: \"bmi-imc.com\", key: \"$KEY\", urlList: split(\"\n\") | map(select(length > 0))}")

RESPONSE=$(curl -s -X POST \
  "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "$JSON" \
  -w "\nHTTP_STATUS:%{http_code}")

HTTP_CODE=$(echo "$RESPONSE" | grep -o 'HTTP_STATUS:[0-9]*' | cut -d: -f2)
BODY=$(echo "$RESPONSE" | sed '/HTTP_STATUS/d')

case "$HTTP_CODE" in
  200) echo "Success! $TOTAL URLs submitted and accepted." ;;
  202) echo "Success! $TOTAL URLs submitted (accepted for processing)." ;;
  400) echo "Error: Bad request. $BODY" ;;
  403) echo "Error: Key not valid. $BODY" ;;
  422) echo "Error: Invalid URLs. $BODY" ;;
  429) echo "Error: Too many requests. Try again later." ;;
  *)   echo "Unexpected response (HTTP $HTTP_CODE): $BODY" ;;
esac
