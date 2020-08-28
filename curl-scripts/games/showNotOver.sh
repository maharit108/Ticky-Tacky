# Curl for show running games request

apiUrl='https://tic-tac-toe-api-production.herokuapp.com'
URL_PATH="/games?over=false"

curl "${apiUrl}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${token}" \

echo
