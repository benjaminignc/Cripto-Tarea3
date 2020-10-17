import camellia
from pypadding import pkcs
import binascii, os
from base64 import b64encode
#from flask import Flask, render_template

#app = Flask(__name__)
texto=bytes(input("Introducir texto claro:"), 'utf-8')
padding=pkcs.Encoder(camellia.block_size)
encoder=padding.encode(texto)
llave=bytes(input("Introducir llave:"), 'utf-8')
iv=os.urandom(16)

modo=camellia.MODE_ECB
cypher=camellia.CamelliaCipher(key=llave, iv=iv, mode=modo)
encriptado=cypher.encrypt(encoder)
encriptado64=b64encode(encriptado).decode('utf-8')
llave64=b64encode(llave).decode('utf-8')
iv64=b64encode(iv).decode('utf-8')

html=["<p>Este sitio contiene un mensaje secreto</p>",
    '<div class="llave" id="'+llave64+'"></div>'
    '<div class="iv" id="'+iv64+'"></div>',
    '<div class="msg" id="'+encriptado64+'"></div>']

file = open("index.html","w")
for x in html:
    file.write(x + '\n')
file.close()