---
sidebar_position: 2
--- 

# 🗃️ Execution Files
## User-made custom programs

```
--[[           __ _ _      
          ___ / _(_) | ___ 
         / _ \ |_| | |/ _ \
        |  __/  _| | |  __/
         \___|_| |_|_|\___|                                                                                                                                                                                                       --]]local module = {}--[[
]]
```  
Execution Files are user-made modules, that are run by the Loader in order, they are usually named name.efile, etc. but the Loader tries to load any valid modulescript containing the following structure:

```
return function(Essentials, Efile)
	function Efile:Start()

	end

	function Efile:Stop()
		
	end
	
	function Efile:construct(instance: Instance)
		Efile:Start()
	end
	function Efile:destroy(instance: Instance)
		Efile:Stop()
	end
end
```  

For each execution file in the programs directory, the Loader will check: 
- If the child is a module
- If the module returns a function
- If the function returns :construct and :destroy 
- The :Start and :Stop options are fully optional and customizable, they are usually run by the :construct and by the :destroy functions.
Each efile is constructed in a coroutine, that can be extracted from the Essentials table, further information about this is located in it's appropriate page.