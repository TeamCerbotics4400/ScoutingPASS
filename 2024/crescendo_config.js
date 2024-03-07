var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Iniciales de Scouter",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Evento",
      "code": "e",
      "type": "event",
      "defaultValue": "2024mslr",
      "required": "true"
    },
    { "name": "Tipo de Match",
      "code": "l",
      "type": "level",
      "choices": {
        "pm": "Practica<br>",
        "qm": "Quals<br>",
        "sf": "Semifinales<br>",
        "f": "Finales"
      },
      "defaultValue": "pm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Rojo-1",
        "b1": "Azul-1<br>",
        "r2": "Rojo-2",
        "b2": "Azul-2<br>",
        "r3": "Rojo-3",
        "b3": "Azul-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Posicion inicial del Robot",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Sale de la Zona Inicial",
      "code": "al",
      "type": "bool"
    },
    { "name": "Notas en Amp",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Notas en Speaker",
      "code": "ass",
      "type": "counter"
    },
    {
      "name": "Cruzo la Mitad de la Cancha",
      "code": "ash",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Notas en Amp",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Notas en Speaker",
      "code": "tss",
      "type": "counter"
    },
    {
      "name": "Notas Falladas",
      "code": "tnm",
      "type": "counter"
    },
    { "name": "Veces Amplificado",
      "code": "tta",
      "type": "counter"
    },
    {
      "name": "Notas Feeded a otro Robot",
      "code": "tnf",
      "type": "counter"
    },
    { "name": "De donde agarra",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Source<br>",
        "f": "Suelo<br>",
        "b": "Ambas<br>",
        "x": "No intento"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Tiempo de Escalado",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Posicion Finalizada",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "o": "Onstage<br>",
        "s": "Onstage (Spotlit)<br>",
        "h": "Harmony<br>",
        "a": "Intento pero Fallo<br>",
        "x": "No intento"
      },
      "defaultValue": "x"
    },
    { "name": "Note en Trap",
      "code": "nit",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "Habilidad de Driver",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "No Effectivo<br>",
        "a": "Promedio<br>",
        "v": "Bastante Efectivo<br>",
        "x": "No Observado"
      },
      "defaultValue": "x"
    },
    {
      "name": "Lugar de Disparo",
      "code": "scs",
      "type": "radio",
      "choices": {
        "c": "Pegado al Subwoofer<br>",
        "p": "Alejado al subwoofer<br>",
        "b": "Ambas<br>",
        "n": "No intento"
      },
      "defaultValue": "n"
    },
    { "name": "Nivel de Defensa",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Debajo del promedio<br>",
        "a": "Promedio<br>",
        "g": "Promedio<br>",
        "e": "Excelente<br>",
        "x": "No jugo defensa"
      },
      "defaultValue": "x"
    },
    {
      "name": "Es buen feeder?",
      "code": "gf",
      "type": "bool"
    },
    { "name": "Velocidad",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (lento)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (rapido)"
      },
      "defaultValue":"3"
    },
    { "name": "Murio/Inmobilizado",
      "code": "die",
      "type": "bool"
    },
    { "name": "Casi se cae",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Notas que se le cayeron (>2)",
      "code": "dn",
      "type": "bool"
    },
    {
      "name": "Tarjetas?",
      "code": "c",
      "type": "bool"
    },
    { "name": "Hace un buen<br>compañero de alianza?",
      "tooltip": "Te gustaria tener a este robot en las eliminatorias?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comentarios",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
