var multiHashing = require('/home/user/code/node-multi-hashing/build/Release/multihashing.node');

//var algorithms = ['quark', 'x11', 'scrypt', 'scryptn', 'scryptjane', 'keccak', 'bcrypt', 'skein', 'blake', 'equihash'];
var algorithms = ['equihash'];
var data = new Buffer("7000000001e980924e4e1109230383e66d62945ff8e749903bea4336755c00000000000051928aff1b4d72416173a8c3948159a09a73ac3bb556aa6bfbcad1a85da7f4c1d13350531e24031b939b9e2b", "hex");
var n = new Buffer("4");
var k = new Buffer("1");

var hashedData = algorithms.map(function(algo){
    if (algo === 'scryptjane'){
        //scryptjane needs block.nTime and nChainStartTime (found in coin source)
        var yaCoinChainStartTime = 1367991200;
        var nTime = Math.round(Date.now() / 1000);
        return multiHashing[algo](data, nTime, yaCoinChainStartTime);
    }
    else{
        return multiHashing[algo](data, n, k);
    }
});


console.log(hashedData);
//<SlowBuffer 0b de 16 ef 2d 92 e4 35 65 c6 6c d8 92 d9 66 b4 3d 65 ..... > 
