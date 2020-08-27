# Curl for Sign in request

apiUrl='https://tic-tac-toe-api-production.herokuapp.com'
URL_PATH="/sign-in"

curl "${apiUrl}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
      "credentials": {
        "email": "'"${email}"'",
        "password":"'"${password}"'"
    }
  }'

echo
