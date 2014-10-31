var range = function(begin, terminate, step) {
 
	var output = []
 
 	if (terminate >= begin) {
     for (var i = 0; i <= ((terminate-begin) / step ); i++) {
        output.push(begin+(step*i))
     }
 	}
 
 	else {
     for (var i = 0; i <= ((begin-terminate) / step ); i++) {
        output.push(begin-(step*i))
     }    
	}

 	return output

}
