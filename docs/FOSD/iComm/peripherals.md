---
sidebar_position: 5
---

# 🪩 Peripherals  
As described before, the iComm also features a Peripherals module, it currently has the following default peripherals:
> - **function** `:Led(Color3)` Changes status LED Peripheral color to first argument provided (must be a Color3 obj)
> - **function** `:Torch(On, Brightness)` Changes torch peripheral light enabled depending on first argument, range and brightness depending on the second argument; if no arguments are provided, the Torch LED will toggle Value with a default Brightness of `3`
> - **function** `:NFCr()` Once ran returns received NFC data with a timeout of 10 seconds. If the iComm tool is not equipped, it will return false, if there is no data received, it will return nil.
> > - **function** `:NFCt(...)` Transmits all NFC data provided as arguments (... -> concat) for 10 seconds. If the iComm tool is not equipped, it will return false, if there is no succesful data transfer, it will return nil.