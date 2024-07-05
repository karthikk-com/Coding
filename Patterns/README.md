# Patterns

> **Nested loops**
```
1. Outer Loop - Specifically for the rows
2. Inner Loop - Specifically for the columns 
```

> **Rules to solve**
* For the outer loop - count the number of lines ( rows )
* For the inner loop - Focus on the problems and connect them somehow to the rows
* Whatever you want to print, Print inside the inner loop
* Observe symmetry in case of some patterns ( Optional )

## Notes
1. Did not use console.log("*"), to cut down the trailing space. Instead used "process.stdout.write" in Javascript
2. process.stdout.write(j+''); // In JS, This prints only strings. Hence if you need to print an integer, convert to string by concatenation
3. Analysis the space before and after the stars or any pattern to print as well.
4. Identify the symmetry
5. Use simple math whenever required. ex: to print 0 & 1,if start=0,  start = 1 - start; to manipulate.
6. For iterating over alphabet, Use ASCII values
   ASCII code for "A" is 65 (Uppercase is between 65-90)
   ASCII code for 'a' is 97 (lowercase is between 97-122)
7. To retrieve the character associated with the ASCII Number 
   String.fromCharCode(<ASCII number>) - inbuilt method
8. If it has symmetry, then identify the breakpoint


### Pattern 1
```
****
****
****
****
```


### Pattern 2
```
*
**
***
****
*****
```

### Pattern 3
```
1
12
123
1234
12345
```

### Pattern 4
```
1
22
333
4444
55555
```

### Pattern 5
```
*****
****
***
**
*
```

### Pattern 6
```
12345
1234
123
12
1
```

### Pattern 7
```
   *   
  ***  
 *****
*******
```

### Pattern 8
```
*******
 ***** 
  *** 
   *
```

### Pattern 9
```
   *   
  ***  
 *****
*******
*******
 ***** 
  *** 
   *
```

### Pattern 10
```
*   
**  
***
****
***
** 
*
```

### Pattern 11
```
N=6

1
01
101
0101
10101
010101
```

### Pattern 12
```
N=6

1          1
12        21
12       321
1234    4321
12345  54321
123456654321
```

### Pattern 13
```
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

### Pattern 14
```
A
A B
A B C
```

### Pattern 15
```
A B C
A B
A
```

### Pattern 16
```
A
B B
C C C
```

### Pattern 17
```
N = 3

  A  
 ABA 
ABCBA
```

### Pattern 18
```
N=3
C
B C
A B C
```

### Pattern19
```
N = 6
Result:   
************
*****  *****
****    ****
***      ***
**        **
*          *
*          *
**        **
***      ***
****    ****
*****  *****
************
```

### Pattern 20
```
N = 3
Result: 
*    *
**  **
******
**  **
*    *

```

### Pattern 21
```
Input Format: N = 3
Result: 
***
* *
***
```

### Pattern 22
```
Input Format: N = 3
Result: 
3 3 3 3 3 
3 2 2 2 3 
3 2 1 2 3 
3 2 2 2 3 
3 3 3 3 3
```

