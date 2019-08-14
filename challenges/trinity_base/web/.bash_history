ls -la
encode_then_upload_to_ftp flag.txt
echo "let me connect to ftp to test if its there"
ftp ftp://trinity:TheMatrixIsReal@localhost
echo "Yep, its there"
echo "Also - free flag: FLAG{HackThePlanet}"
logout