# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**

_Write your response here_
We can save the results of function corresponding to each argument, so that we dont have to calculate it again thus making our program more efficient

### **What _extra_ test cases can you add to the test file?**

_Add relevant test-cases in the test file_