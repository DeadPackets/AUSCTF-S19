from pyftpdlib.authorizers import DummyAuthorizer
from pyftpdlib.handlers import FTPHandler
from pyftpdlib.servers import FTPServer
authorizer = DummyAuthorizer()
authorizer.add_user("ryan", "iloveyou", "./bruteftp", perm="elr")
authorizer.add_anonymous("./anonftp")
handler = FTPHandler
handler.banner = "Welcome to AUSFTP, hope you enjoy!"
handler.authorizer = authorizer
handler.permit_foreign_addresses = True
handler.passive_ports = range(30000, 30010)
handler.masquerade_address = '35.235.105.135'
server = FTPServer(("0.0.0.0", 21), handler)
server.serve_forever()