---
title: 3D Model Reconstruction
layout: post
tag: C++
categories: works
---

Reconstruct a 3D model from a set of photos.

Github:  <a href="github.com/MitoGame/VisualHull" target="_blank">repository</a>



<div style="text-align: center"><img src="/img/blogs/vsh1.png" width="700" /> </div>
<div style="text-align: center"><img src="/img/blogs/vsh2.png" width="700" /> </div>
With a set of photos taken from different view point, we can build a 3D model by  segmenting the world into vertices and calculating surface vertices of every photo. 

<div style="text-align: center"><img src="/img/blogs/vsh3.png" width="700" /> </div>
With enough surface vertices, we can complete the whole surface, calculate surface normal and reconstruct the whole 3D model.

<div style="text-align: center"><img src="/img/blogs/vsh4.png" width="700" /> </div>
This project can enable the whole process to be finished within 20 seconds.