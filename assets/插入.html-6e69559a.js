import{_ as e,V as i,W as n,X as s}from"./framework-80dbfac3.js";const d={},l=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      a[i]   t = a[low]
       ↑
       |   
       |       ↑
↑      |       |
|      |       |
6      10      7

    a[i] &gt; t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a[i]  a[i+1]   t    
       ↑       ↑    
       |       |     
       |       |       
↑      |       |        
|      |       |  
6     10      10    

a[i] &gt; t 不满足，退出。故而在 a[i+1] 处插入 t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>low所在的位置是未排序的位置，左边是已排序区域。[1, length -1]</p>`,3),a=[l];function t(v,c){return i(),n("div",null,a)}const u=e(d,[["render",t],["__file","插入.html.vue"]]);export{u as default};
