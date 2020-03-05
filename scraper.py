import pyperclip

cadena_final = ""
with open("input.txt", "r", encoding="UTF-8") as archivo:
  for line in archivo.readlines():
    abreviation = ""
    name = ""
    cadena_final += """
    <div class="committee blue-bg">
      <div class="absolute-centered fourth-width">
        <h4 class="white">%s</h4>
        <div class="division-line mid-white-bg"></div>
        <p class="white small-body">%s</p>
      </div>
    </div>
    """ % (abreviation, name)

pyperclip.copy(cadena_final)
