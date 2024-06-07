import{_ as e,V as i,W as a,X as n}from"./framework-80dbfac3.js";const l={},r=n(`<ul><li><a href="#%E7%BA%A2%E9%BB%91%E6%A0%91%E7%9A%84%E7%BA%A2%E9%BB%91%E8%A7%84%E5%88%99">红黑树的红黑规则</a></li><li><a href="#%E7%BA%A2%E9%BB%91%E6%A0%91%E6%B7%BB%E5%8A%A0%E8%8A%82%E7%82%B9">红黑树添加节点</a></li><li><a href="#%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95">【排序算法】</a></li><li><a href="#%E4%BB%80%E4%B9%88%E5%8F%AB%E5%81%9A%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E7%9A%84%E7%A8%B3%E5%AE%9A%E6%80%A7">什么叫做排序算法的稳定性</a></li><li><a href="#%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E7%9A%84%E5%A4%8D%E6%9D%82%E5%BA%A6">二分查找的复杂度</a></li></ul><hr><h2 id="红黑树的红黑规则" tabindex="-1"><a class="header-anchor" href="#红黑树的红黑规则" aria-hidden="true">#</a> 红黑树的红黑规则</h2><p>红黑树的节点：两个属性，值和颜色。三个指针，左右孩子和父。</p><p>特殊的叶子节点：左右孩子是nil的，nil算是叶子节点。</p><ol><li>节点的颜色，红或黑。</li><li>根节点是红。</li><li>nil叶子节点是黑色。</li><li>不连红：红色节点的孩子必须是黑色。</li><li>黑相等：任意节点，从该节点到其后代叶子节点的每条路径上的黑色节点数量相等。</li></ol><h2 id="红黑树添加节点" tabindex="-1"><a class="header-anchor" href="#红黑树添加节点" aria-hidden="true">#</a> 红黑树添加节点</h2><p><strong>父黑叔黑爷红</strong></p><p>父红叔红：都要，且爷递归</p><p>父红叔黑：触发下面的复杂旋转</p><p><strong>左右看父，且父递归。左左/右右看爷反，父黑爷红</strong></p><p>父为左，就父左旋；父为右，就父右旋。</p><p>左左则爷右旋；右右则爷左旋。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 根 ---------------------&gt; 根变黑色
2. 非根
    ---&gt; 父黑 ---&gt; 无
    ---&gt; 父红(因为默认子是红，不能父子都红)
        --&gt; 叔红: 父黑叔黑爷红、爷当前递归
        --&gt; 叔黑：
            --&gt; 父为左
                --&gt; 子为左：父黑爷红（叔已黑），爷右旋
                --&gt; 子为右：父左旋，父当前递归
            --&gt; 父为右
                --&gt; 子为左：父右旋，父当前递归
                --&gt; 子为右：父黑爷红（叔已黑），爷左旋
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【排序算法】" tabindex="-1"><a class="header-anchor" href="#【排序算法】" aria-hidden="true">#</a> 【排序算法】</h2><h2 id="什么叫做排序算法的稳定性" tabindex="-1"><a class="header-anchor" href="#什么叫做排序算法的稳定性" aria-hidden="true">#</a> 什么叫做排序算法的稳定性</h2><p><strong>相同元素</strong>被排序后，<strong>保持原有数组中的相对顺序不变</strong>。</p><h2 id="二分查找的复杂度" tabindex="-1"><a class="header-anchor" href="#二分查找的复杂度" aria-hidden="true">#</a> 二分查找的复杂度</h2><p>O(log n)</p>`,19),d=[r];function s(t,E){return i(),a("div",null,d)}const h=e(l,[["render",s],["__file","八股.html.vue"]]);export{h as default};
