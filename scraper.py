# encoding=UTF-8
import pyperclip

cadena_final = ""
with open("committees.txt", "r", encoding="UTF-8") as archivo:
  for line in archivo.readlines():
    if "*" in line:
      pass
    else:
      name, abreviation, idioma = line.split(";")
      cadena_final += """
      <div class="three columns double-col-height blue-bg rounded relative">
        <div class="container absolute-center full column">
          <h4 class="white full column margin-none">%s</h4>
          <div class="division-line mid-white-bg ten columns one-offset"></div>
          <p class="white small-body full column margin-none">%s</p>
        </div>
      </div>
      """ % (abreviation, name)

pyperclip.copy(cadena_final)
