# Curl for Delete request

apiUrl='https://tic-tac-toe-api-production.herokuapp.com'
URL_PATH="/sign-out"

curl "${apiUrl}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${token}" \

echo
