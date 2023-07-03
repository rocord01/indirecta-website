---
sidebar_position: 1
slug: /category/-tagread
---

# ℹ️ Info

## 📖 What's TagRead?
TagRead is the newest independent access control solution by Indirecta.
It's essentially a keypad/card reader with distinct modes:
- Off/Clock/NFC
- Off/Numpad/NFC
- Off/TOTP/NFC
- Clock/Numpad/NFC
- Clock/TOTP/NFC
  
<img alt="tagread design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/tagread/media/idle.png" height="300px"/> 
<img alt="tagread design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/tagread/media/numpad.png" height="300px"/> 
<img alt="tagread design" src="https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/tagread/media/reading.png" height="300px"/> 

It uses Indirecta's [Near Field Communication protocol](https://indirecta-technologies.github.io/website/docs/nfc), which is available as an application in the iComm and easily implementable by 3rd parties.

Our access control interface is compatible with any other solution that includes an API, such as Centric's LunaProx, Whitehill's DWProx and iDoor's DoorEngine.  

It's design features a sleek glass round edge OLED screen that automatically turns off with inactivity, using as few resources as possible.  
Using it is as easy as setting a passcode, passing by with an NFC-enabled card and going to the other side, no exceptions.  
The configuration features two functions, `UNLOCK` and `RELOCK`.  
`UNLOCK` is fired upon each successful authentication attempt, and `RELOCK` is fired after each failed authentication attempt or wrong passcode attempts.  

## ⚠️ License

The FOSD Project by Indirecta is released under the MIT license.

### [GitHub Repo](https://github.com/Indirecta-Technologies/fosd/blob/main/tagread/)