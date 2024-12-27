@echo off

call :RequestAdminElevation "%~dpfs0" %* || goto:eof

goto :init

:init
    set "__NAME=RealFire Uninstaller"
    set "__VERSION=4.0.0"
    
    call :header
    
    set "APPLICATIONFOLDER=C:\Program Files\Mozilla Firefox"
    set "FIREFOXFOLDER=%APPDATA%\Mozilla\Firefox"
    set "CHROMEFOLDER=chrome"
    set "PROFILEFOLDER="
    
    REM Locate Firefox profiles.ini
    set "PROFILES_FILE=%FIREFOXFOLDER%\profiles.ini"
    if not exist "%PROFILES_FILE%" (
        echo Failed to locate profiles.ini in %FIREFOXFOLDER%
        echo Exiting...
        goto :end
    )

    echo.
    echo Profiles file found...
    for /f "delims=" %%i in ('findstr /rc:"Default=.*" %PROFILES_FILE%') do (
       set "i=%%i"
       set "i=!i:/=\!"
       set "PROFILENAMEDEF=!i:~8!"
       goto :continue
    )
    :continue
    
    REM Set profile folder
    set "PROFILEFOLDER=%FIREFOXFOLDER%\%PROFILENAMEDEF%"
    
    if not exist "%PROFILEFOLDER%" (
        echo Failed to locate Profile folder at %PROFILEFOLDER%
        echo Exiting...
        goto :end
    )

    cd "%PROFILEFOLDER%"
    echo.
    echo Uninstalling RealFire UwU from %cd%
    
    REM Remove chrome folder and restore backup if exists
    if exist "%CHROMEFOLDER%_bak" (
        echo Restoring backup folder %CHROMEFOLDER%_bak...
        rmdir /s /q "%CHROMEFOLDER%"
        move "%CHROMEFOLDER%_bak" "%CHROMEFOLDER%" || (
            echo Failed to restore backup folder %CHROMEFOLDER%_bak.
            goto :end
        )
    ) else (
        echo Removing %CHROMEFOLDER% folder...
        rmdir /s /q "%CHROMEFOLDER%"
    )
    
    REM Restore user.js backup if exists
    if exist "user.js.bak" (
        echo Restoring user.js.bak...
        move /y "user.js.bak" "user.js"
    ) else (
        echo Removing user.js link...
        del "user.js"
    )
    
    REM Optionally remove fx-autoconfig files
    set /p FXACREMOVE="Do you want to remove fx-autoconfig files? (Y/N): "
    if /i "%FXACREMOVE%"=="Y" (
        echo Removing fx-autoconfig files...
        rmdir /s /q "chrome\utils"
        del "programs\config.js"
        del "programs\mozilla.cfg"
        del "programs\config-prefs.js"
        del "programs\local-settings.js"
    )

    REM Optionally remove application files
    set /p APPREMOVE="Do you want to remove RealFire application files from %APPLICATIONFOLDER%? (Y/N): "
    if /i "%APPREMOVE%"=="Y" (
        echo Removing application files from %APPLICATIONFOLDER%...
        del "%APPLICATIONFOLDER%\config.js"
        del "%APPLICATIONFOLDER%\mozilla.cfg"
        del "%APPLICATIONFOLDER%\defaults\pref\config-prefs.js"
        del "%APPLICATIONFOLDER%\defaults\pref\local-settings.js"
    )

    echo.
    echo Uninstallation complete!

:end
    pause
    exit /B

:header
    echo %__NAME% v%__VERSION%
    echo This uninstaller will remove RealFire theme
    echo and restore your Firefox profile to its
    echo previous state.
    echo.
    goto :eof

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:RequestAdminElevation FilePath %* || goto:eof
::
:: By:   Cyberponk,     v1.5 - 10/06/2016 - Changed the admin rights test method from cacls to fltmc
::          v1.4 - 17/05/2016 - Added instructions for arguments with ! char
::          v1.3 - 01/08/2015 - Fixed not returning to original folder after elevation successful
::          v1.2 - 30/07/2015 - Added error message when running from mapped drive
::          v1.1 - 01/06/2015
::
:: Func: opens an admin elevation prompt. If elevated, runs everything after the function call, with elevated rights.
:: Returns: -1 if elevation was requested
::           0 if elevation was successful
::           1 if an error occured
::
:: USAGE:
:: If function is copied to a batch file:
::     call :RequestAdminElevation "%~dpf0" %* || goto:eof
::
:: If called as an external library (from a separate batch file):
::     set "_DeleteOnExit=0" on Options
::     (call :RequestAdminElevation "%~dpf0" %* || goto:eof) && CD /D %CD%
::
:: If called from inside another CALL, you must set "_ThisFile=%~dpf0" at the beginning of the file
::     call :RequestAdminElevation "%_ThisFile%" %* || goto:eof
::
:: If you need to use the ! char in the arguments, the calling must be done like this, and afterwards you must use %args% to get the correct arguments:
::      set "args=%* "
::      call :RequestAdminElevation .....   use one of the above but replace the %* with %args:!={a)%
::      set "args=%args:{a)=!%"
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
setlocal ENABLEDELAYEDEXPANSION & set "_FilePath=%~1"
  if NOT EXIST "!_FilePath!" (echo/Read RequestAdminElevation usage information)
  :: UAC.ShellExecute only works with 8.3 filename, so use %~s1
  set "_FN=_%~ns1" & echo/%TEMP%| findstr /C:"(" >nul && (echo/ERROR: %%TEMP%% path can not contain parenthesis &pause &endlocal &fc;: 2>nul & goto:eof)
  :: Remove parenthesis from the temp filename
  set _FN=%_FN:(=%
  set _vbspath="%temp:~%\%_FN:)=%.vbs" & set "_batpath=%temp:~%\%_FN:)=%.bat"

  :: Test if we gave admin rights
  fltmc >nul 2>&1 || goto :_getElevation

  :: Elevation successful
  (if exist %_vbspath% ( del %_vbspath% )) & (if exist %_batpath% ( del %_batpath% ))
  :: Set ERRORLEVEL 0, set original folder and exit
  endlocal & CD /D "%~dp1" & ver >nul & goto:eof

  :_getElevation
  echo/Requesting elevation...
  :: Try to create %_vbspath% file. If failed, exit with ERRORLEVEL 1
  echo/Set UAC = CreateObject^("Shell.Application"^) > %_vbspath% || (echo/&echo/Unable to create %_vbspath% & endlocal &md; 2>nul &goto:eof)
  echo/UAC.ShellExecute "%_batpath%", "", "", "runas", 1 >> %_vbspath% & echo/wscript.Quit(1)>> %_vbspath%
  :: Try to create %_batpath% file. If failed, exit with ERRORLEVEL 1
  echo/@%* > "%_batpath%" || (echo/&echo/Unable to create %_batpath% & endlocal &md; 2>nul &goto:eof)
  echo/@if %%errorlevel%%==9009 (echo/^&echo/Admin user could not read the batch file. If running from a mapped drive or UNC path, check if Admin user can read it.)^&echo/^& @if %%errorlevel%% NEQ 0 pause >> "%_batpath%"

  :: Run %_vbspath%, that calls %_batpath%, that calls the original file
  %_vbspath% && (echo/&echo/Failed to run VBscript %_vbspath% &endlocal &md; 2>nul & goto:eof)

  :: Vbscript has been run, exit with ERRORLEVEL -1
  echo/&echo/Elevation was requested on a new CMD window &endlocal &fc;: 2>nul & goto:eof
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
