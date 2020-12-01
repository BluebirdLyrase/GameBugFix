# TL;DR

The *DirectInputFpxFix* fixes an input related FPS drop/slowdown problem that occurs in FEAR, its expansions, Condemned: Criminal Origins and other games. It is easy to install and does not require manual disabling of HID devices.

Quick start guide:

1. Extract the file `dinput8.dll` to the folder containing the executable of the game. For example: `"C:\Program Files (x86)\Steam\steamapps\common\FEAR Ultimate Shooter Edition"`
2. Start the game like you would normally, for example directly through Steam or GOG Galaxy.

# Features 

The *DirectInputFpsFix* fixes a bug that causes the FPS to severely drop after a few minutes of play. This problem is probably most widely known in regards to the game FEAR and often occurs in conjunction with the usage of Logitech devices.

However, the problem also crops up in other games using the same engine, such as the FEAR expansions or Condemned: Criminal Origins and with non-Logitech hardware configurations. A similar problem has also been reported to occur in other titles, like Prototype. 

Although this issue can often be fixed by disabling most/all HID-Devices in the device manager, it is bothersome to do so and lately some people reported that that solution does not even work at all anymore, especially on machines running Windows 10.

# Instructions

## Supported Games

The fix is agnostic towards the game that uses it and should therefore work with all versions of a supported game, including the Steam, GOG and retail versions.

* Confirmed:
    + FEAR and its expansions
    + Condemned: Criminal Origins
 
* Supposedly:
    + Prototype
    + Kane & Lynch: Dead Men

Feel free to provide feedback if the DLL works on other games as well.

## Install

The fix does not make any permanent changes to the game or to Windows and can easily be removed.

1. Extract the file `dinput8.dll` to the folder containing the executable of the game. For example: `"C:\Program Files (x86)\Steam\steamapps\common\FEAR Ultimate Shooter Edition"`*
2. Start the game like you would normally, for example directly through Steam or GOG Galaxy.

*Note that for the FEAR expansions the fix also has to be installed into the corresponding sub-folder of the game

## Uninstall

1. Rename or remove the `dinput8.dll` from the folder of the game.

# Known Issues

There are currently no known issues with the fix.

# Additional Information

## Antivirus Software

Since this mod consists of an executable DLL file that uses "hacking techniques" such as injection and hooking, it could be classified as malicious by antivirus software. In that case, it might be necessary to add an exception rule to the scanner.

If you lack the trust in random people on the internet -- and I would not blame you -- feel free to use a meta online virus scanner like VirusTotal to verify the file.

## Loading Other Fixes/Mods/Injectors

To increase the compatibility with other mods or injectors that are using a wrapper DLL, this fix offers two methods for remote loading of additional files. Note that there might still be compatibility issues between the different fixes, mods or injectors that have nothing to do with the loading process.

### File method:

The mod will load another `dinput8.dll` automatically if it has the name `dinput8.dll`. Just rename the DLL you want to load accordingly. Using this method will lead to an error if the renamed DLL is not itself a `dinput8.dll`.

### Folder method:

The mod will also automatically load all DLLs regardless of their names in a `dinput8` sub-directory. Just create a corresponding folder in the install directory of the mod. This is the only way to load multiple (conflicting) files.

## How This Works

The fix is implemented using a common technique known as *DLL hooking*.

User input in games like FEAR can be realized via DirectInput, an API by Microsoft for interacting with HID-Devices. The library is ancient and should no longer be used today, because there are other ways to get mouse and keyboard input, especially for games.

The FPS drops happen because the thread that runs DirectInput massively slows down after a while (as can be seen in tools like ProcessExplorer).

If an application uses a library like DirectInput, it needs a so-called DLL (dynamic-link library) where the functionality of the library is stored. In many cases, especially for libraries provided by Microsoft, these DLLs usually reside in the Windows folder.  

However, there is an order of how an application searches for the DLLs it needs. Since the DLL of the fix gets copied into the main folder of the application and has the same name of a DLL needed by the game (the one of DirectInput), it gets loaded instead of the one in the Windows folder.

This means that all calls to DirectInput go through the Hook-DLL and can either be directed to the original DLL in the Windows folder or changed as necessary. This also allows some insight in how exactly the library is used by the game.

It turned out that some games not only unnecessarily register all HID-devices, they also call several functions every frame that usually only should be called once during initialization. The latter seems to apply only to devices that are not keyboards or mice. This eventually leads to circumstances where a lot of time is spent opening and closing device connections.

The fix changes the DirectInput initialization in such a way that only keyboard and pointer devices get registered.

# Contact And Support

If you like this mod and want to support the development or show your appreciation with a donation, you can find more information on my [website](https://methanhydrat.wordpress.com/). There you can also find out more about other mods that I have done and means to contact me if you have a question, want to provide feedback, bug reports and suggestions.

# Version History

## v1.0:
* Fixed a compatibility problem that prevented games to start on some systems
* Added support for additional games
* Updated the loading system to add support for remote loading of additional DLLs for increased compatibility with other mods and fixes (see *Loading Other Fixes/Mods/Injectors*)

## v0.2:
* Statically linked the Microsoft Visual C++ Runtime so that users no longer have to install the corresponding Visual C++ Redistributable package.

## v0.1:
* Initial public release