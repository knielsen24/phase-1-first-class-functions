function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function liftWeights() {
    console.log("Pump iron");
}

function swimFortyLaps() {
    console.log("Swim 40 laps");
}

function Monday() {
    runFiveMiles();
    liftWeights();
}


function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    const innerFunction = function(callback){
        return `${callback}`;
    }
    return innerFunction;
}

function returnsAnAnonymousFunction() {
    return () => {};
}
