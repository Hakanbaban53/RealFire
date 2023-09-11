@echo off

cd %TEMP%

set "VERSION=0.0.1"
set "FILENAME=RealFire-%VERSION%.tar.gz"
set "FOLDERPATH=RealFire-master"

if exist "%FOLDERPATH%"\* (
    rd /s /q %FOLDERPATH%
)

curl -LJo %FILENAME% https://github.com/Hakanbaban53/RealFire/archive/refs/heads/master.tar.gz || (echo Failed to fetch RealFire^! theme && echo Exiting... && goto :eof)

tar -xvf %FILENAME% || echo.

del %FILENAME%

call "%FOLDERPATH%\programs\install.bat" %*

REM if exist "%FOLDERPATH%"\* (
REM     rd /s /q %FOLDERPATH%
REM )

REM exit \B
