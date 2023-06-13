---
sidebar_position: 3
--- 

# ⚙️ Configuration
The most important aspect of Xinu, is configuration and customization. In the Configuration folder, found inside Main are multiple settings that are important to having a good experience with Xinu.

Here's what the default configuration should look like:

```
--[[
				  `/shdmmmmmmmmmd-`ymmmddyo:`       //                sm- /h/                        --             
				`yNMMMMMMMMMMMMm-.dMMMMMMMMMN+     `MN  `-:::.`   .-:-hM- -o-  .-::.  .::-.   `.:::` MN--. `-::-.   
				yMMMMMMMMMMMMMd.:NMMMMMMMMMMMM+    `MN  yMs+oNh  oNy++mM- +Mo -Mm++:`hmo+yN+ .dmo++- MNoo/ `o+odN:  
				yMMMMMMMMMMMMy`+NMMMMMMMMMMMMM+    `MN  yM:  dM. MN   yM- +Mo -Mh   /Mmss    sM+     MN    +h ohMo  
				`yNMMMMMMMMMo`sMMMMMMMMMMMMMNo     `MN  yM:  dM. oNy//dM- +Mo -Mh   `dNs++o. -mm+//- dM+/+ mN+/sMo  
				  `/shddddd/ odddddddddddho:`       ::  .:`  -:   `:///-` .:. `:-     .://:`  `-///. `-//: `-///:. 
				  
				  						© Indirecta Technologies. All rights reserved

]]

--[[ !! 

EXTRA DOCUMENTATION: https://indirecta.gitbook.io/xinu-hse/ 
REVISION: 1a

!!]]
local Main = script.Parent
local configuration = {
	["DisplayModule"] = Main.Modules.DisplayOverBindable; -- Module that will be used to display/output to your screen, please do not rename functions
	["BootModule"] = Main.Modules.Boot;
	
	["DOBWhitelist"] = {
	}; -- A whitelist that DisplayOverBindable will use, it would contain the only devices allowed to be registered in the DOB Module (only if there's more than 0 devices in this list)
	
	["ProgramsFolder"] = game:GetService("ServerScriptService")["Programs"]; -- Folder containing the execution files
	
	["DebugMode"] = false; -- Display messages by the Main script for debug purposes
	
	["RealismDelay"] = true; -- Delay operations to achieve realism	
	["DelayCalculator"] = workspace:GetRealPhysicsFPS(); -- How the delay is calculated, eg. (1 second / 50) * (self)
	
	["ExtraFeatures"] = {
		
		["Freestore"] = true;
		["PerformanceStats"] = true;
		["SecuritySandbox"] = true; -- Expose the Sandbox Behaviour logs for each execution file object
		["Telemetry"] = false; -- Send Telemetry data such as errors and list of execution files 
		-- The Telemetry data will be used to aid in support tickets and to study the distribution of monitor models, timemodules, debug modules, etc.
		-- Does not work in Studio or in places with Http disabled
		
	};
	
	

}

return configuration
```