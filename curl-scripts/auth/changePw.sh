# Curl for change Password request

apiUrl='https://tic-tac-toe-api-production.herokuapp.com'
URL_PATH="/change-password"

curl "${apiUrl}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${token}" \
  --header "Content-Type: application/json" \
  --data '{
      "passwords": {
        "old": "'"${oldpw}"'",
        "new":"'"${newpw}"'"
    }
  }'

echo
