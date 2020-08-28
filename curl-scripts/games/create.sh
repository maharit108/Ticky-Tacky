# Curl for create game request

apiUrl='https://tic-tac-toe-api-production.herokuapp.com'
URL_PATH="/games"

curl "${apiUrl}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Bearer ${token}" \
  --header "Content-Type: application/json" \
  --data '{}'

echo
