---
sidebar_position: 7
---

# 📶 NFC
## Indirecta Near Field Communication Protocol
### Our take on NFC Functionality, in Roblox

This protocol allows different FOSD devices to transmit and receive data, for example, the iComm and a door access control keypad, an rfid fob, etc.

## 🔒NFC Protocol Encryption & Decryption

### 📖 _enc
Encrypts a string using a vector-based XOR encryption algorithm.
### Parameters
- `string`: The string to be encrypted.
- `Vector3`: A Vector3 object containing encryption key values.
### Returns
- `string`: 🔐 The encrypted string.

<details> 
<summary>✏️ Algorithm Design</summary>  
This function takes a string and a Vector3 object as input.
It performs a character-wise XOR encryption on the string using the key values from the Vector3 object.
Each character of the string is XORed with the corresponding key part, and the encrypted characters are concatenated to form the encrypted string.

The encryption algorithm works as follows:
1. The string is iterated character by character.
2. The ASCII value of the character is obtained using string.byte.
3. The key part (X, Y, or Z) is selected based on the keyIndex, which cycles through the key values.
4. The character value is XORed with the key part value using bit32.bxor.
5. The encrypted character is converted back to a string using string.char.
6. The encrypted character is appended to the encrypted string.	
7. The keyIndex is incremented and wrapped around to 1 if it exceeds 3.
8. Steps 2-7 are repeated for each character in the string.
9. The final encrypted string is returned.

</details> 

### Example usage
```lua
	local str = "Hello, world!"
	local v3 = Vector3.new(1, 2, 3)
	local encryptedStr = NFC:_enc(str, v3)
	print(encryptedStr)
```

```lua
NFC._enc = function(self, str: string, v3: Vector3)
	local encrypted = ""
	local keyIndex = 1
	local key = {v3.X, v3.Y, v3.Z}

	for i = 1, #str do
		local char = string.byte(str, i)
		local keyPart = key[keyIndex]
		local encryptedChar = bit32.bxor(char, keyPart)
		encrypted = encrypted .. string.char(encryptedChar)

		keyIndex = keyIndex + 1
		if keyIndex > 3 then
			keyIndex = 1
		end
	end

	return encrypted
end
```


### 📖 _dec
Decrypts an encrypted string using a vector-based XOR decryption algorithm.
### Parameters:
- `string`: The encrypted string to be decrypted.
- `Vector3`: A Vector3 object containing decryption key values.
### Returns:
- `string`: 🔓 The decrypted string.

<details> 
<summary>✏️ Algorithm Design</summary>  
This function takes an encrypted string and a Vector3 object as input. It performs a character-wise XOR decryption on the string using the key values from the Vector3 object. Each character of the encrypted string is XORed with the corresponding key part, and the decrypted characters are concatenated to form the original string.

The decryption algorithm works in a similar way to the encryption algorithm:
1. The encrypted string is iterated character by character.
2. The ASCII value of the character is obtained using string.byte.
3. The key part (X, Y, or Z) is selected based on the keyIndex, which cycles through the key values.
4. The character value is XORed with the key part value using bit32.bxor.
5. The decrypted character is converted back to a string using string.char.
6. The decrypted character is appended to the decrypted string.
7. The keyIndex is incremented and wrapped around to 1 if it exceeds 3.
8. Steps 2-7 are repeated for each character in the encrypted string.
9. The final decrypted string is returned.

</details> 

### Example usage:
```lua
	local encryptedStr = "Uryyb, jbeyq!"
	local v3 = Vector3.new(1, 2, 3)
	local decryptedStr = NFC:_dec(encryptedStr, v3)
	print(decryptedStr)
```

```lua
NFC._dec = function(self, str: string, v3: Vector3)
	local decrypted = ""
	local keyIndex = 1
	local key = {v3.X, v3.Y, v3.Z}

	for i = 1, #str do
		local char = string.byte(str, i)
		local keyPart = key[keyIndex]
		local decryptedChar = bit32.bxor(char, keyPart)
		decrypted = decrypted .. string.char(decryptedChar)

		keyIndex = keyIndex + 1
		if keyIndex > 3 then
			keyIndex = 1
		end
	end

	return decrypted
end
```

## 💠 NFC Protocol Transmission & Reception
### 📤 Transmission (client1 -> server -> client1)
1. On the client-side (client1), the NFCt function is used to transmit NFC protocol messages to the server.
2. The function searches for a child object named "__rfidtag" within the tool handle part. If the child object is not found, it raises an assertion error and suggests creating it from the server.
3. The function constructs the data to be transmitted by concatenating the provided arguments and encrypts it using the _enc function.
4. It establishes a connection to the server-side RemoteEvent associated with "__rfidtag" and sends the encrypted data and the handle part as arguments through the server's FireServer method.
5. The function waits for a response by setting up a connection to the server's "OnClientEvent" event associated with "__rfidtag". Once the event is fired by the server, the transmitted data is sent.
6. After the transmission is completed, the connection is disconnected.
   
   It is only natural to grant NFC transmission functionality to the client, as this allows the potential for realistic Flipper Zero-like devices to exist.

### 📥 Reception (client2 -> server -> client1)
1. The server establishes a connection to the "Touched" event of the handle part to listen for interactions with the NFC tag represented by the "__rfidtag" object.
2. When the handle part is touched by another part in the game, the server checks if the touched part contains the "__rfidtag" object and if it is a RemoteEvent.
3. If the conditions are met, the server establishes a connection to the server-side "OnServerEvent" of the "__rfidtag" RemoteEvent. This connection listens for incoming data from the client2 who touched the handle part.
4. The server decrypts the received data using the _dec function.
5. The server fires the decrypted data back to the original client (client1) using a RemoteEvent associated with "__rfidtag" through the server's FireClient method.
6. A delay of 3 seconds is introduced to prevent rapid repeated interactions with the NFC tag.
7. The server sets the flag variable ff back to false, allowing subsequent interactions to trigger the process again.

