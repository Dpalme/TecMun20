# encoding=UTF-8
import pyperclip, pprint

cadena_final = ""
with open("committees.txt", "r", encoding="UTF-8") as archivo:
  for line in archivo.readlines():
    if "*" in line:
      pass
    else:
      name, abreviation, idioma = line.split(";")
      cadena_final += """
      <div class="flex-item relative">
        <div class="committee green-bg relative">
          <div class="absolute-centered full-width-percent">
            <h4 class="white full-width-percent">%s</h4>
            <div class="division-line mid-white-bg"></div>
            <p class="white small-body">%s</p>
          </div>
        </div>
      </div>
      """ % (abreviation, name)

pprint.pprint(cadena_final)
pyperclip.copy(cadena_final)
