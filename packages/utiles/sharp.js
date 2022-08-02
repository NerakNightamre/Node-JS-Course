const sharp = require('sharp')

// La siguiente reducira una imagen de 120x120 o cualquier tamaño a 80x80 y lo guardara en una imagen mas pequeña sin eliminr la original.
sharp("C:/Users/mauri/OneDrive/cursos/Node-Js-Course/packages/utiles/imagen.png").resize(80, 80).toFile('GreyScale.png');