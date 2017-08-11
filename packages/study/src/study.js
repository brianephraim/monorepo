/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var sets = [];
    var foundIndexes = {};
    
    nums.forEach((num1,i) => {
        var team1 = {
            sum: num1,
            used: num1 + '_',
            usedIndex: i + '_'
        };
        team1[i] = true;
        nums.forEach((num2,i) => {
            var team2 = {...team1};
            if(!team2[i]) {
                team2[i] = true;
                team2.sum += num2;
                team2.used += (num2 + '_');
                team2.usedIndex += (i + '_');
                nums.forEach((num3,i) => {
                    var team3 = {...team2};
                    if(!team3[i]) {
                        team3[i] = true;
                        team3.sum += num3;
                        team3.used += (num3);
                        team3.usedIndex += (i + '_');
                        var usedIndexSort = team3.usedIndex.split('_').sort().join('_');
                        if (team3.sum === 0 && !foundIndexes[usedIndexSort]) {
                          foundIndexes[usedIndexSort] = true;
                          sets.push(team3.used.split('_'));
                        }
                    }
                });
            }
        });
    });
    return sets;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
