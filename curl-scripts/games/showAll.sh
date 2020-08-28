# Curl for show all games request

apiUrl='https://tic-tac-toe-api-production.herokuapp.com'
URL_PATH="/games"

curl "${apiUrl}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${token}" \

echo
