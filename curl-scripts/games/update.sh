# Curl for update game request

apiUrl='https://tic-tac-toe-api-production.herokuapp.com'
URL_PATH="/games/${id}"

curl "${apiUrl}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${token}" \
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "cell": {
      "index": 1,
      "value": "x"
    },
    "over": false
  }
}'

echo
