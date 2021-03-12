const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let maxDepth = 1;
        arr.forEach(value => {
            if (Array.isArray(value)) {
                let depth = this.calculateDepth(value) + 1
                if (depth > maxDepth) {
                    maxDepth = depth;
                }
            }
        })

        return maxDepth;
    }
};