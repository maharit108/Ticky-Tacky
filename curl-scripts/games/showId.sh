# Curl for show all games request

# apiUrl="https://tic-tac-toe-api-production.herokuapp.com"
# URL_PATH="/games/:${id}"

# curl "${apiUrl}${URL_PATH}${_id}" \
curl "https://tic-tac-toe-api-production.herokuapp.com/games/${id}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${token}" \

echo
