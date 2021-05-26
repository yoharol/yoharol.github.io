<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#orga087382">1. Python Basic</a>
<ul>
<li><a href="#orgc43a7b4">1.1. 基本数据类型</a></li>
<li><a href="#org4fa725b">1.2. 变量</a></li>
<li><a href="#org55f3396">1.3. Control Flow</a>
<ul>
<li><a href="#org6a21757">1.3.1. if statement</a></li>
<li><a href="#orgf34b983">1.3.2. for loop</a></li>
<li><a href="#org4582376">1.3.3. while loop</a></li>
</ul>
</li>
<li><a href="#org57c2424">1.4. Functions</a>
<ul>
<li><a href="#orge7114a6">1.4.1. creat new functions</a></li>
</ul>
</li>
<li><a href="#org683b899">1.5. Classes</a>
<ul>
<li><a href="#org2225e13">1.5.1. Example from LXYM</a></li>
<li><a href="#org4dd2875">1.5.2. Example from Stanford</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#org569e194">2. Numpy</a>
<ul>
<li><a href="#orgbc28a41">2.1. creat numpy</a></li>
<li><a href="#org14e1ae8">2.2. Array math</a></li>
<li><a href="#org81d3b29">2.3. Broadcasting</a></li>
</ul>
</li>
</ul>
</div>
</div>


<a id="orga087382"></a>

标题灵感来源于一个名为Learn x in y minutes的简明快速编程语言学习网站，同时这篇python的备忘录性质教程我会一直用org-mode维护，也就有了Learn python in Y years.

Theano的使用应该会单独成立Deep Learning学习文档中，不会加入到本文档中来.

# Python Basic


<a id="orgc43a7b4"></a>

## 基本数据类型

-   1            -> 2<3<4
    -   **5//3      :** =1    integer division
    -   5%3
    -   **5\*\*3      :** 5<sup>3</sup>
-   1.0
-   True,False   -> and , or , not
-   "This is a string"
    -   "strinG a"+"string b"
    -   "string"\*3
    -   "string"[0]
    -   len("string")
    -   z = "The items in the basket are %s and %s" % (x, y)
    -   "{} is a {}".format("This", "placeholder")
    -   print z.center(20)              ::rjust,center, padding with spaces defined by number
-   NONE  (refer to NULL in C++)
    -   None is NONE
-   type(x)
    -   print type(x)


<a id="org4fa725b"></a>

## 变量

-   print "string"
-   **print x,y,z,          :** x y z
-   x = input("Enter a string")
    -   enter: string
    -   error
    -   enter: "string"
    -   x = "string"
-   **x.replace('t','b')     :** replace 't' with 'b'
-   unassigned<sub>var</sub>
    -   error
-   "" if a>b else ""
-   **lisT = [1,2,3]         :** list
    -   lisT.append(4)
    -   lisT.pop()
    -   lisT[0]
    -   **list[1:100:5]          :** li[start:end:step]
    -   **del lisT[2]            :** remove lisT[2]
    -   **lisT.remove(2)         :** remove 2  (compared to del)
    -   lisTa + lisTb
    -   **LisT.insert(1,5)       :** put 5 on index 1
    -   **lisT.extend(b)         :** = lisT+b
    -   **lisT.index(2)          :** return index of 2
    -   **1 in lisT              :** True or False
    -   len(lisT)
-   a, b, c = 1, 2, 3
-   a, b, c = d, b, a
-   **dict = {"one" : 1, "two" : 2, "three" : 3}  :** dictionary
    -   **dict["one"]            :** 1
    -   **dict.keys()            :** ["one","two","three"]
    -   **dict.values()          :** [1,2,3]
    -   **dict.items()           :** [("one",1), ("two",2), ("three",3)]
    -   **"one" in dict          :** True
    -   **1 in dict              :** False
    -   dict["four"] = 4
-   est = set()
    -   **est = set([1,2,3,2])   :** est={1,2,3}
    -   **est = set([3,2,1,2])   :** est={1,2,3}  sorted
    -   **est.add(5)             :** est={1,2,3,5}
    -   **ets = {1,2,3,2,6}      :** ets={1,2,3,6}
    -   **ets & est              :** {1,2,3}
    -   **ets&brvbar;est                :** {1,2,3,5,6}
    -   **ets - est              :** {6}
    -   **ets ^ est              :** {5,6}   find differences
    -   **2 in set               :** True
    -   **print len(est)         :** 4


<a id="org55f3396"></a>

## Control Flow


<a id="org6a21757"></a>

### if statement

    if some_var > 10:
        print "some_var is totally bigger than 10."
    elif some_var < 10:  # This elif clause is optional.
        print "some_var is smaller than 10."
    else:  # This is optional too.
        print "some_var is indeed 10."


<a id="orgf34b983"></a>

### for loop

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
    
    animals = ['cat', 'dog', 'monkey']         #enumerate: get index and item in shape of (a,b)
    for a,b in enumerate(animals):
        print "{} amazing {}".format(a,b)
    
    #for in list
    nums = [0, 1, 2, 3, 4]
    squares = [x ** 2 for x in nums if x % 2 == 0]
    print squares   # Prints [0, 1, 4, 9, 16]


<a id="org4582376"></a>

### while loop

    x = 0
    while x < 4:
        print x
        x += 1  # Shorthand for x = x + 1


<a id="org57c2424"></a>

## Functions


<a id="orge7114a6"></a>

### creat new functions

    def add(x, y):
        print "x is {0} and y is {1}".format(x, y)
        return x + y  # Return values with a return statement
    
    add(5,6)
    
    def add(x,y=6)
        ...         #optional keyword argument


    def varargs(*args):
        return args
    
    varargs(1, 2, 3)  # => (1, 2, 3)
    
    def all_the_args(*args, **kwargs):
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


<a id="org683b899"></a>

## Classes


<a id="org2225e13"></a>

### Example from LXYM

    # an example of class below
    class Human(object):
        # A class attribute. It is shared by all instances of this class
        species = "H. sapiens"
    
        # Basic initializer, this is called when this class is instantiated.
        # Note that the double leading and trailing underscores denote objects
        # or attributes that are used by python but that live in user-controlled
        # namespaces. You should not invent such names on your own.
        def __init__(self, name):
            # Assign the argument to the instance's name attribute
            self.name = name
    
            # Initialize property
            self.age = 0
    
        # An instance method. All methods take "self" as the first argument
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
        # of the same name.
        @property
        def age(self):
            return self._age
    
        # This allows the property to be set
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


<a id="org4dd2875"></a>

### Example from Stanford

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


<a id="org569e194"></a>

# Numpy


<a id="orgbc28a41"></a>

## creat numpy

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


<a id="org14e1ae8"></a>

## Array math

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


<a id="org81d3b29"></a>

## Broadcasting

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

