---
layout: post
title: "Inverse Kinematics"
tag: note
categories: research
mathjax: true
---

In this article we discuss a simple exmaple of inverse kinematics.

We have an object composed of vertices $\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_n\in\mathbb{R}^{dim}$($d=2$ or $3$) with corresponding rest pose position $\overline{\mathbf{x}}_1, \overline{\mathbf{x}}_2, \dots, \overline{\mathbf{x}}_n$. For convenience we concatenate all of positions into a vector $\mathbf{X}\in\mathbf{R}^{n\cdot\mathrm{dim}\times 1}$. 

A set of control points is specified $\mathcal{P}=\{\mathbf{P}_1, \mathbf{P}_2,\dots, \mathbf{P}_m\}$. Practically the controllers come within shapes as points, bones and cages. We will discuss in the next section that they can all be translated as oriented control points with constriants. Each control points takes a rotation $\mathbf{R}_i$ and a translation $\mathbf{d}_i$. In the rest pose we define $\mathbf{\overline{R}}_i=\mathbf{I}$, and translation $\mathbf{\overline{d}}_i$. 

State of each control point can be represented by $s$ parameters, which means that $s$ is the degrees of freedom. We summarize all of parameters that reprensent the degrees of freedom of control points into a long vector $\mathbf{\theta}\in\mathbb{R}^{m\cdot s\times 1}$

We focus on standard linear blend skinning(LBS) method. The rigged position $\mathbf{x}^r_1, \mathbf{x}^r_2,\dots, \mathbf{x}^r_n$ is manipulated by weighted linear combination of transformations of all control points:

$$\mathbf{x}_i^r=\sum_{j=1}^m w_{ij}\left[\mathbf{R}_j(\mathbf{\overline{x}}_i-\overline{\mathbf{d}}_j)+\mathbf{d}_j\right]$$

Or we can say that the rigged position $\mathbf{X}^r$ is controlled by parameter set $\theta$ as $\mathbf{X}^r=\mathbf{X}^r(\theta)$.

Now given positions of vertices $\mathbf{X}$. Denote the mass matrix as $\mathbf{M}=\mathrm{diag}(m_1, m_2, \dots, m_n)\otimes \mathbf{I}^{\mathrm{dim}\times\mathrm{dim}}$. We can define the error between given positions and rigged positions as a quadratic form:

$$\ \ \ g(\theta)=\frac{1}{2}\big(\mathbf{X}-\mathbf{X}^r(\theta)\big)^T\mathbf{M}\big(\mathbf{X}-\mathbf{X}^r(\theta)\big)$$

We would like to find the best pose of controllers to fit the given shape, with the precondition that we have aleady been given a parameter set $\theta$ that makes $g(\theta)$ small enough. This can be written as a minimization problem:

$$\theta_0= \underset{\mathbf{\theta}}{\operatorname{argmin}}\ \ g(\theta)$$

This problem can be solved seperately and iteratively:

1. Fix rotation, find optimized translation $\mathbf{d}_1, \mathbf{d}_2, \dots, \mathbf{d}_n$
2. Fix translation, find optimized rotation $\mathbf{R}_1, \mathbf{R}_2, \dots, \mathbf{R}_n$

## Find Optimized Translation

Suppose the rotation of each control point is fixed. Then we have:

$$\mathbf{x}^r_i=\sum_{j=1}^m w_{ij}\mathbf{R}_j(\mathbf{\overline{x}}_i-\mathbf{\overline{d}}_i)+\sum_{j=1}^m w_{ij}\mathbf{d}_j$$

Just as how we define $\mathbf{X}$, we can compress translations of all cntrol points into a long vector $\mathbf{d}\in\mathbb{R}^{\mathrm{dim}\cdot m\times 1}$. Related weights can be summarized into a weight matrix $\mathbf{W}=[w_{ij}]\otimes\mathbf{I}^{\mathrm{dim}\times\mathrm{dim}}$. Then eq. [?] can be written in a matrix form:

$$\mathbf{X}^r = \mathbf{X}^r_{\mathbf{R}}+\mathbf{W}\mathbf{d}$$

We substitute this linear matrix multiplication into $g(\theta)$. In our method the inverse kinematics step is performed in each time step. It is reasonable to take parameter from previous time step as the initial state $\mathbf{d}_{t-1}$, and denote translation in current time step as $\mathbf{d}_{t}=\mathbf{d}_{t-1}+\delta\mathbf{d}$. With a new vector defined as $\mathbf{X}'=\mathbf{X}-\mathbf{X}^r_R-\mathbf{W}\mathbf{d}_{t-1}$, the optimization problem get much simpler:

$$\ \ \ g(\mathbf{d})=\frac{1}{2}\big(\mathbf{X}'-\mathbf{W}\delta\mathbf{d}\big)^T\mathbf{M}\big(\mathbf{X}'-\mathbf{W}\delta\mathbf{d}\big)$$

Now we consider constraints. We suppose that all types of constraints can be denoted as $C(\mathbf{d})=0$, and $C$ is linear. Take a rigid bone as a common exmaple. the distance between two control points should be a constant. Which means that if control point $i$ and $j$ is connected by a control point, then we have a constraint function:

$$C=||\mathbf{d}_i-\mathbf{d}_j||-l_{ij}=0$$

This constraint is nonlinear. However, since we have already fixed the direction of all control points, then the distance constraint is equivalent to a linear constraint:

$$C=\delta\mathbf{d}_i-\delta\mathbf{d}_j=0$$

Another common constraint happens when a control point $\mathbf{d}_j$ is fully governed by users. It simply equals to $\delta\mathbf{d}_j=0$.

Combining all of these linear constraints together, we have a minimization problem constrained by a linear system with constant coefficients:

$$\begin{align*}
    \text{Minimize}&\ \ \  \frac{1}{2}\big(\mathbf{X}'-\mathbf{W}\delta\mathbf{d}\big)^T\mathbf{M}\big(\mathbf{X}'-\mathbf{W}\delta\mathbf{d}\big)\\
    \text{subject to}&\ \ \ \mathbf{G}\delta\mathbf{d}=0
\end{align*}$$

Then by the lagrangian multiplier method, we get a linear system to solve:

$$
\begin{bmatrix} \mathbf{W}^T\mathbf{M}\mathbf{W} & \mathbf{G}^T\\
\mathbf{G} & 0
\end{bmatrix}
\begin{bmatrix} \delta\mathbf{d} \\ \lambda \end{bmatrix}=
\begin{bmatrix}
\mathbf{W}^T\mathbf{M}\mathbf{X}'\\
0
\end{bmatrix}
$$

Notice that coefficient on the left side is constant and symmetric, so we can precompute its inverse matrix or Cholesky decomposition. Only the right side need to be updated.

## Find Optimized Rotation


