---
sidebar_position: 6
---

# ⚗️ Use cases
Thanks to the iComm's modularity, we foresee endless possibilities.  
We suggest using the iComm in any RTECH-product based game, really, thanks to it's encrypted frequency Radio powering safe and secure staff communications,  
maps contributing to forest/deep game navigation,  
and incredible modularity empowering the game owner to customize the iComm to fit any use case, and create their own game-themed applications.

<img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/radio.png" width="300px"/> <img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/sensors.png" width="300px"/> <img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/vast.png" width="300px"/> <img alt="icomm design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/3rd.png" width="300px"/>

## How to get the iComm from GitHub

> - Step 1: **https://github.com/Indirecta-Technologies/fosd/tree/main/icomm/src/tool_devices** Open the `iComm-nomesh.rbxmx` tool device GitHub Page
> - Download file: **Click on the `Raw` button and then press `Ctrl+S`, save somewhere and then drag the file into studio**
> - Step 2: **https://github.com/Indirecta-Technologies/fosd/tree/main/icomm/src/core_releases** Open the `Indirecta_iCommGUI-alpharev1.3.7.rbxmx` core release GitHub Page
> - Download file: **Click on the `Raw` button and then press `Ctrl+S`, save somewhere and then drag the file into studio**
> - Step 3: Put the Tool (first file you've downloaded) into StarterTools
> - Step 4: Put the GUI (second file) inside the Tool
> - Step 5: Edit the `Handler` script inside the Tool: 
>           Replace the 18th line (or the one with the guiName definition) to point to the new GUI
```lua
  local guiName = "Indirecta_iCommGUI-alpharev1.3.7"
``` 
*(in this case for v1.3.7)*

