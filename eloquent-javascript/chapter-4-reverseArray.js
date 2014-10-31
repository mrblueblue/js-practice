var reverseArray = function(arr) {
    
    var output = []
    
    for (var i = 1; i <= arr.length; i++) {
        
        output.push(arr[arr.length - i])
        
    }
    
    return output

}


var reverseArrayInPlace = function(arr) {
    
    for (var i = 0; i < Math.floor((arr.length / 2)); i++) {
        
        var swap_start = arr[i]
        var swap_end = arr[arr.length -1 - i]
        
        arr[i]=swap_end
        arr[arr.length -1 - i]=swap_start
        
    }
    
 return arr
    
}
