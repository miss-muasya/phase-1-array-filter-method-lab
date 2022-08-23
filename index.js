// Code your solution here
function findMatching(drivers, taxi) {
    return drivers.filter((possibleMatch) => possibleMatch.toLowerCase() === taxi.toLowerCase());
    }
function  fuzzyMatch(drivers, oneTaxi) {
        return drivers.filter((possibleMatch) => possibleMatch.toLowerCase().startsWith(oneTaxi.toLowerCase()));
    }
function matchName(drivers, matchName) {
        return drivers.filter((record) => record.name === matchName);
        
    }