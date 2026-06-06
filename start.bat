@echo off
cd /d "%~dp0"
echo.
echo  Learn and Task Tracker
echo  ======================
echo.
echo  Starting server on port 8888...
echo  Open in browser:  http://localhost:8888
echo.
echo  (If this fails, double-click OPEN.bat instead - no server needed)
echo  Press Ctrl+C to stop
echo.
python -m http.server 8888
if errorlevel 1 (
  echo.
  echo  Server failed. Try OPEN.bat to open the app directly.
  pause
)
