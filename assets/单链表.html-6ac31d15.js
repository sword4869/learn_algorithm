import{_ as n,V as s,W as a,X as e}from"./framework-80dbfac3.js";const t={},p=e(`<h1 id="单链表的结点定义" tabindex="-1"><a class="header-anchor" href="#单链表的结点定义" aria-hidden="true">#</a> 单链表的结点定义</h1><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    ListNode <span class="token operator">*</span>next<span class="token punctuation">;</span>
    <span class="token comment">// ListNode() : val(0), next(nullptr) {}</span>
    <span class="token comment">// ListNode(int x) : val(x), next(nullptr) {}</span>
    <span class="token comment">// ListNode(int x, ListNode *next) : val(x), next(next) {}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="单链表的实现" tabindex="-1"><a class="header-anchor" href="#单链表的实现" aria-hidden="true">#</a> 单链表的实现</h1><p>头结点存在 + 堆版本</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    ListNode <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">List</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    ListNode <span class="token operator">*</span>head<span class="token punctuation">;</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">List</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token operator">-&gt;</span>head <span class="token operator">=</span> <span class="token keyword">new</span> ListNode<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token operator">-&gt;</span>head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">~</span><span class="token function">List</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        ListNode <span class="token operator">*</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
        ListNode <span class="token operator">*</span>cur <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 删除</span>
            pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
            <span class="token keyword">delete</span> pre<span class="token punctuation">;</span>
            <span class="token comment">// 保证循环</span>
            pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            cur <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 头插法</span>
    <span class="token keyword">void</span> <span class="token function">insert_head</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        ListNode <span class="token operator">*</span>node <span class="token operator">=</span> <span class="token keyword">new</span> ListNode<span class="token punctuation">;</span>
        node<span class="token operator">-&gt;</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token comment">// 先连起来插入结点后面的结点， 再连插入结点前面的head结点</span>
        node<span class="token operator">-&gt;</span>next <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 查找值，删除</span>
    <span class="token keyword">void</span> <span class="token function">delete_val</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        ListNode <span class="token operator">*</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
        ListNode <span class="token operator">*</span>cur <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>cur<span class="token operator">-&gt;</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 先将前面结点连到后面的结点，再删除本结点</span>
                pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
                <span class="token comment">// 删除</span>
                cur<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
                <span class="token keyword">delete</span> cur<span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 保证循环</span>
            pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            cur <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="链表遍历" tabindex="-1"><a class="header-anchor" href="#链表遍历" aria-hidden="true">#</a> 链表遍历</h1><p>链表</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 推荐</span>

ListNode<span class="token operator">*</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> cur<span class="token operator">-&gt;</span>val <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cur <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// cur = nullptr，最后一个结点的下一个，是空。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但不要为了让cur最后指向最后的结点，而让while变得特别麻烦，这样很容易忘了第一个条件而出错，即<code>while(cur-&gt;next)</code>，若传入空链的情况下，空结点怎么可能有next。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 不推荐</span>

<span class="token comment">// while(cur-&gt;next) 就错了</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token constant">NULL</span> <span class="token operator">&amp;&amp;</span> cur<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> cur<span class="token operator">-&gt;</span>val <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cur <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
cout <span class="token operator">&lt;&lt;</span> cur<span class="token operator">-&gt;</span>val <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token comment">// cur = 最后一个结点，非空。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","单链表.html.vue"]]);export{u as default};
