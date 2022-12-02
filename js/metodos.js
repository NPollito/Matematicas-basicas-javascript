const PlatziMath = {};

PlatziMath.calculateAverage = function calculateAverage(list) {
    
    const sumList = list.reduce((a, b) => {
        return a + b
    });

    const average = sumList / list.length;

    return average;
}

PlatziMath.calculateHalf = function calculateHalf(unorderedList) {
    
    const list = PlatziMath.sortList(unorderedList);
    const isEven = PlatziMath.isEven(list);

    if(isEven) {
        
        const halfReadyPair = (list.length / 2) - 1;
        const halfReady2Pair = list.length / 2;
        const listHalves = [];
        listHalves.push(list[halfReadyPair]);
        listHalves.push(list[halfReady2Pair]);

        const mediumPairList = PlatziMath.calculateAverage(listHalves);
        return mediumPairList;

    } else {
        
        const oddtHalfList = Math.floor(list.length / 2);
        const mediumOddList = list[oddtHalfList];
        
        return mediumOddList;
    }
}

PlatziMath.calculateMode = function calculateMode(list) {

    const countList = {};

    for(let i = 0; i < list.length; i++) {
        const element = list[i];

        if(countList[element]) {
            countList[element] += 1;
        } else {
            countList[element] = 1;
        }
    }

    const arrayList = Object.entries(countList);
    const orderedList = PlatziMath.sortTwoDimensionalList(arrayList, 1);
    const listMaxNumber = orderedList[orderedList.length - 1];
    const fashion = listMaxNumber[0];

    return fashion;
}



PlatziMath.sortList = function sortList(list) {
    
    const listSort = list.sort((a, b) => {
        return a - b;
    });

    return listSort;
}

PlatziMath.sortTwoDimensionalList = function sortTwoDimensionalList(unorderedList, i) {
    
    const sortList = unorderedList.sort((a, b) => {
        return a[i] - b[i];
    });

    return sortList;
}

PlatziMath.isEven = function isEven(list) {
    return !(list.length % 2)
}
