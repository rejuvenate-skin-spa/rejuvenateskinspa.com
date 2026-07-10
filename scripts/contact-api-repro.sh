#!/usr/bin/env bash
# Local repro for POST /api/contact (dev only: empty turnstile allowed).
# Usage: ./scripts/contact-api-repro.sh [BASE_URL]
# Example: ./scripts/contact-api-repro.sh http://localhost:3000

set -e
BASE_URL="${1:-http://localhost:3000}"
# startedAt must be at least 3s in the past for timing gate
STARTED_AT=$(($(date +%s) - 5))000

echo "POST $BASE_URL/api/contact"
curl -s -w "\n\nHTTP_STATUS:%{http_code}\n" -X POST "$BASE_URL/api/contact" \
  -H "Content-Type: application/json" \
  -H "Origin: $BASE_URL" \
  -d "{
    \"name\": \"Test User\",
    \"email\": \"test@example.com\",
    \"phone\": \"4805551234\",
    \"message\": \"Short test message for local repro.\",
    \"contact_hp\": \"\",
    \"startedAt\": $STARTED_AT,
    \"turnstileToken\": \"\"
  }" | tee /tmp/contact-repro.out

echo ""
grep -E "HTTP_STATUS|ok|error|code" /tmp/contact-repro.out || true
