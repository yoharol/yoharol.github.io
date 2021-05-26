---
layout: posts
tag: C++
---



## Image-Based 3D Navigation

Github:  <a href="https://github.com/MitoGame/Image-Based-Navigation" target="_blank">repository</a>

Origin paper: <a href="https://www-sop.inria.fr/reves/Basilic/2013/CDSD13/" target="_blank">Depth Synthesis and Local Warps for Plausible Image-based Navigation</a>

With a set of images from different views of the same scene, this project can reconstruct the depth map and warp images to generate plausible image-based novel views, enable users to navigate between different views of a scene like navigating in front of a completed 3D model. 

<div style="text-align: center"><img src="/img/blogs/nav1.png" width="700" /> </div>
In short, by dividing millions of pixels into hundreds of units, we can deduce new information of the scene and render an image-based 3D model.