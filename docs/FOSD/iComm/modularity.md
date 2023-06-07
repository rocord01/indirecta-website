---
sidebar_position: 3
---

# 🧩 Modularity
A core idea of the iComm is that to use and require different modules for each scope, applications, and resources.  
Here's how iComm GUI is structured:  
<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/gui_struct.png" width="150px"/>  

> - LocalScript `iComm`  
>> - **Module** `Keyboard` Handles all customizable "keys", unique to the iComm device, unifies all button .Activated events under one KeyPressEvent
>> - **Module** `Peripherals` Handles all customizable "peripherals" in it's own script, flashlight API, status led API, etc.
>> - **Module** `Screen` Handles all UI functions unique to the iComm (tweens, notifications, custom D-PAD scrolls, clock, etc.)  
>> - **Module** `Sensors` Very cool Sensors module, usually reused in various Indirecta devices, mentioned below in the README
>> - TextButton `AppTemplate` Irrelevant, used as button template in iComm App Menu
>> - **Configuration** `Apps` Folder containing all iComm app modules, each app has it's own structure depending on the ModuleScript template semi-unique to each app (check it out!)

> - **Frame** `Anchor` Frame containing all device UI (screen, keyboard, deco, etc.)
> - **Frame** `ScreenSizeWarning` Independent frame used in Indirecta products to warn of screen resolutions that might alter normal device behavior

Do note that each module, application or script can have it's own configuration structure and config location

