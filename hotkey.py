import keyboard
from screen import select_area
from tray import create_tray_icon

def on_printscreen():
    select_area()


keyboard.add_hotkey('print screen', on_printscreen)
# Здесь можно добавить любой код, который будет выполняться в фоновом режиме
# пока не произойдет нажатие на клавишу PrintScreen
create_tray_icon()
while True:
    pass
