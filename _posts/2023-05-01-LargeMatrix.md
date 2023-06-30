---
layout: post
title: "Write Summation as Matrix"
tag: note
categories: research
mathjax: true
---

It is hard to understand complex computation with summation of numerous symbols. Writing a linear system in matrix form can greatly help to get a high level perspective. However, building a matrix form can be brain burning. 

It is hard to clearify a general method for such formula conversion. In this blog I record some specific cases to remind myself what is the common routine and useful toolbox. 

## Linear Blend Skinning

LBS can be represented as

$$
\mathbf{x}_i=\sum_{j}w_{ij}\mathbf{T}_j\begin{pmatrix}\mathbf{x}_i \\ 1\end{pmatrix}
$$

which is a simple summation. 

Suppose $dim=3$, we want a matrix multiplication to cover all the $\mathbf{x}_i$ and $\mathbf{T}_j$. 

There are different ways to build such a matirx form. The first thing we need to figure out is which is the most important elements, and stack them into a matrix. Here we suppose the problem is to study affine transformation $\mathbf{T}_j$. To write $\mathbf{T}$ as the last element we first need to transpose the formula as

$$
\mathbf{x}_i^T=\sum_j w_{ij}\begin{pmatrix}\mathbf{x}_i & 1 \end{pmatrix}\mathbf{T}_j^T.$$

Stack all the transposed affine transformation into a large matrix 

$$\mathbf{T}=\begin{pmatrix}\mathbf{T}_1\\\mathbf{T}_2\\\vdots\\\mathbf{T}_m\end{pmatrix}.$$

A summation is equal to an inner product, which can happen between two tensors of any dimensions. Here the inner product can be built between two matrix

$$
\mathbf{X}'=\mathbf{M}\mathbf{T}
$$

in which $$\mathbf{M}_j = \begin{pmatrix}w_{1j}(\mathbf{x}_1^T\ \ 1) & \dots & w_{nj}(\mathbf{x}_n^T \ \ 1)\end{pmatrix}$$. 

On the other case, suppose we want to focus on studying vertex position $\mathbf{x}_i$. What will the matrix form be like? The answer is quite simple, so I just leave it here as an open question.

## Fast Mass Spring System

Now we consider a more complicated example. In this [paper](https://users.cs.utah.edu/~ladislav/liu13fast/liu13fast.html) the incremental potential energy of the mass spring system is written as

$$
g(x)=\sum_i \frac{1}{2}m_i \lVert\mathbf{x}_i-\mathbf{p}_i\rVert^2 + \sum_j \frac{1}{2}k_j\lVert\mathbf{x}_{j1}-\mathbf{x}_{j2}-\mathbf{d}_j\rVert^2
$$

First we need to introduct matrix tools for square norm.  There are 3 options. The first is to stack all vector into a long vector and compute the inner product. It is common and easy, but inelegant. The other two options are frobenius inner product and trace:

$$
\mathbf{A}:\mathbf{B}=\langle \mathbf{A}, \mathbf{B} \rangle_{\text{F}}=\sum_{i,j}A_{ij}B_{ij} = \text{tr}(\mathbf{A}^T\mathbf{B})=\text{tr}(\mathbf{A}\mathbf{B}^T)
$$

We want to study the vertex position $\mathbf{x}_i$ here. The first we need to do is to build the matrix 

$$
\mathbf{X}=\begin{pmatrix}\mathbf{x}_{11} & \mathbf{x}_{12} & \mathbf{x}_{13} \\ \vdots & \vdots & \vdots \\ \mathbf{x}_{n1} & \mathbf{x}_{n2} & \mathbf{x}_{n3}\end{pmatrix}
$$

as the vertical stack of all position vectors. The sum of square norm is

$$
\sum_i \lVert\mathbf{x}_i\rVert^2=\text{tr}(\mathbf{X}\mathbf{X}^T)
$$

Now the problem is the term $$\mathbf{x}_{j1}-\mathbf{x}_{j2}-\mathbf{d}_j$$. We set up a *selection matrix* as:

$$
\begin{align*}
\mathbf{x}_{j1}^T-\mathbf{x}_{j2}^T&=\mathbf{G}_j^T\mathbf{X}\\
\mathbf{d}_j^T&=\mathbf{S}_j^T\mathbf{D}
\end{align*}
$$

Then we have

$$
\begin{align*}
\sum_j \frac{1}{2}k_j\lVert\mathbf{x}_{j1}^T-\mathbf{x}_{j2}^T-\mathbf{d}_j^T\rVert^2&=\sum_j\frac{1}{2}k_j\lVert\mathbf{G}^T_j \mathbf{X}-\mathbf{S}^T_j\mathbf{D}\rVert^2\\
&= \sum_j \frac{1}{2}k_j\text{tr}\left((\mathbf{G}^T_j\mathbf{X}-\mathbf{S}^T_j\mathbf{D})^T(\mathbf{G}^T_j\mathbf{X}-\mathbf{S}^T_j\mathbf{D})\right)\\
&=\text{tr}\left(\frac{1}{2}\mathbf{X}^T\left(\sum_jk_j\mathbf{G}_j\mathbf{G}_j^T\right)\mathbf{X}\right)-\text{tr}\left(\mathbf{X}^T\left(\sum_jk_j\mathbf{G}_j\mathbf{S}_j^T\right)\mathbf{D}\right)+\mathbf{C}\\
&= \frac{1}{2}\text{tr}(\mathbf{X}^T\mathbf{L}\mathbf{X})-\text{tr}(\mathbf{X}^T\mathbf{J}\mathbf{D})+\mathbf{C}.
\end{align*}
$$

Notice that we ignore the constant term that is irrelavant to $\mathbf{X}$. The result reveals the true nature of this equation, and it is easy for us to further differentiate this formula. 

### Trace Derivative

The most important fact about trace derivative is

$$
\frac{\partial \text{tr}(\mathbf{X})}{\partial \mathbf{X}}=\mathbf{I}
$$

or we can write it as

$$
\delta \text{tr}(\mathbf{X})=\mathbf{I}:\delta\mathbf{X}
$$

It is convenient to apply the consequent chain rule. However, the most convenient way is to write trace in the summation form and differentiate it directly.

For example, we know that $\frac{\partial\mathbf{A}\mathbf{X}}{\partial \mathbf{X}}$ is a fourth-order tensor 

$$
\frac{\partial (\mathbf{A}\mathbf{X})_{ij}}{\partial X_{ab}}=\delta_{jb}A_{ia}
$$

The trace $\text{tr}(\mathbf{A}\mathbf{X})=\sum_{i} (\mathbf{A}\mathbf{X})_{ii}$, so the derivative is

$$
\frac{\partial\text{tr}(\mathbf{A}\mathbf{X})}{\partial X_{ab}}=\sum_i \delta_{ib}A_{ia}=A_{ba}
$$

or simply

$$
\frac{\partial \text{tr}(\mathbf{A}\mathbf{X})}{\partial \mathbf{X}}=\mathbf{A}^T.
$$

Now we consider the quadratic form

$$
\begin{align*}
\frac{\partial \text{tr}(\mathbf{X}^T\mathbf{A}\mathbf{X})}{\partial\mathbf{X}_{ab}}&=\frac{\partial }{\partial \mathbf{X}_{ab}}\left(\sum_{i,k,l}A_{kl}X_{ki}X_{li}\right)\\
&=\sum_{l}A_{al}X_{lb}+\sum_k A_{ka}X_{kb}\\
\end{align*}
$$

It is clear that the terms on the RHS is the matrix product, leads to

$$
\frac{\partial\text{tr}(\mathbf{X}^T\mathbf{A}\mathbf{X})}{\partial \mathbf{X}}=(\mathbf{A}+\mathbf{A}^T)\mathbf{X}
$$

For more example of matrix derivative, refer to this [matrix cookbook](https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf).

Now let us go back to the fast mass spring system. The incremental potential energy is 

$$
g(x)=\frac{1}{2h^2}\text{tr}\left((\mathbf{X}-\mathbf{P})^T\mathbf{M}(\mathbf{X}-\mathbf{P})\right)+\frac{1}{2}\text{tr}(\mathbf{X}^T\mathbf{L}\mathbf{X})-\text{tr}(\mathbf{X}^T\mathbf{J}\mathbf{D})+\mathbf{C}.
$$

Based on the knowledge in this section, it is easy to get the derivative 

$$
\frac{\partial g(x)}{\partial \mathbf{X}}=\frac{1}{h^2}\mathbf{M}(\mathbf{X}-\mathbf{P})+\mathbf{L}\mathbf{X}-\mathbf{J}\mathbf{D}
$$

in which both $\mathbf{M}$ and $\mathbf{L}$ are symmetric matrix. To minimize it, we need to solve

$$(\frac{\mathbf{M}}{h^2}+\mathbf{L})\mathbf{X}=\frac{1}{h^2}\mathbf{M}\mathbf{P}+\mathbf{J}\mathbf{D}$$

The system matrix $\frac{\mathbf{M}}{h^2}+\mathbf{L}$ is symmetric, positive definite and constant, so we can solve it efficiently.

