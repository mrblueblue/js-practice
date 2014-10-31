// Scenario

// You have 100 cats with no hats
// Go through each cat for 100 rounds
// If it has no hat put one on
// If it has a hat take it off
// On the first round, go to every cat
// On the second round, go to every second cat
// On the third round, go to every third
// So on, and so forth
// In the end, which cats have hats?

// First, lets define some useful functions //

/// For each element, do this ///

function forEach(something, action) {
    for (var i = 0; i < something.length; i++) {
        action(something[i])
    }
}

/// Create a range of numbers ///

function range(begin, terminate, step) {
 
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

/// Here are 100 cats

var cats = new Array(100)

/// They all have no hats

forEach(cats, function(cat) {
    
    for (var i = 0; i < cats.length; i++) {
        cats[i]=false
    }
    
})

/// We have 100 rounds to go through

var rounds = range(1,100,1)

/// For each round...

forEach(rounds, function(round) { 
    
    // ...do this for each cat...
    
    for (var i = 0; i < cats.length; i++) {
        
        // If the position of the cat is a factor 
        // of the round then....
    
        if ((i+1)%round===0) {
            
            // ...put a hat on it if it has no hat
            
            if (cats[i]===false) {
                cats[i]=true
            }
            
            // ...take off its hat if it has a hat
            
            else {
                cats[i]=false
            }
            
        }
    }
    
})

// Find which cats have hats

function hatSearch(cats) {
    
    var cat_hat=[]
    
    for (var i = 0; i < cats.length; i++) {
    
        if (cats[i]===true) {
        cat_hat.push(i+1)}
    
    }
    
    return cat_hat
       
}
console.log("These cats have hats after 100 rounds:")
console.log(hatSearch(cats))
