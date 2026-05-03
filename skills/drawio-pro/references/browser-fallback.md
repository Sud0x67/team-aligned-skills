# diagrams.net Browser Fallback

Use this when the draw.io desktop CLI is unavailable but Python is available.

```bash
python3 -c "
import zlib, base64, urllib.parse, sys
xml = open(sys.argv[1], encoding='utf-8').read()
c = zlib.compressobj(9, zlib.DEFLATED, -zlib.MAX_WBITS)
compressed = c.compress(xml.encode('utf-8')) + c.flush()
encoded = base64.b64encode(compressed).decode('utf-8').replace('\n', '')
print('https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&edit=_blank#R' + urllib.parse.quote(encoded, safe=''))
" diagram.drawio
```

The URL fragment after `#R` contains the compressed diagram. It opens in diagrams.net for viewing and editing.

