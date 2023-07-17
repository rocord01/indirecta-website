---
sidebar_position: 7
---

# 🏬 Applications

## Core Apps
Indirecta ships each iComm or communicator device with roughly 6 default applications, these applications are called core apps, similiar to GNOME Desktop Environment's Core and Circle apps.  
This section aims to describe best all the core applications.  
More complex core applications like the Radiocomm app can have their own page.

# 🛰️ Radiocomm `Radio`

<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/radiocomm_1.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/radiocomm_2.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/radiocomm_3.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/radiocomm_4.png" width="200px"/>

>Radio-like encrypted messaging app made with ❤️ by Indirecta  
>Allows the user to change frequency up/down 1/.5 MHz, messages are sent in different MessagingService topics depending on frequency, and encrypted with frequency and a key derived from an optional secret using [Indirecta's public encryption algorithm](https://github.com/Indirecta-Technologies/indirectaSEA)  

:::danger

As string encryption is also used on messages without custom keys using their frequency, the Roblox filter cannot be implemented, and we are not responsible for inadequate usage of this application among common game players and unexperienced staff.  
You can GET BANNED from Roblox for using unfiltered chats.  
We have implemented a setting `ExplicitFiltering` in both the Client and Server scripts (both must be the same) allowing game developers to disable all encryption options and techniques that is turned on by default in versions >1.3.7

:::

- Use mouse scroll wheel to scroll, if not available (disabled by group/developer), use the `UP` and `DOWN` iComm Keys  
- When the app is launched, an extension of the status bar (macro title) featuring PTT/Mic status and current frequency
- For developers or advanced users, the custom iSEA String Key option in the freq. menu can be toggled using `LFN`; there is also a debug menu featuring experimental data that can be toggled using `RFN`
- Since the PTT/Microphone message capture technique uses Roblox's .Chatted event, when sending a message using Radiocomm, it will also be shown in Roblox chat. That is why we suggest game developers who use Radiocomm to remove chat history, allowing only bubble chat (your messages will still be seen if you're close, but it's also realistic this way)
- In a recent update, Radiocomm has received support for Roblox's new TextChatService, which allows for messages to be intercepted. Switch to TextChatService for a more suited radio experience.
- Features a configurable secondary unencrypted SOS Frequency that is always received by devices on other frequencies and only transmittable on it's own frequency. By default `112.7 MHz`

# 🧭 Compass `Compass`

<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/compass_1.png" width="200px"/>

>Basic application displaying current camera orientation using `Camera.CoordinateFrame.LookVector`   
>Displays camera orientation in 3 ways, using labels for each heading, a label for the orientation in degrees, and a compass arrow.

# 🗺️ Map `Map`

<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/map_1.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/map_2.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/map_3.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/map_4.png" width="200px"/>

>Map application made with ❤️ by Indirecta  
>Loads 500 instances at a time to prevent crashes, calculates time took from 1 lag spike to the other (experimental)  
>Displays map in 3 modes, one display a blue player indicator with a compass indicator, the other rotating the map directly dependign on the compass orientation, and the last being a free D-PAD navigation mode; the modes are toggled using `LFN`  
>Also allows for waypoints to be added to the map (in the module configuration, or by editing existing ones using FOSDebug), and loads all of the current server's players' position using colored indicators
>Displays in the bottom left of the screen an indicator depicting the width of the map shown in real world units.

# 🔦 Torch/Flashlight `Torch`

<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/flashlight_1.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/flashlight_2.png" width="200px"/>

>Core application with tool flashlight peripheral integration  
>Allows 5 different flashlight on-off intervals, 5 flashlight brightness levels (brightness-range tradeoff configurations) and an emergency SOS interval  
>As iComm developers may develop directly with the iComm firmware (GUI) directly in StarterGui, without it being linked to any hardware (tool that toggles GUI), the Torch app displays a warning screen when it detects that there isn't any iComm tool or flashlight linked as a peripheral to use

# 📶 NFC/Near Field Communiation `NFC`

<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/nfc_1.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/nfc_2.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/nfc_3.png" width="200px"/>

>Core application with tool nfc peripheral integration  
>Allows client to transmit any data (string) from client to server and receive it from other clients (through a server side script integration similar to Radiocomm)
>As iComm developers may develop directly with the iComm firmware (GUI) directly in StarterGui, without it being linked to any hardware (tool that toggles GUI), the NFC app displays a warning screen when it detects that there isn't any iComm tool or NFC antenna linked as a peripheral to use

# 📈 Sensors `AtmosData`

<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/atmosdata_1.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/atmosdata_2.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/atmosdata_3.png" width="200px"/>

>Application displaying in a scrollable list all auto-updating iComm Sensor Updates.  
>Occasionally displays readings using colored progress bars, graphs, and custom units.

- Use mouse scroll wheel to scroll, if not available (disabled by group/developer), use the `UP` and `DOWN` iComm Keys  
- When the app is launched, an extension of the status bar featuring ping connectivity bars and a favorite measurement is added, that is configurable through the application module configuration

# 🛩️ Attitude `AttitudeIndicator`

<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/attitude_1.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/attitude_2.png" width="200px"/>

>Application displaying iComm sensor attitude data as artifical horizon/gyro/attitude indicator. Useful for Ro-Aviation  
>Displays X and Z orientation  

- There is no in-app interaction. Press `Back` or `Menu` to exit after usage.  
- If app use-case is too specific, you are free to delete the app module or move it somewhere to hide the app.

# 🐞 Indirecta Free Open Source Device Debug Kit `FOSDebug`
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/fosdebug_1.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/fosdebug_2.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/fosdebug_3.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/fosdebug_4.png" width="200px"/>

>Application displaying in a scrollable list all loaded applications, it is heavily in development, and not user friendly as it was designed as a developer kit accessory only.  
>It allows developers to select applications, and edit live module data such as sensor configuration, app name, icon, soft keys, etc. without interrupting the playtest

- The user is greeted with a red on black selection menu. Use the `UP` and `DOWN` iComm Keys to scroll and `OK` to choose.  The only choice available on the current version is the Applications debug menu. 
- After selecting the Applications menu, the user can scroll using the previous keys or the mouse scroll wheel, and select an application.
- After selecting an application, the user will be able to edit live module "self" data such as AppInfo, Configuration strings and booleans.
- An error simulator tool and a keyboard testing tool have been since added to the debug kit, along with an option that automatically opens the Roblox console

## Circle Apps
The iComm FOSD's GitHub page features download pages for all official but non-essential "Circle" Apps described below.
This section aims to describe best all the Circle applications that aren't included by default in iComm Releases.  

# 🔐 2FA `2fac`
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/2fa_1.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/2fa_2.png" width="200px"/>

>2 factor authenticator similar to Google Authenticator and Authy. Generates one time passcodes depending on a preconfigured secret, usable with other 2fa enabled products like
>Indirecta TagRead readers, and even online services like Discord!

- The main page displays all available buttons with chosen emojies, and a circular progress bar representing time left.
- Clicking on one of the circular progress bar buttons leads to the code page, where the full name, emoji, code and progress bar are shown.
- Pressing back will return to the main page.

# 📚 Books `Books`
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/books_1.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/books_2.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/books_3.png" width="200px"/>

> Experimental Book Reader Application for the iComm

# 🌸 C's GOL `ConwaysGOL`
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/cgol_1.png" width="200px"/>

> Conway's Game of Life simulation for the iComm.
> Ported from an uncopylocked CGOL Game released on the devforum.

# ❔ Calibrator `EMFCalibrator`
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/emfcalibrator_1.png" width="200px"/>

> EMF Calibrator for tools with limited indicator LEDs like the Indirecta Handheld EMF Tester.

- Calibrates values using softkeys and function keys.
- Uses the Sensors module to test EMF

# 🕹️ LuaGB `LuaGB`
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/luagb_1.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/luagb_2.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/luagb_3.png" width="200px"/>

> A port/fork of the rLuaGB Project to the iComm

- Keypress Up Down mechanics are different, TO:DO Use Up and Down events instead of simulating like in FOSDebug Keytest App.

# 🎹 Keyboard `Piano`
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/piano_1.png" width="200px"/>

> A musical keyboard "game" application

- Use the soft keys to transpose octave

# ❔ Sprint Pager `RecordSprint`
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/sprint_1.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/sprint_2.png" width="200px"/>

> A port of the record Sprint Pager protocol to the iComm with multipage and notification functionality.

- The inside the of the app (module) is structured similarly to that of a sprint pager tool, which makes setup the same as regular devices.

# ❔ REMiner `RemoteEventMiner`
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/reminer_1.png" width="200px"/>

> A highly experimental "crypto miner" simulation that does cool stuff with hashes and remote event traffic.
> Contains inside a server mutex that assigns jobs to all clients, it does not send out rewards.

- Press the START OK button to start handling jobs

# 🌙 Sun & Moon `SunMoon`
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/sunmoon_1.png" width="200px"/>

> Experimental application that could have been a core app. Displays a small sun and moon chart with some info that is currently fixed because Roblox  
> sun times do not change depending on time of year

# ❔ Firewall `RecordFirewall`
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/firewall_1.png" width="200px"/>

> A port of the record Firewall Shutters Remote protocol to the iComm with similar design.

- The inside the of the app (module) is structured similarly to that of a firewall remote tool, which makes setup the same as regular devices.
- In addition to touch the app remote can be controlled using the D-PAD Keys: `UP`/`DOWN` Open/Close; `LEFT`/`RIGHT` Change group

# 💬 Talkie `WalkieTalkie`
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/walkietalkie_1.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/walkietalkie_2.png" width="200px"/>
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/walkietalkie_3.png" width="200px"/>

> Experimental & alternative "radio" communication design. A much simpler alternative to the Radiocomm app.

- Press the big button or the `OK` center d-pad key to toggle between muted and listening
- When the button is gray/listening, it'll listen to what you say in the chat and transmit it to everyone on the same channel and become green
- The channels are 36 in total starting from 1 and can be changed with the `+` or `-` buttons, or the `UP` `DOWN` `LEFT` `RIGHT` D-Pad keys