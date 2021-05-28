function findMatching(drivers, name) {
    let driverMatch = drivers.filter(d => {
        return d.toLowerCase() === name.toLowerCase();
    });
    return driverMatch;
}

function fuzzyMatch(drivers, string) {
    let filterDrivers = drivers.filter(d => {
        return d.toLowerCase().indexOf(string.toLowerCase()) === 0;
    });
    return filterDrivers;
}

function matchName(drivers, string) {
    let driverMatch = drivers.filter(d => {
        return d.name === string;
    });
    return driverMatch;
}
