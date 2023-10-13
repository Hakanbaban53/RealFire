@echo off

cd %TEMP%

set "FILENAME=RealFire-main.tar.gz"
set "FOLDERPATH=RealFire-main"

if exist "%FOLDERPATH%"\* (
    rd /s /q %FOLDERPATH%
)

curl -LJo %FILENAME% https://github.com/Hakanbaban53/RealFire/archive/refs/heads/main.tar.gz || (echo Failed to fetch RealFire^! theme && echo Exiting... && goto :eof)

tar -xvf %FILENAME% || echo.

del %FILENAME%

call %* "%FOLDERPATH%\programs\install.bat"

REM if exist "%FOLDERPATH%"\* (
REM     rd /s /q %FOLDERPATH%
REM )

REM exit \B
