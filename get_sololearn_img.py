import urllib.request, re, ssl
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

try:
    html = urllib.request.urlopen("https://www.sololearn.com/certificates/CC-VBZTTB3W", context=ctx).read().decode("utf-8")
    m = re.search(r'property="og:image"\s+content="([^"]+)"', html) or re.search(r'content="([^"]+)"\s+property="og:image"', html)
    print(m.group(1) if m else "Not found")
except Exception as e:
    print(e)
