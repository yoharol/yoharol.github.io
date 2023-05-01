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

in which $\mathbf{M}_j = \begin{pmatrix}w_{1j}(\mathbf{x}_1^T\ \ 1) & \dots & w_{nj}(\mathbf{x}_n^T \ \ 1)\end{pmatrix}$. 

On the other case, suppose we want to focus on studying vertex position $\mathbf{x}_i$. What will the matrix form be like? The answer is quite simple, so I just leave it here as an open question.

## Fast Mass Spring System

Now we consider a more complicated example. In this [paper](https://users.cs.utah.edu/~ladislav/liu13fast/liu13fast.html) the incremental potential energy of the mass spring system is written as

$$
g(x)=\sum_i \frac{1}{2}m_i ||\mathbf{x}_i-\mathbf{p}_i||^2 + \sum_j \frac{1}{2}k_j||\mathbf{x}_{j1}-\mathbf{x}_{j2}-\mathbf{d}_j||^2
$$

First we need to introduct matrix tools for square norm.  There are 3 options. The first is to stack all vector into a long vector and compute the inner product. It is common and easy, but inelegant. The other two options are frobenius inner product and trace:

$$
\langle \mathbf{A}, \mathbf{B} \rangle_{\text{F}}=\sum_{i,j}A_{ij}B_{ij} = \text{tr}(\mathbf{A}^T\mathbf{B})=\text{tr}(\mathbf{A}\mathbf{B}^T)
$$

We want to study the vertex position $\mathbf{x}_i$ here. The first we need to do is to build the matrix 

$$
\mathbf{X}=\begin{pmatrix}\mathbf{x}_{11} & \mathbf{x}_{12} & \mathbf{x}_{13} \\ \vdots & \vdots & \vdots \\ \mathbf{x}_{n1} & \mathbf{x}_{n2} & \mathbf{x}_{n3}\end{pmatrix}
$$

as the vertical stack of all position vectors. The sum of square norm is

$$
\sum_i ||\mathbf{x}_i||^2=\text{tr}(\mathbf{X}\mathbf{X}^T)
$$

Now the problem is the term $\mathbf{x}_{j1}-\mathbf{x}_{j2}-\mathbf{d}_j$. We set up a *selection matrix* as:

$$
\begin{align*}
\mathbf{x}_{j1}^T-\mathbf{x}_{j2}^T&=\mathbf{G}_j^T\mathbf{X}\\
\mathbf{d}_j^T&=\mathbf{S}_j^T\mathbf{D}
\end{align*}
$$

Then we have

$$
\begin{align*}
\sum_j \frac{1}{2}k_j||\mathbf{x}_{j1}^T-\mathbf{x}_{j2}^T-\mathbf{d}_j^T||^2&=\sum_j\frac{1}{2}k_j||\mathbf{G}^T_j \mathbf{X}-\mathbf{S}^T_j\mathbf{D}||^2\\
&= \sum_j \frac{1}{2}k_j\text{tr}\left((\mathbf{G}^T_j\mathbf{X}-\mathbf{S}^T_j\mathbf{D})^T(\mathbf{G}^T_j\mathbf{X}-\mathbf{S}^T_j\mathbf{D})\right)\\
&=\text{tr}\left(\frac{1}{2}\mathbf{X}^T\left(\sum_j(k_j\mathbf{G}_j\mathbf{G}_j^T)\right)\mathbf{X}\right)-\text{tr}\left(\mathbf{X}^T\left(\sum_jk_j\mathbf{G}_j\mathbf{S}_j^T\right)\mathbf{D}\right)+\mathbf{C}\\
&= \frac{1}{2}\text{tr}(\mathbf{X}^T\mathbf{L}\mathbf{X})-\text{tr}(\mathbf{X}^T\mathbf{J}\mathbf{D})+\mathbf{C}.
\end{align*}
$$

Notice that we ignore the constant term that is irrelavant to $\mathbf{X}$. The result reveals the true nature of this equation, and it is easy for us to further differentiate this formula. 