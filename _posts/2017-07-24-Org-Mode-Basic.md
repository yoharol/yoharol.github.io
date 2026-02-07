---
layout: post
tag: note
categories: blog
title:	"Note: Org-Mode Basics"
---

This file is about basic knowledges about Org-Mode,and application,GTD,for example. 



official tutorial: <http://home.fnal.gov/~neilsen/notebook/orgExamples/org-examples.html> 

tutorial on CSDN:<http://www.cnblogs.com/qlwy/archive/2012/06/15/2551034.html> 


{% toc %}


<a id="org3891fa2"></a>

# Basic: titles,format,etc.


<a id="org91ba3a5"></a>

## format

"#+TITLE:"  edit title 
\\#+AUTHOR: 
\\#+EMAIL 
"*some words*" italic 
"**some words**" bold 
"<del>some words</del>" delete line 
"<sub>some</sub> words\_" \_ \_ underline 
H<sub>2</sub>  subscript 
H<sup>2</sup>  superscript 
`git` 


<a id="orgd7456c8"></a>

## list

1.  first
2.  second(use M-RET)  
    -   something
    -   something
    -   yeah
3.  third  
    -   something
    -   something

ORG-LIST-END-MAKER  


<a id="org6616242"></a>

## key binding

C-c C-n/p  Move to nect/previous subtitle  
C-c C-f/b  Move between subtitles in same layer  
C-c C-u    Move to previous layer  
Shift(S)-TAB open/close all subtitles layer by layer  

M-left/right move the current subtitle to previous/next layer  
M-up/down    move the current subtitle up/down  
plus S:      move the whole tree  


<a id="org1bc65b3"></a>

## insert code

'<s TAB':  

    ;;scartch code
    
    1  

c :type, for example:python  
(emacs lisp is default; M-x org-edit-src-code can edit it)  
-n line number  
-h 7 set height to 7  
-w 40 set width to 40  

    #include <iostream>
    
    void main()
    {
      std::cout<<"Hello bitch~";
    }

C++,python,C,java,js(javascript),etc..  


<a id="orga2464e3"></a>

## table

to be continued&#x2026;  


<a id="orge088d8d"></a>

## cut line

---

(not less than five)  


<a id="org2b2ac9c"></a>

## tag

C-c C-q : set a tag to current subtitle  
to be continued&#x2026;  


<a id="orgcccf454"></a>

## e<sub>xport</sub>

C-c C-e a   :export as text  


<a id="orgfe531c8"></a>

# Getting-things-Done


<a id="org1b75ceb"></a>

## key binding

first, review some keys:  

> C-c C-n/p  Move to nect/previous subtitle  
> C-c C-f/b  Move between subtitles in same layer  
> C-c C-u    Move to previous layer  
> Shift(S)-TAB open/close all subtitles layer by layer  
> 
> M-left/right move the current subtitle to previous/next layer  
> M-up/down    move the current subtitle up/down  
> plus S:      move the whole tree  

keys about GTD:  
C-c C-t  add tag  
  t ag list:TODO,STARTED,WAITING,DONE,SOMEDAY,PROJECT,CANCELED  
S-left/right change tag  
C-c C-x i check list for all tasks  

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">ITEM</th>
<th scope="col" class="org-left">TODO</th>
<th scope="col" class="org-left">PRIORITY</th>
<th scope="col" class="org-left">TAGS</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">\* Basic: titles,format,etc.</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* format</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* list</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* key binding</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* insert code</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* table</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* cut line</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* tag</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* e<sub>xport</sub></td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>

<tbody>
<tr>
<td class="org-left">\* Getting-things-Done</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* key binding</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* set priority</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* follow task</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* objective step by step</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* search</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* date setting</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* global TODO list</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* keys about time(Diary)</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>


<tr>
<td class="org-left">\*\* add key</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>


<a id="org183bcc4"></a>

## set priority

S-up/down  
[#A],[#B],[#C]&#x2026;  


<a id="org7297fca"></a>

## follow task

when you change the competition of an objective, the primary objective complete will change also.  
\\#+BEGIN<sub>EXAMPLE</sub>  
/\* OBJ1 <code>[%]</code>  
/\*\* OBJ2 <code>[/]</code>  
/\*\*\* OBJ3&#x2026;  
<code>[%]</code>: percentage  
<code>[/]</code>: fraction  


<a id="org4f9a904"></a>

## objective step by step

-   [-] step1 <code>[50%]</code>  
    -   [X] step1.01
    -   [ ] step1.02

how to do:  
input"- [ ] &#x2026; <code>[/]</code>or<code>[%]</code>"  
then press: M-S-RET,M-R  
&#x2026;  
C-c C-c to change secondary objective complete.  
done.  


<a id="orgf3769a8"></a>

## search

C-c /  :before date,todo&#x2026;search by tags  


<a id="orgeeea240"></a>

## date setting

C-c .  set a timestamp for an object  
C-c !  <span class="timestamp-wrapper"><span class="timestamp">[2017-06-29 Thu 15:30]</span></span>Just a timestamp  
S-left/right change date  
S-up/down    change time  
connect two timestamps with "&#x2013;" :<span class="timestamp-wrapper"><span class="timestamp">&lt;2017-07-24 Mon&gt;&#x2013;&lt;2017-07-27 Thu&gt;</span></span>  
  (C-c . twice also OK)  
C-c > check calendar  
 <span class="timestamp-wrapper"><span class="timestamp">&lt;2017-07-18 Tue 16:20 +1w&gt; </span></span> +1 w:every week  

C-c C-s  set startline  
C-c C-d  set deadline  


<a id="org7a66d9f"></a>

## global TODO list

C-c a  
C-c C-x i  


<a id="orgbb0990f"></a>

## keys about time(Diary)

C-c C-x -   insert current timer value with description  
C-c C-x .   insert current time value  
C-c C-x 0   start to timing from 0  
C-c C-x ;   start a timer  


<a id="org717e92e"></a>

## add key

C-c a check agenda,list all todo entries and serach for keywords.  
C-c b switch between org buffers.  

