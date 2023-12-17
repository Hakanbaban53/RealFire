@echo off

cd %TEMP%

set "FILENAME=RealFire-main.zip"
set "FOLDERPATH=RealFire-main"

if exist "%FOLDERPATH%"\* (
    rd /s /q %FOLDERPATH%
)

curl -LJo %FILENAME% https://github.com/Hakanbaban53/RealFire/archive/refs/heads/main.zip || (echo Failed to fetch Sweet_Pop^! theme && echo Exiting... && goto :eof)

tar -xvf %FILENAME% || echo.

del %FILENAME%

call "%FOLDERPATH%\programs\install.bat" %*

REM if exist "%FOLDERPATH%"\* (
REM     rd /s /q %FOLDERPATH%
REM )

REM exit \B
