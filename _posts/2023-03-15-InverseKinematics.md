---
layout: post
title: "Inverse Kinematics"
tag: note
categories: research
mathjax: true
---

In this article we discuss a simple exmaple of inverse kinematics.

We have an object composed of vertices \(\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_n\in\mathcal{R}^{dim}\)(\(d=2\) or \(3\)) with corresponding rest pose position \(\overline{\mathbf{x}}_1, \overline{\mathbf{x}}_2, \dots, \overline{\mathbf{x}}_n\). For convenience we concatenate all of positions into a vector \(\mathbf{X}\in\mathbf{R}^{n\cdot\mathrm{dim}\times 1}\). 

A set of control points is specified \(\mathcal{P}=\{\mathbf{P}_1, \mathbf{P}_2,\dots, \mathbf{P}_m\}\). Practically the controllers come within shapes as points, bones and cages. We will discuss in the next section that they can all be translated as oriented control points with constriants. Each control points takes a rotation \(\mathbf{R}_i\) and a translation \(\mathbf{d}_i\). In the rest pose we define \(\mathbf{\overline{R}}_i=\mathbf{I}\), and translation \(\mathbf{\overline{d}}_i\). 

State of each control point can be represented by $s$ parameters, which means that $s$ is the degrees of freedom. We summarize all of parameters that reprensent the degrees of freedom of control points into a long vector \(\mathbf{\theta}\in\mathbf{R}^{m\cdot s\times 1}\)

We focus on standard linear blend skinning(LBS) method. The rigged position \(\mathbf{x}^r_1, \mathbf{x}^r_2,\dots, \mathbf{x}^r_n\) is manipulated by weighted linear combination of transformations of all control points:

\[\mathbf{x}_i^r=\sum_{j=1}^m w_{ij}\left[\mathbf{R}_j(\mathbf{\overline{x}}_i-\overline{\mathbf{d}}_j)+\mathbf{d}_j\right]\]

Or we can say that the rigged position \(\mathbf{X}^r\) is controlled by parameter set $\theta$ as $\mathbf{X}^r=\mathbf{X}^r(\theta)$.

Now given positions of vertices \(\mathbf{X}\). Denote the mass matrix as \(\mathbf{M}=\mathrm{diag}(m_1, m_2, \dots, m_n)\otimes \mathbf{I}^{\mathrm{dim}\times\mathrm{dim}}\). We can define the error between given positions and rigged positions as a quadratic form:

\[\ \ \ g(\theta)=\frac{1}{2}\big(\mathbf{X}-\mathbf{X}^r(\theta)\big)^T\mathbf{M}\big(\mathbf{X}-\mathbf{X}^r(\theta)\big)\]

We would like to find the best pose of controllers to fit the given shape. This can be written as a minimization problem:

\[\theta_0= \underset{\mathbf{\theta}}{\operatorname{argmin}}\ \ g(\theta)\]

This problem can be solved seperately and iteratively:

1. Find optimized translation $\mathbf{d}_1, \mathbf{d}_2, \dots, \mathbf{d}_n$
2. Find optimized rotation $\mathbf{R}_1, \mathbf{R}_2, \dots, \mathbf{R}_n$

# Find Optimized Translation





