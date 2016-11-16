cd src/equi
gcc -fPIC -c -D_GNU_SOURCE -Wno-pointer-sign -std=c11 -o equi.o equi.c -lsodium
gcc -fPIC -c -D_GNU_SOURCE -Wno-pointer-sign -std=c11 -o endian.o endian.c -lsodium
gcc -shared -o libequi.so equi.o endian.o
cp libequi.so ../../
cd ../../
CFLAGS=fPIC go build -buildmode=c-shared -o libequihash.so equi.go
