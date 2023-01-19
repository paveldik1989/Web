(function () {
        var array = [1, 5, 3, 4, 7, 1, 8, 3, 9, 4, 7, 8, 100];
        console.log("Initial array: " + array)

        function sort() {
            array.sort(function (e1, e2) {
                return e1 - e2;
            });
        }

        sort();
        console.log("Sorted array: " + array)


        function sliceFirstElements() {
            return array.slice(0, 5);
        }

        console.log("Subarray, first 5 elements: " + sliceFirstElements())

        function sliceLastElements() {
            return array.slice(array.length - 5);
        }

        console.log("Subarray, last 5 elements: " + sliceLastElements())

        function summarizeEvenNumbers() {
            return array.filter(function (number) {
                return number % 2 === 0;
            })
                .reduce(function (total, currentValue) {
                    return total + currentValue
                }, 0);
        }

        console.log("The sum of even numbers: " + summarizeEvenNumbers())

        function getFirstHundred() {
            var array1 = [];
            for (var i = 1; i < 101; i++) {
                array1.push(i);
            }
            return array1;
        }

        console.log("First 100 numbers: " + getFirstHundred())

        function getEvenSquares(array) {
            return array.filter(function (number) {
                return number % 2 === 0;
            })
                .map(function (number) {
                    return number * number;
                });
        }

        console.log("Squares of even numbers: " + getEvenSquares(getFirstHundred()))
    }
)()