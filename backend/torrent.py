from py1337x import py1337x
import json

torrents = py1337x()
info = torrents.search('harry potter')
print(json.dumps(info, indent=4))
