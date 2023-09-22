@echo off
setlocal

set auth_url=<.envを参照>
set client_id=<.envを参照>
set email=alice_test@example.com
set username=alice_test
set password=Alicetest@1

echo Register user
curl -X POST "%auth_url%/dbconnections/signup" ^
  -H "Content-Type: application/json" ^
  -d "{""client_id"": ""%client_id%"",""email"":""%email%"",""password"": ""%password%"",""connection"": ""Username-Password-Authentication"",""username"":""%username%"",""name"":""%username%"",""nickname"": ""%username%""}"
echo.

endlocal
