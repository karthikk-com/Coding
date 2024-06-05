/* Given a number N. Count the number of digits in N which evenly divide N.

Note :- Evenly divides means whether N is divisible by a digit i.e. leaves a remainder 0 when divided.
 

Example 1:

Input:
N = 12
Output:
2
Explanation:
1, 2 both divide 12 evenly

EdgeCase :  integer division or modulo by zero

Leetcode : https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/
GeeksForGeeks : https://www.geeksforgeeks.org/problems/count-digits5716/1
*/

class Solution{
    evenlyDivide(N){
        let lastDigit = 0;
        let count =0;
        let dub = N;
        while (N!=0){
            lastDigit = N%10;
            console.log(lastDigit);
            if(lastDigit!=0 && dub%lastDigit == 0)
                count++;

            N = parseInt(N/10);
        }

        return count;
    }
}

const obj = new Solution();
console.log(obj.evenlyDivide(7));