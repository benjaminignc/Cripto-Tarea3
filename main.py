import camellia
from pypadding import pkcs
import binascii, os
from base64 import b64encode
#from flask import Flask, render_template

#app = Flask(__name__)
texto=b"Esto deberia encriptarse"
padding=pkcs.Encoder(camellia.block_size)
encoder=padding.encode(texto)
llave=b"00112233445566778899aabbccddeeff"
iv=os.urandom(16)

modo=camellia.MODE_ECB
cypher=camellia.CamelliaCipher(key=llave, iv=iv, mode=modo)
encriptado=cypher.encrypt(encoder)
encriptado64=b64encode(encriptado).decode('utf-8')

html=["<p>Este sitio contiene un mensaje secreto</p>",
    '<div class="msg" id="'+encriptado64+'"></div>',
    "<p>Hola mami</p>"]

file = open("index.html","w")
for x in html:
    file.write(x + '\n')
file.close()

#@app.route('/')
#def index(id=encriptado64):
    #try:
        #return render_template('index.html',id=id)
    #except Exception as e:
        #return str(e)

#if __name__ == "__main__":
    #app.run(debug=True)