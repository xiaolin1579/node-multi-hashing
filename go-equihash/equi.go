 package main

// #cgo CFLAGS: -std=c11 -D_GNU_SOURCE -Wno-pointer-sign -fPIC -static
// #cgo LDFLAGS: -L${SRCDIR} -lsodium -lequi -Wl,-rpath=${SRCDIR}/
// #include <stdlib.h>
// #include "src/equi/equi.h"
import "C"
import "unsafe"

//export CheckSoln
func CheckSoln(header, solution []byte) bool {
	h := C.CString(string(header))
	defer C.free(unsafe.Pointer(h))

	sol := C.CString(string(solution))
	defer C.free(unsafe.Pointer(sol))

	return (bool)(C.verifyEH(h, sol))
}

func main() {
}
