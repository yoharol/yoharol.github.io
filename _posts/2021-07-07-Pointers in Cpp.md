---
layout: post
title: "Note: Pointer in C++"
tag: note
categories: blog
---

Every time I studied about pointers in C++, it soon got forgot and became confusing again after a period of time because it's totally replaced in other programming languages. I'll especially create a post about it for future review.

C++ used call-by-value as default. When we clarify a new variable, it's actually an address, and value stored in corresponding address.

```c++
int a=10;
std::cout << "address of variable is " << &a << " and value in this address is " << a << std::endl;
TestClass b;
b.setValue(10);
std::cout << "address of class is " << &b << " and value in this address is " << b.getValue() << std::endl;
```

Pointer is a more "raw" variable, it's a variable that stores address in it. So **a pointer is equal to the address of a variable**.

```c++
int* pointer_int = &a;
std::cout << "address of variable is " << pointer_int << " and value in this address is " << *pointer_int << std::endl;
TestClass* pointer_class = &b;
std::cout << "address of class is " << pointer_class << " and value in this address is " << pointer_class->getValue() << std::endl;
```

By pointer, we can better understanding array in C++. When we clarify an array of length n, we actually clarify successive n addresses and create a pointer to the first address.

```c++
int a[10];
int* b = new int[10]; //allocate n successive values to b
a[5]=12;
*(b+5)=12;
// a and b is equivalent, and a is a pointer
// which also means that: a[5] == *(a+5)
```

So to dynamically create a 2d array in C++, first we need to create an array of n pointers, and then for each pointer we allocate m successive addresses.

```c++
int* example = new int[n]; //allocate n values to example
int** a = new int*[n]; //allocate n pointers to a
for(int i=0;i<n;i++)
    *(a+i) = new int[m];  //actually we can allocate different length of array for each pointer
// *(*(a+1)+2) == a[1][2]
```

An example to understand what's actually C++ is doing, is to create a pointer to an existing 2d array.

```c++
int a[n][m];
int example1[m]; //In this clause, we create a pointer to an array of m elements.
int* example2; //In this clause, we create a pointer to a value of int.
int(*p)[m]; //So combine example1 and example2, we create a pointer of type int*, and this is a pointer to an array of m elements. 
p = a;
//*(*(p+1)+2) == a[1][2]

```

Why m should be clarified in the declaration of p? Because C++ needs to know **What exactly a pointer is pointed to**.

In "int* p", C++ knows that:

1. *p* is a pointer
2. It's pointed to an integer value

So in "int(*p)[m]", it also declare two things:

1. *p* is a pointer

2. It's pointed to an array of *m* integers

That's why this is incorrect:

```c++
int a[n][m];
int** p=a;
```

Because C++ already knows that *a* is a pointer to m values, however *p* is just a pointer to pointer. *a* and *p* have different data structure, but we can access the data in them with same method.