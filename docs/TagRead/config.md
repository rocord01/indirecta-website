---
sidebar_position: 2
--- 

# ⚙️ Configuration
One of the most important features in an Indirecta product is the ability to configure the most out of the product.  
This document will document all TagRead configuration sections

## 🕰️ Idle Behavior
- ### `Label` **string**
  ```js
  "Example Room"
  ```
  Default Room Name to display in the "Idle" frame along with the clock
- ### `IDLE_INTERVAL` **number**
  ```js
  20
  ```
  How many seconds of inactivity after last mouse movement on display before the screen automatically turns off
- ### `FORCE_CLOCK` **boolean**
  ```js
  false
  ```
  If enabled, forces the "Idle" frame and screen to remain off during inactivity.    
  Use this in conjunction with `NUM_KEYPAD` to display label & clock when TagRead is inactive, and numpad when the display is focused
- ### `CLOCK_FORMAT` **string** *pattern*
  ```js
  "%H:%M"
  ```
  os.date clock string format shown in "Idle" frame with room name  
  Set to 24h by default, use `"%I:%M %p"` for 12h (eg. 02:30 PM) and `"%H:%M"` for 24h (eg. 14:40)
## 📶 NFC Behavior
- ### `NFC_READING` **boolean**
  ```js
  true
  ```
  Whether or not to listen passively for NFC-enabled keycards, fobs and devices. Turning this off will completely disable NFC functionality.  
- ### `NFC_KEY` **string**
  ```js
  "1234"
  ```
  The secret key transmitted via NFC that should automatically unlock the connected doors or devices  
- ### `NFC_MAXWAIT` **number**
  ```js
  8
  ```
  How much time to wait before relocking door after an authentication attempt (also timeout duration for data transmission)  
- ### `NFC_SAVEBANDWITH` **boolean**
  ```js
  true
  ```
  Attempts to figure out to which client the NFC tag belongs to instead of firing all clients  
- ### `SECURITY_KICK` **boolean**
  ```js
  true
  ```
  This will kick any player who responds to the data transfer remote   
  without providing the correct NFC part that touched the reader.  
  Use in pair with the previous setting for maximal NFC security. 

## 🌐 Localization
Allows you to change the most important display strings
- ### `MSG_READING` **string**
  ```js
  "Hold your card near the screen"
  ```
- ### `MSG_UNLOCK` **string**
  ```js
  "Authenticated successfully"
  ```
- ### `MSG_FAIL` **string**
  ```js
  "Try bringing the device closer"
  ```
- ### `MSG_NUMPAD` **string**
  ```js
  "Input passcode"
  ```
- ### `MSG_TOTP` **string**
  ```js
  "One time pass"
  ```
- ### `MSG_KICK` **string**
  ```js
  "Detected NFC Remote Tampering"
  ```
## 🔢 Numpad
- ### `NUM_KEYPAD` **boolean**
  ```js
  false
  ```
  Whether or not to enable number keypad mode, this will turn on instead of the clock and room name if `FORCE_CLOCK` is set to false.  
- ### `NUM_CODE` **string**
  ```js
  "1234"
  ```
  A 6-10 digit pin. Players will have to input it correctly to unlock the system.  
  If `NUM_EXTRA_KEYS` is not enabled, this string of numbers should not contain 0.
- ### `NUM_WAIT` **number**
  ```js
  8
  ```
  How much time to wait (keep the door open) after authenticating, before relocking  
  If the authentication attempt fails (passcode is wrong!) the numpad will wait 0.45 seconds, clear the screen and automatically relock.

- ### `NUM_EXTRA_KEYS` **boolean**
  ```js
  false
  ```
  Whether or not to display extra numpad keys for more complex passcodes (*, 0, #)  
  The * and # keys are currently unused and are replaced by two dots.

## 🔂 One Time Pass Authentication
- ### `NUM_TOTP` **boolean**
  ```js
  false
  ```
  When `NUM_KEYPAD` is enabled, changes the valid passcode to that of a pre-configured one time pass.  
  This is the same 2FA Protocol used by services like Discord and offered by apps like Google Authenticator and Authy.  
  Pro tip: You can also use the 2FA iComm App for authentication!
- ### `NUM_TOTP_INTERVAL` **number**
  ```js
  30
  ```
  Default TOTP Interval (code change frequency), do not change this unless you know what you are doing
- ### `NUM_TOTP_LENGTH` **number**
  ```js
  6
  ```
  Default TOTP Length (code digit length), do not change this unless you know what you are doing
- ### `NUM_TOTP_SECRET` **string**
  ```js
  "2FASTEST"
  ```
  Default TOTP Secret that generates all valid passcodes. This is 2FASTEST by default because it's also present on the iComm 2FA app and it can be tested  
  online using https://2fas.com/check-token/.  
  To use a custom secret on a 2FA App like Google Authenticator, you must use the same `NUM_TOTP_SECRET` chosen in this config and generate a valid 2FA QR Code  
  to scan with your phone using a website like this: https://stefansundin.github.io/2fa-qr/
  
## 🚪 Unlock & Relock Functions `FUNCS`
The essential part to configure.  
Since TagRead doesn't include any communicating door, you will have to integrate an existing door system's API using these two functions. 

- ### 🔓 `UNLOCK` **function**
  Fired when:
  - ✅ NFC authenticates successfully
  - Passcode is correct
  - One time pass is correct
  The connected door should open when this function is fired.
- ### 🔒 `RELOCK` **function**
  Fired when:
  - ❌ NFC authentication fails
  - Passcode is wrong
  - One time pass is wrong
  - ⏲️ Timeout: max time passes without any input
  - Max time passes after successful authentication
  The connected door should close if not already when this function is fired.

:::caution

Make sure your `UNLOCK` & `RELOCK` are working! Infinite yields caused by code using `:WaitForChild()` will cause  
TagRead to freeze after attemtping to unlock or relock!

:::
- ### 💠 `_INTEGRATION_ON_NFC_TOUCH` **function**
  Fired when any part touches the NFC Antenna (created only if NFC is enabled)
  This function can be used to integrate other card protocols and make them compatible with TagRead,
  implement whitelists, blacklists, the possibilities are endless!

  If the function returns nil, the code will continue executing the 💠 NFC Authentication procedure  
  If it returns true, the reader will ✅ unlock the connected system, and false locks it as a ❌ failed auth attempt.  
  If the function returns something that's neither of those (e.g. an empty string), the NFC Authentication will halt,  
  but TagRead won't show any unlock or fail message.

## 🔈 Add sound to TagRead
TagRead doesn't plan to include any built-in audios or media.  
To add sound effects, you will have to create a `Sound` instance, configure it, parent it to any part inside TagRead,  
and handle sound playing inside the `UNLOCK` & `RELOCK` functions.

## 💠 Use the On NFC Touch Integration
This section will include some examples for _ON_NFC_TOUCH integrations:  

### 🔮 Try your luck!
This integration will unlock the connected system with a random 50/50 chance!  
```js
["_INTEGRATION_ON_NFC_TOUCH"] = function(self, script, part, config, notify)
	-- Fired when NFC Antenna is touched by any part
	notify(true, "🔮", "Let's test your luck!", "")
	wait(2)
	if math.random(0,1) > 0 then return false end

	return true
end,
```
### 🪪 Whitelist
This integration will halt the NFC Authentication procedure if the player is not in the whitelist! 
```js
["_INTEGRATION_ON_NFC_TOUCH"] = function(self, script, part, config, notify)
	-- Fired when NFC Antenna is touched by any part
	local whitelist = {"Lxi099"}

	local function FindPlayerAncestor(part)
		local parent = part.Parent
		if parent == nil then
			return nil
		end
		if parent:FindFirstChild("Humanoid") then
			return game:GetService("Players"):GetPlayerFromCharacter(parent)
		elseif parent:IsA("DataModel") then
			return nil
		else
			return FindPlayerAncestor(parent)
		end
	end

	local Player = FindPlayerAncestor(part)
	if Player and table.find(whitelist, Player.Name) then 
		return nil -- Continue with auth procedure
	else
		return "" -- Do absolutely nothing if the player is not whitelisted
	end
end,
```

