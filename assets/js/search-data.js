// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-write-summation-as-matrix",
        
          title: "Write Summation as Matrix",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/LargeMatrix/";
          
        },
      },{id: "post-inverse-kinematics",
        
          title: "Inverse Kinematics",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/InverseKinematics/";
          
        },
      },{id: "post-representations-of-rotation-and-derivation",
        
          title: "Representations of Rotation and Derivation",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Rotation/";
          
        },
      },{id: "post-assembly-language-and-language-c",
        
          title: "Assembly Language and Language C",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/SSH-test/";
          
        },
      },{id: "post-note-pointer-in-c",
        
          title: "Note: Pointer in C++",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/Pointers-in-Cpp/";
          
        },
      },{id: "post-physics-based-animation-elasticity-lagrangian-finite-elements-on-linear-tetrahedral-meshes",
        
          title: "Physics Based Animation: Elasticity, Lagrangian finite elements on linear tetrahedral meshes",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/Games202-lec3/";
          
        },
      },{id: "post-physics-based-animation-mass-spring-system",
        
          title: "Physics Based Animation: Mass Spring System",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/Games202-lec2/";
          
        },
      },{id: "post-note-taichi",
        
          title: "Note: Taichi",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/Taichi-Notes/";
          
        },
      },{id: "post-review-return-of-the-obra-dinn",
        
          title: "Review: Return of the Obra Dinn",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/Review-Return-of-the-Obra-Dinn/";
          
        },
      },{id: "post-game-turn-on-the-lights",
        
          title: "Game: Turn on the Lights",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/project-5/";
          
        },
      },{id: "post-game-lost",
        
          title: "Game: Lost",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/project-3/";
          
        },
      },{id: "post-coding-ray-casting-in-2d-pixel-game-engine",
        
          title: "Coding: Ray Casting in 2D pixel game engine",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/Ray-Casting-in-2D-Game-Engine/";
          
        },
      },{id: "post-game-the-last-drop",
        
          title: "Game: The Last Drop",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/project-2/";
          
        },
      },{id: "post-design-tiny-musician",
        
          title: "Design: Tiny Musician",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/project-1/";
          
        },
      },{id: "post-coding-depth-synthesis-for-image-based-navigation",
        
          title: "Coding: Depth Synthesis for Image-based Navigation",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/Image-based-navigation/";
          
        },
      },{id: "post-coding-3d-model-reconstruction",
        
          title: "Coding:	3D Model Reconstruction",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/3D-model-reconstruction/";
          
        },
      },{id: "post-note-org-mode-basics",
        
          title: "Note: Org-Mode Basics",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/Org-Mode-Basic/";
          
        },
      },{id: "post-note-博客的yaml编写-图片与数学公式嵌入",
        
          title: "Note: 博客的YAML编写，图片与数学公式嵌入",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/YAML-Front%E4%B8%8E%E6%95%B0%E5%AD%A6%E5%85%AC%E5%BC%8F%E5%B5%8C%E5%85%A5/";
          
        },
      },{id: "post-note-python-basics",
        
          title: "Note: Python Basics",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/Learn-python-in-Y-years/";
          
        },
      },{id: "post-note-github使用与jekyll博客基础",
        
          title: "Note: Github使用与jekyll博客基础",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/Github%E5%88%9D%E7%94%A8%E7%AC%94%E8%AE%B0/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-acm',
        title: 'ACM DL',
        section: 'Socials',
        handler: () => {
          window.open("https://dl.acm.org/profile/99660989255/", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%68%61%72%6F%6C@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yoharol", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yuhan-wu-632318197", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://inamika.itch.io/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
