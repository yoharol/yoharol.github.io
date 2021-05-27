---
layout: post
tag: note
categories: blog
title: "Note: Taichi2"
mathjax: true
---

{% include mathjax.html %}

Taichi is a high-performance language for computer graphics, and the creator of Taichi set up a tutorial course for it. This post is a record of some easy implementation by myself.

# Tutorial program explained

```python
import taichi as ti

ti.init(arch=ti.cuda)        #arch=ti.cpu, ti.gpu, ti.cuda, ti.opengl

n = 320
pixels = ti.field(dtype=float, shape=(n*2, n))
# a = ti.var(dt=ti.f32, shape=(42, 63)) # tensor of 42*63 scalars
# b = ti.Vector(3, dt=ti.f32, shape=4) # tensor of 4 * 3D vectors
# c = ti.Matrix(2, 2, dt=ti.f32, shape=(3, 5)) # tensor of 3*5 2*2 matrices
# loss = ti.var(dt=ti.f32, shape=()) # (0-D) tensor which is a single scalar
# b[2] = [3, 4, 5]
# loss[None] = 3

# ti.Matrix can only be used for small matrix like 4*4. Large matrix should be used as 2D tensor of scalars
# ti.Vector is the same as ti.Matrix but has only one column.

# Now all var, vector and matrix is updated to field

# Taichi function
# Can only be called by Taichi kernels and other Taichi functions
# Up to only one return argument 
@ti.func
def complex_sqr(z):
    return ti.Vector([z[0]**2-z[1]**2, z[1]*z[0]*2])

# Taichi kernel, complied just-in-time, statically-typed, lexically-scoped, parallel and differentiable
# Kernel arguments and return values must be type-hinted
@ti.kernel
def paint(t: float):
    for i, j in pixels:
        c = ti.Vector([-0.8, ti.cos(t)*0.2])
        z = ti.Vector([i/n-1, j/n-0.5]) * 2
        iterations = 0
        while z.norm() < 20 and iterations < 50:
            z = complex_sqr(z)+c
            iterations += 1
        pixels[i, j] = 1-iterations*0.02


gui = ti.GUI("Julia Set", res=(n*2, n))

for i in range(1000000):
    paint(i*0.03)
    gui.set_image(pixels)
    gui.show()
```

# Useful operations

**Math operations:**

```python
ti.(sin, cos, asin, acos, atan2(x, y), cast(x, data_type), sqrt, floor, ceil, inv, tan, tanh, exp, log, random(data_type))

abs, int, float, max(x, y, ...), min(x, y, ...), x**y, x/b, x//b
```

**Matrix operations:**

Differentiate element-wise product \* and matrix product @.

```python
A*B

A@B

A.(transpose, inverse, trace, determinant(type), normalized, cast(type))

R, S = ti.polar_decompose(A, ti.f32) 
U, sigma, V = ti.svd(A, ti.f32) # sigma is a 3*3 diagonal matrix

ti.sin(A)/cos(A) #element-wise
```

**Note: polar decomposition**

A matrix $A\in \mathbb{C}^{m\times n}$ with $m>n$, polar decomposition is a factorization $A=UH$ where $U\in \mathbb{C}^{m\times n}$ has orthonormal columns and $H\in\mathbb{n\times n}$ is Hermitian positive semidefinite. This composition is a generalization of the polar representation $z=re^{i\theta}$ of a complex number, where $H$ corresponds to $r\geq 0$ and $U$ to $e^{i\theta}$. When A is real, H is symmetrix positive semidefinite. When m=n, U is a square unitary matrix.

**Note: Singular Value Decomposition**

TODO

# Parallel for-loops