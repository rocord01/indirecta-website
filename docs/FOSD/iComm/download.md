---
sidebar_position: 9
---

# 📥 Download
## How to get the iComm from GitHub
<img alt="icomm" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/icomm-step1.png" width="300px"/><img alt="icomm" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/icomm-step2.png" width="300px"/><img alt="icomm" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/github-getfile-1.png" width="300px"/>


> - Step 1: **https://github.com/Indirecta-Technologies/fosd/tree/main/icomm/src/tool_devices** Open the `iComm-nomesh.rbxmx` tool device GitHub Page
> - Download file: **Click on the `Raw` button and then press `Ctrl+S`, save somewhere and then drag the file into studio**  
> ⚠️ **Make sure to save the file as .rbxmx and not .rbxmx.txt or you won't be able to drag it in studio!**

> - Step 2: **https://github.com/Indirecta-Technologies/fosd/tree/main/icomm/src/core_releases** Open the `Indirecta_iCommGUI-alpharev1.3.7.rbxmx` core release GitHub Page
> - Download file: **Click on the `Raw` button and then press `Ctrl+S`, save somewhere and then drag the file into studio**  
> ⚠️ **Make sure to save the file as .rbxmx and not .rbxmx.txt or you won't be able to drag it in studio!**

> - Step 3: Put the Tool (first file you've downloaded) into StarterTools
> - Step 4: Put the GUI (second file) inside the Tool

> - Step 5: Edit the `Handler` script inside the Tool: 
>           Replace the 18th line (or the one with the guiName definition) to point to the new GUI
```lua
  local guiName = "Indirecta_iCommGUI-alpharev1.3.7"
``` 
*(in this case for v1.3.7)*
