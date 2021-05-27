---
layout: post
tag: note
categories: blog
title: "Note: Python Basics"
---

备忘录性质python笔记，主要来源于网站Learn X in Y minute, [link](https://learnxinyminutes.com/docs/python/).

{% include toc %}

# Python Basic

## Basic data type

-   1, 1.0            -> +-\*/
    -   5//3      : =1    integer division **rounds down**
    -   5%3       : =1    **modulo** operation
    -   5\*\*3    : =125  **exponentiation**(5 to the 3th power)
    -   5/1 : = 5.0 the result of division is **always a float**
-   True,False   -> and , or , not
	- 0==False, 1==True
	- 2!=True
	- True + True == 2
	- True and False are **actually 1 and 0** but with different keywords
	- bool(5)==true      **bool()** truns integers to True/False
	- 5 or 0 == -5       **bitwises** treat numbers equally
	- b is a      ->  **same as b==a**
-   "This is a string"
    -   'This is also a string'
    -   "string a"+"string b"
    -   "string a" "string b" **auto connect**
    -   "string"\*3
    -   "string"[0]='s'
    -   len("string")=6
    -   f"length of {x} is {len(x)}"  **f string**
    -   "{} is a string".format(x) : **format string**  
-   NONE  (is an object like NULL in C++)
    -   None is NONE
    -   None, 0, empty strings/lists/dicts/tuples all evaluate to False
    -   bool({}) == False
-   print(x)
    -   print(x) automaticly add new line
    -   print(x, end="!") no newline
    -   x=input("Enter some data:") returns data **as string**
-   "Yay" if 0 > 1 else "Nah"

## Data Structure

-   li = [1,2,3]
    -   li.append(4)
    -   li.pop() remove and show the last
    -   li[0]
    -   li[1:3] return list from index 1 to 3
    -   li[1:] return list starting from index 1
    -   li[1:100:5]          **li[start:end:step]**
    -   li[::5] pick every fifth entry
    -   li[::-1] return list in reverse order
    -   li2 = li[:] copy list
    -   li2 is li **always false**
    -   del li[2]             : remove li[2]
    -   li.remove(2)         : remove **first occurence of value 2**
    -   lia + lib
    -   li.insert(1,5)       : put 5 on index 1
    -   li.extend(b)         : = lisT+b
    -   li.index(2)          : return **index of first occurence of value 2**
    -   1 in li              : True or False
    -   len(lisT)
-   tup = (1,2,3) : tuples are like lists but are **immutable**(unable to change)
	-   A tuple of length one has to have a comma after the last element
	-   type((1)) : int
	-   type((1,)) : tuple
	-   typle(()) : tuple
	-   len(tup)
	-   tup + (4,5,6)
	-   tup[:2]
	-   2 in tup
-   a, b, c = (1, 2, 3)
-   a, \*b, c = (1, 2, 3, 4) : b=[2, 3]
-   a, b = b, a : swap a and b
-   dict = {"one" : 1, "two" : 2, "three" : 3}
    -   dict["one"]            : 1
    -   list(dict.keys())      : ["one","two","three"]
    -   list(dict.values())    : [1,2,3]
    -   "one" in dict          : True
    -   1 in dict              : False(**only check keys**)
    -   dict.get("one")  : 1
    -   dict.get("four") : None
    -   dict.get("four", 4) : 4 is a default value in case the key is missing
    -   dict.setdefault("four", 4) : inserts only if "four" isn't present
    -   dict.update({"four":4}) : adding
    -   dict["four"] = 4 : adding
    -   del dict["four"] : remove the key "four" form dict
-   est = set()
    -   est = {1, 1, 2, 3, 4, 4}
    -   est = {(1,), 1}
    -   est = {[1, 2], 1}  : Wrong, element of set has to be immutable
    -   est = est2
    -   est.add(5)
    -   est2 = {2, 4, 5}
    -   {1, 2, 3, 4} & {2, 3, 5}  : ={2, 3} 交集
    -   {1, 2, 3, 4} \| {2, 3, 5} : = {1, 2, 3, 4, 5} 并集
    -   {1, 2, 3, 4} - {2, 3, 5} : = {1, 4} 
    -   {1, 2, 3, 4} ^ {2, 3, 5} : = {1, 4, 5} 并集减交集
    -   {1, 2} >= {1, 2, 3} : true
    -   {1, 2} <= {1, 2, 3} : false
    -   2 in {1, 2}
    -   est2 = set1.copy()

### Dynamicly construct list, set and dict
```python
    [lambda x: x+10 for i in [1, 2, 3]]
    [x for x in [3, 4, 5, 6, 7] if x > 5]
    {x for x in 'abcdefg' if x not in 'abc'}
    {x: x**2 for x in range(5)}
```


### Mark: copy

For a=b, a is b will give True. For a = b.copy(), a is b will give Flse.

When we set a=b, they are actually **reference to the same object**. if we change value of a like a = {3, 4}, we **create a new object {3, 4} and then set a refer to this new object**, so value of b won't change.

The operation '==' looks for same **value**, but 'is' looks for same **reference**.

If we set a = [1, 2], and b=a, then if we change a vlue in a like a[0]=3, b also change because what we did is change original object, not create a new one.

### Iterable

An iterable is an object that can be treated as a sequence, but cannot address elemetns by index.

```python
    new_dict = {"one": 1, "two":2, "three":3}
    our_iterable = new_dict.keys()

    print(our_iterable)
    for i in our_iterable:
        print(i)
    
    our_iterator = iter(our_iterable)
    next(our_iterator) #=> "one"
    next(out_iterator) #=> "two"

    for i in our_iterator:
        print(i)
    
    list(our_iterable) #=> reuturns ["one", "two", "three"]

```

## Control Flow and Iterables

### if statement

if : - elif : - else:

```python
    if some_var > 10:
        print "some_var is totally bigger than 10."
    elif some_var < 10:  # This elif clause is optional.
        print "some_var is smaller than 10."
    else:  # This is optional too.
        print "some_var is indeed 10."
```

for in :

### for loop
```python
    for animal in ["dog", "cat", "mouse"]:
        # You can use {0} to interpolate formatted strings. (See above.)
        print "{0} is a mammal".format(animal)
    
    for i in range(4):
        print i
    """
    "range(number)" returns a list of numbers
    from zero to the given number
    """
    for i in range(4, 8):
        print i
    
    animals = ['cat', 'dog', 'monkey']         
    for a,b in enumerate(animals):           #enumerate: get both index and item in shape of (a,b)
        print "{}. {} is a kind of animal".format(a,b)
    
    #for in list
    nums = [0, 1, 2, 3, 4]
    squares = [x ** 2 for x in nums if x % 2 == 0]
    print squares   # Prints [0, 1, 4, 9, 16]
```

### while loop

```python
    x = 0
    while x < 4:
        print x
        x += 1  # Shorthand for x = x + 1
```

### Handle exceptions with try/except

```python
    try:
        raise IndexError("This is an index error")  # raise: bring up a error manually
    except IndexError as e:
        pass # what to do if the exception is catched
    except (TypeError, NameError): #multiple exceptions can be handled together
        pass
    else:
        print("No exception, all good!")
    finally: # exception found or not, codes in finally will always be excuted
        print("we can clean up resources here")

```

### File Operation

```python
    with open("myfile.txt") as f:
        for line in f:
            print(line)
    
    contents = {"aa":12, "bb":21}
    with open("myfile1.txt", "w+") as file:
        file.write(str(contents))
    
    with open('myfile1.txt', "r+") as file:
        contents = file.read()
    
```

## Functions

### creat new functions

```python
    def add(x, y):
        print "x is {0} and y is {1}".format(x, y)
        return x + y  # Return values with a return statement
    
    add(5,6)

    add(y=6, x=5)
    
    def add(x,y=6)
        ...         #optional keyword argument


    def varargs(*args):
        return args
    
    varargs(1, 2, 3)  # => (1, 2, 3)
    
    def all_the_args(*args, **kwargs):   # positional argumanets, keywords arguments
        print args
        print kwargs
    
    """
    all_the_args(1, 2, a=3, b=4) prints:
        (1, 2)
        {"a": 3, "b": 4}
    """
    
    x = 5
    def set_global_x(num):
        global x                   # if not global, x will not be the same as global variable x
        print x  # => 5
        x = num  # global var x is now set to 6
        print x  # => 6
    
    # function that has more than 1 class
    def create_adder(x):
        def adder(y):
            return x + y
    
        return adder
    
    add_10 = create_adder(10)
    add_10(3)  # => 13
```

### Lambda expression

Lambda expression is anonymous function, a function that has no name.

For usage, lambda expression can set up a 'abbreviate function'.

format: lambda parameter: expression

```python
    (lambda x: x>2)(3)    # => True
    (lambda x, y: x ** 2 + y ** 2)(2, 1)    # =>5

    list(filter(lambda x:x>5, [3, 4, 5, 6, 7]))  #=> [6,7]
    list(map(lambda x: x+10, [1, 2, 3])) #=> [11, 12, 13]
```

### Modules

```python
    import math
    print(math.sqrt(16))
    
    from math import ceil
    print(ceil(3.7))

    import math as m
    print(m.sqrt(16))

    dir(math) # find out which functions and atrributes are defined in a module
```

## Classes

### Example from LXYM

```python
    # an example of class below
    class Human:
        # A class attribute. It is shared by all instances of this class
        species = "H. sapiens"
    
        # Basic initializer, called when this class is instantiated.
        def __init__(self, name):
            # Assign the argument to the instance's name attribute
            self.name = name
    
            # Initialize property
            self.age = 0
    
        # All methods take "self" as the first argument
        def say(self, msg):
            return "{0}: {1}".format(self.name, msg)
    
        # A class method is shared among all instances
        # They are called with the calling class as the first argument
        @classmethod
        def get_species(cls):
            return cls.species
    
        # A static method is called without a class or instance reference
        @staticmethod
        def grunt():
            return "*grunt*"
    
        # A property is just like a getter.
        # It turns the method age() into an read-only attribute
        # setter and deleter is defined based on this
        @property
        def age(self):
            return self._age
    
        # This allows the property to be set,
        @age.setter
        def age(self, age):
            self._age = age
    
        # This allows the property to be deleted
        @age.deleter
        def age(self):
            del self._age


    # Instantiate a class
    i = Human(name="Ian")
    print i.say("hi")  # prints out "Ian: hi"
    
    j = Human("Joel")
    print j.say("hello")  # prints out "Joel: hello"
    
    # Call our class method
    i.get_species()  # => "H. sapiens"
    
    # Change the shared attribute
    Human.species = "H. neanderthalensis"
    i.get_species()  # => "H. neanderthalensis"
    j.get_species()  # => "H. neanderthalensis"
    
    # Call the static method
    Human.grunt()  # => "*grunt*"
    
    # Update the property
    i.age = 42
    
    # Get the property
    i.age  # => 42
    
    # Delete the property
    del i.age
    i.age  # => raises an AttributeError
```

### Example from Stanford

```python
    class Greeter(object):
    
        # Constructor
        def __init__(self, name):
            self.name = name  # Create an instance variable
    
        # Instance method
        def greet(self, loud=False):
            if loud:
                print('HELLO, %s!' % self.name.upper())
            else:
                print('Hello, %s' % self.name)
    
    g = Greeter('Fred')  # Construct an instance of the Greeter class
    g.greet()            # Call an instance method; prints "Hello, Fred"
    g.greet(loud=True)   # Call an instance method; prints "HELLO, FRED!"
    
    # g equals to self in Greeter __init__ , and when define a class variate, __init__ will be called automatically
```

# Numpy

## creat numpy
```python
    import numpy as py
    a = np.array([1,2,3])
    a = np.array([1,2,3], dtype = float)      # define data type;
    # check datatype by a.dtype
    a = np.array([[1,2,3],[4,5,6]])
    a = np.full((2,3),0)           #= [[0, 0, 0],[0, 0, 0]]
    a = np.eye(2)                  #= [[1,0],[0,1]]  identity matrix of rank 2
    c = np.arange(4)               #= [0, 1, 2, 3]
    
    b = a [1:3, 2:3]        # b is subarray of a, modifying b will change a alsop
    b = a [1:3,2]           # same as previous line but b will be rank 1
    
    b = np.array([0, 1, 0, 2])
    c = a [np.arange(4), b]     # combine 2 array to indexing
    
    #boolean array indexing
    
    a = np.array([[1,2], [3, 4], [5, 6]])
    
    bool_idx = (a > 2)
    
    print bool_idx      # Prints "[[False False]
                         #          [ True  True]
                         #          [ True  True]]"
    print a[bool_idx]    #          [3 4 5 6]   use boolean array indexing to construct a rank 1 array
    print a[(a>2)]       #equal
```

## Array math
```python
    import numpy as np
    
    x = np.array([1,2],[3,4], dtype = np.float64)
    y = np.empty_like(x)                           # copy
    y = np.array([5,6],[7,8], dtype = np.float64)
    
    print x + y          # elementwise operation
    print np.add(x,y)    # elementwise also
    
    print x - y
    print np.subtract(x,y)
    
    print x * y
    print np.multiply(x,y)
    
    print x/y
    print np.divide(x,y)
    
    print np.sqrt(x)
    
    """
    matrix operation below
    """
    
    v = np.array([9,10])
    w = np.array([11,12])
    
    print np.dot(v,w)    #inner product
    print np.dot(x,v)    #
    
    print x.T            # transpose x
    """
    other operations
    """
    print np.sum(x)      # sum of all elements
    print np.sum(x, axis = 0)
    print np.sum(x, axis = 1)
    
    v = np.array([1, 2, 3])
    vv = np.reshape(v, (3, 1))      #reshape: number of elements must be the same
    
    v[1] = 10
    print v, vv                     #vv will change also
```

## Broadcasting
```python
    x = np.array([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]])
    v = np.array([1, 0, 1])
    y = np.empty_like(x)   # Create an empty matrix with the same shape as x
    
    vv = np.tile(v, (4, 1))    # stack 4 copire of v on top of each other
                               # (4,2) means stack 4 matrixs consisting of 2 copies of v
    for i in range(4)
        y[i, :] = x[i, :] + v
    #equals to y = x + vv
    #equals to y = x + v
    
    #broadcast: change the matrix that has lower rank, to make the operation available
    v = np.array([1, 2, 3])
    w = np.array([4, 5])
    print np.reshape(v, (3, 1))*w
```
