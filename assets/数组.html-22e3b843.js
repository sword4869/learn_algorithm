import{_ as n,V as s,W as a,X as p}from"./framework-80dbfac3.js";const e={},t=p(`<ul><li><a href="#1-%E5%B1%80%E9%83%A8%E6%80%A7%E5%8E%9F%E7%90%86">1. 局部性原理</a></li><li><a href="#2-%E5%AE%9E%E7%8E%B0%E5%8A%A8%E6%80%81%E6%95%B0%E7%BB%84">2. 实现动态数组</a></li><li><a href="#3-%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84">3. 二维数组</a></li></ul><hr><h2 id="_1-局部性原理" tabindex="-1"><a class="header-anchor" href="#_1-局部性原理" aria-hidden="true">#</a> 1. 局部性原理</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">ij</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> rows<span class="token punctuation">,</span> <span class="token keyword">int</span> columns<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ij 方法</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> columns<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ji 方法</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> columns<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以看到 ij 的效率比 ji 快很多，为什么呢？</p></blockquote><p>局部性原理:</p><ul><li>cpu 读取内存（速度慢）数据后，会将其放入高速缓存（速度快）当中，如果后来的计算再用到此数据，在缓存中能读到的话，就不必读内存了</li><li>缓存的最小存储单位是缓存行（cache line），一般是 64 bytes。缓存是有限的，当新数据来了后，一些旧的缓存行数据就会被覆盖，如果不能充分利用缓存的数据，就会造成效率低下</li><li>ij 函数则能充分利用局部性原理加载到的缓存数据，而ji则浪费。</li></ul><hr><p>Java自带数组就是静态数组，创建时容量就固定死了，不能删除和插入。</p><p>Java实现好的动态数组就是ArrayList。</p><ul><li>删除会涉及后面的元素前移。</li><li>插入会涉及扩容（创建新数组，复制旧数组。。）</li></ul><p><code>Arrays.copyOfRange</code>的to，包含吗？</p><h2 id="_2-实现动态数组" tabindex="-1"><a class="header-anchor" href="#_2-实现动态数组" aria-hidden="true">#</a> 2. 实现动态数组</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Iterator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Consumer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token class-name">IntStream</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DynamicArray</span> <span class="token keyword">implements</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 逻辑大小，已有几个元素</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> capacity <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span> <span class="token comment">// 容量</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 向最后位置 [size] 添加元素
     *
     * <span class="token keyword">@param</span> <span class="token parameter">element</span> 待添加元素
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">int</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        array<span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token comment">// add(size, element);</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 向 [0 .. size] 位置添加元素
     *
     * <span class="token keyword">@param</span> <span class="token parameter">index</span>   索引位置
     * <span class="token keyword">@param</span> <span class="token parameter">element</span> 待添加元素
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">checkAndGrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加逻辑</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 向后挪动, 空出待插入位置，个数刚好是 size - index</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> size <span class="token operator">-</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        array<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">checkAndGrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 容量检查</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">==</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 进行扩容, 1.5 倍</span>
            capacity <span class="token operator">+=</span> capacity <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> newArray<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
            array <span class="token operator">=</span> newArray<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 从 [0 .. size) 范围删除元素
     *
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 索引位置
     * <span class="token keyword">@return</span> 被删除元素
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// [0..size)</span>
        <span class="token keyword">int</span> removed <span class="token operator">=</span> array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>        
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 向前挪动, 移动size - index - 1个</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    array<span class="token punctuation">,</span> index<span class="token punctuation">,</span> size <span class="token operator">-</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> removed<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 查询元素
     *
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 索引位置, 在 [0..size) 区间内
     * <span class="token keyword">@return</span> 该索引位置的元素
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 遍历方法1
     *
     * <span class="token keyword">@param</span> <span class="token parameter">consumer</span> 遍历要执行的操作, 入参: 每个元素
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myforEach</span><span class="token punctuation">(</span><span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> consumer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            consumer<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/*
         * dynamicArray.myforEach((element))-&gt;{
         *      System.out.println(element);
         * }
         */</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 遍历方法2 - 迭代器遍历
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 有没有下一个元素</span>
                <span class="token keyword">return</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 返回当前元素,并移动到下一个元素</span>
                <span class="token keyword">return</span> array<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">/*
         * for(Integer element: dynamicArray){
         *      System.out.println(element);
         * }
         */</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 遍历方法3 - stream 遍历
     *
     * <span class="token keyword">@return</span> stream 流
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">IntStream</span> <span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">assert</span>
        <span class="token keyword">return</span> <span class="token class-name">IntStream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/*
         * dynamicArray.stream().forEach((element))-&gt;{
         *      System.out.println(element);
         * }
         */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>获取<code>get()</code>性能</p></blockquote><p>O(1)</p><blockquote><p>插入或删除性能</p></blockquote><p>头部位置、中间位置，时间复杂度是 $O(n)$</p><p>尾部位置，时间复杂度是 $O(1)$（扩容很罕见，均摊来说）</p><h2 id="_3-二维数组" tabindex="-1"><a class="header-anchor" href="#_3-二维数组" aria-hidden="true">#</a> 3. 二维数组</h2>`,20),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","数组.html.vue"]]);export{r as default};
