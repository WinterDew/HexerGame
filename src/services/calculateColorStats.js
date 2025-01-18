export default function calculateColorStats(target, guess){
    var done = 1;
    target = target.toLowerCase().slice(1);
    var stats = [];
    
    for (var i = 0; i < 6; i++) {
        const targetVal = parseInt(target[i], 16);
        const guessVal = parseInt(guess[i], 16);
        const diff = targetVal - guessVal;
        if(diff != 0) done = 0;
        console.log(`Parsing: ${i} : target[${i}] = ${targetVal}, guess[${i}] = ${guessVal}, diff = ${diff}`);
        
        if (diff > 2) {
          stats.push(2); // Large positive difference
        } else if (diff > 0) {
          stats.push(1); // Positive difference
        } else if (diff === 0) {
          stats.push(0); // Exact match
        } else if (diff < 0 && diff >= -2) {
          stats.push(-1); // Small negative difference
        } else if (diff < -2) {
          stats.push(-2); // Large negative difference
        }
    }

    console.log(stats);
    console.log(done);
    return ([done, stats]);
}