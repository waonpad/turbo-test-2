@echo off
setlocal

set auth_url=<.envを参照>
set client_id=<.envを参照>
set client_secret=<.envを参照>
set username=alice_test@example.com
set password=Alicetest@1

echo Get Token
curl -s --request POST ^
  --url %auth_url%/oauth/token ^
  --header "content-type: application/x-www-form-urlencoded" ^
  --data grant_type=password ^
  --data username=%username% ^
  --data password=%password% ^
  --data client_id=%client_id% ^
  --data client_secret=%client_secret% | jq -r

echo.

endlocal
