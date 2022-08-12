function getNames(names)
{
    return names.replace(/(\w+), (\w+)/gi, '$2 $1');
}

// console.log(getNames("Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo"));