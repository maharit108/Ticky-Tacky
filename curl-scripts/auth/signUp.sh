# Curl for Sign up request

apiUrl='https://tic-tac-toe-api-production.herokuapp.com'
URL_PATH="/sign-up"

curl "${apiUrl}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
      "credentials": {
        "email": "'"${email}"'",
        "password":"'"${password}"'",
        "password_confirmation": "'"${password}"'"
    }
  }'

echo
