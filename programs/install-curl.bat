@echo off

cd %TEMP%

set "VERSION=4.0.0"
set "FILENAME=RealFire-%VERSION%.tar.gz"
set "FOLDERPATH=RealFire-master"

if exist "%FOLDERPATH%"\* (
    rd /s /q %FOLDERPATH%
)

curl -LJo %FILENAME% xxx || (echo Failed to fetch RealFire^! theme && echo Exiting... && goto :eof)

tar -xvf %FILENAME% || echo.

del %FILENAME%

call "%FOLDERPATH%\programs\install.bat" %*

REM if exist "%FOLDERPATH%"\* (
REM     rd /s /q %FOLDERPATH%
REM )

REM exit \B
