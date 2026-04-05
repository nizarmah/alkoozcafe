#!/bin/bash
# fetch-menu.sh — Download menu data from Sanity CMS
#
# Usage:
#   cd frontend
#   bash fetch-menu.sh
#
# This fetches the full menu (categories + items + prices) from Sanity
# and saves it as menu.json. Commit the updated menu.json to deploy.

SANITY_PROJECT_ID="hg675kdy"
SANITY_DATASET="production"
API_VERSION="2024-01-01"

QUERY='*[_type == "menu"][0]{
  categoryList[]->{
    name{nameArabic,nameEnglish},
    itemList[]->{
      name{nameArabic,nameEnglish},
      priceList[]{amount,currency}
    }
  }
}'

ENCODED_QUERY=$(python3 -c "import urllib.parse, sys; print(urllib.parse.quote(sys.argv[1]))" "$QUERY")

curl -s "https://${SANITY_PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${SANITY_DATASET}?query=${ENCODED_QUERY}" \
  | python3 -c "import sys, json; print(json.dumps(json.load(sys.stdin)['result'], indent=2, ensure_ascii=False))" \
  > menu.json

echo "Menu data saved to menu.json"
