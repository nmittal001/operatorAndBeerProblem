# Equation Simplification and Beer Problems:

## Equation Simplification Problem:

```{
"op": "equal",
    "lhs": {
        "op": "add",
        "lhs": 1,
        "rhs": {
            "op": "multiply",
            "lhs": "x",
            "rhs": 10
        }
    },
    "rhs": 21
}
```

This particular example represents this equation: 1 + (x \* 10) = 21

### Goal is to:

1. Parse the JSON into a structured format, and written a function to pretty-print the parsed equation, in a single line with brackets, like the below example. (use a JSON parsing library) 1 + (x \* 10) = 21
2. Transform the expression so that ‘x’ on one side, and all the operations on the other side. In this example, a transformed expression: x = (21 − 1) / 10 .
3. Evaluate the expression on the other side and find the value of ‘x’.
   For input files, assumed that ‘x’ is always solvable.

### Notes:

- The operations possible are: add, subtract, multiply, divide, and equal
- Each operation will have a LHS and a RHS. The LHS / RHS of a operation can be:
  - another operation,
  - Or a fixed number,
  - Or a variable reference
- The input files will be limited to have the following characteristics:
  - Top level operation will always be ‘equal’
  - RHS will always be a fixed number
  - LHS can be complex. But there will only be a single variable reference (x) that occurs somewhere in the LHS. All other leaf nodes will be fixed numbers.

---

## Beer Problem:

Once upon a time there was a tavern with 1000 beer taps, numbered from 1 to 1000. You were told by a mysterious stranger that the best beers are the one with the taps whose number matches those 2 conditions:

1. The sum of divisors (including 1, but not the number itself) of the tap number is greater than tap number itself
2. No subset of those divisors sums up to the tap number itself

The waiter is coming, what is your order?

For example:

- Number 12: the proper divisors are 1, 2, 3, 4 and 6. The sum is 1+2+3+4+6 = 16 which is greater than 12 and matches the first condition. However, the subset 2+4+6=12 which violates the second condition.
