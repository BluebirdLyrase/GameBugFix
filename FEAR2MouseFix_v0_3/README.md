# What is this?

This fix makes FEAR2 use raw mouse input and removes the game's deadzone and sensitivity problems. It is easy to install and use and does not require any external configuration.

# Overview

## Description

While the mouse controls are pretty responsive, FEAR2 suffers from a deadzone for small movements, as well as an unusual high sensitivity, even on the lowest settings.

This fix removes these problems by acquiring raw mouse input and injecting it directly into the game's input function.

## Features

* Raw mouse input
* No additional smoothing or positive/negative mouse acceleration
* Configuration via the ingame settings as usual
* Simple installation and usage without any external configuration

# Instructions

## Supported Versions

This fix relies on the latest, fully patched executables of the supported versions. Older versions or ones that otherwise have been tempered with might not work.

* Steam/Retail
* GOG

## Install

The fix does not make any permanent changes to the game or the system and can easily be removed (see below).

1. Extract the file `X3DAudio1_5.dll` to your main game folder. For example: `"C:\Program Files (x86)\Steam\steamapps\common\FEAR2\"`
2. Start the game like you would normally, for example directly through Steam or Origin

## Uninstall

1. Remove or rename the `X3DAudio1_5.dll` from the folder of the game.

## How To Use

After the installation the fix does not require any additional treatment. Just launch and configure the game as usual.

# Additional Information

## What You Should Know

This fix is essentially a hack and relies on the layout of the specific executable. There may be crashes or unexpected issues. Feel free to provide feedback so that the problems can get fixed.

Since the fix consists of an executable DLL-File, I could have put any harmful shenanigans in there. You just have to trust me that the file is clean.

If you don't -- and why should you -- feel free to use a meta online virus scanner like VirusTotal to verify the file. Be aware however, that because the fix uses "hacking techniques" such as injection and hooking, it could trigger anti-virus software without being harmful.

## Known Issues

The mouse controls of the mech are currently unaffected by the fix and might use a higher sensitivity than the rest of the game. This should not be a big issue, since those sections are quite short and comparatively easy.

## Contact And Support

If you like this fix and want to support the development or show your appreciation, you can find more information on my [website](https://methanhydrat.wordpress.com/). There you can also find out more about other fixes that I have done and means to contact me if you have a question, want to provide feedback, bug reports or suggestions.

## Version History

### Beta 0.3:
* Added support for GOG version
* The fix is now disabled when controlling the mech. This is a temporary workaround until a proper fix for the mech controls is available

### Beta 0.2:
* The fix now uses a `X3DAudio1_5.dll` instead of the `d3d9.dll` for loading, to increase the compatibility with other fixes

### Beta 0.1:
* Initial release