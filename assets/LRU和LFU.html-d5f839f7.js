import{_ as n,V as s,W as a,X as p}from"./framework-80dbfac3.js";const t={},e=p(`<ul><li><a href="#lru">LRU</a></li><li><a href="#lfu">LFU</a></li></ul><hr><h2 id="lru" tabindex="-1"><a class="header-anchor" href="#lru" aria-hidden="true">#</a> LRU</h2><p>hashmap + 全局双链表</p><p>hashmap：用来省去遍历链表节点的时间，直接根据key获取到对应节点。</p><p>全局双链表：node有属性key。从双链表中选出淘汰结点时，map也需要删除对应节点，从而需要结点的key。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>put:
-&gt; map中不存在：[头插结点] [map入]
    -&gt; 超容：[链表断尾] [map删除]
-&gt; map中存在：[更新val] [移动到头]

get:
-&gt; map中不存在：返回-1
-&gt; map中存在：[移动到头] [返回val]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">LRUCache</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> capacity<span class="token punctuation">;</span>

    <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">DList</span> dList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> key<span class="token punctuation">;</span>
        <span class="token keyword">int</span> value<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> next<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> pre<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">DList</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> tail <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">DList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            head<span class="token punctuation">.</span>next <span class="token operator">=</span> tail<span class="token punctuation">;</span>
            tail<span class="token punctuation">.</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Node</span> added<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> first <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            head<span class="token punctuation">.</span>next <span class="token operator">=</span> added<span class="token punctuation">;</span>
            added<span class="token punctuation">.</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
            added<span class="token punctuation">.</span>next <span class="token operator">=</span> first<span class="token punctuation">;</span>
            first<span class="token punctuation">.</span>pre <span class="token operator">=</span> added<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Node</span> cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>pre <span class="token operator">=</span> cur<span class="token punctuation">.</span>pre<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHead</span><span class="token punctuation">(</span><span class="token class-name">Node</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">!=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">remove</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">add</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">LRUCache</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> capacity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> m <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            dList<span class="token punctuation">.</span><span class="token function">setHead</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> m<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> m <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// LRU淘汰就是末尾，直接从双链表中获取。</span>
                <span class="token class-name">Node</span> last <span class="token operator">=</span> dList<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>pre<span class="token punctuation">;</span>
                dList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>last<span class="token punctuation">)</span><span class="token punctuation">;</span>
                map<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>last<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">Node</span> added <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            dList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>added<span class="token punctuation">)</span><span class="token punctuation">;</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> added<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            m<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
            dList<span class="token punctuation">.</span><span class="token function">setHead</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lfu" tabindex="-1"><a class="header-anchor" href="#lfu" aria-hidden="true">#</a> LFU</h2><p>hashmap + freqMap + 局部双链表</p><p>没有全局双链表了，而是 hashmap 存key对应的Node + freqMap 存freq对应的局部双链表。</p><p>从key获取hashmap的Node，再用node的freq获取freqMap的局部双链表。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 460. LFU 缓存</span>
<span class="token keyword">class</span> <span class="token class-name">LFUCache</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> capacity<span class="token punctuation">;</span>

    <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 没有全局链表 DList dList = new DList(); 了，而是放在map中的局部链表。</span>
    <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">DList</span><span class="token punctuation">&gt;</span></span> freqMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> key<span class="token punctuation">;</span>
        <span class="token keyword">int</span> value<span class="token punctuation">;</span>
        <span class="token keyword">int</span> freq<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> next<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> pre<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">DList</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> tail <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">DList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            head<span class="token punctuation">.</span>next <span class="token operator">=</span> tail<span class="token punctuation">;</span>
            tail<span class="token punctuation">.</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Node</span> added<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> first <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            head<span class="token punctuation">.</span>next <span class="token operator">=</span> added<span class="token punctuation">;</span>
            added<span class="token punctuation">.</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
            added<span class="token punctuation">.</span>next <span class="token operator">=</span> first<span class="token punctuation">;</span>
            first<span class="token punctuation">.</span>pre <span class="token operator">=</span> added<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Node</span> cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>pre <span class="token operator">=</span> cur<span class="token punctuation">.</span>pre<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> minFreq <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">LFUCache</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> capacity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> m <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">update</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> m<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> m <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// freqMap删除最小频率的节点，删除局部链表的最后节点</span>
                <span class="token class-name">DList</span> dList <span class="token operator">=</span> freqMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>minFreq<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Node</span> last <span class="token operator">=</span> dList<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>pre<span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>last <span class="token operator">!=</span> dList<span class="token punctuation">.</span>head<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    dList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>last<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// Map也删除</span>
                map<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>last<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">Node</span> added <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            added<span class="token punctuation">.</span>freq <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token comment">// map添加</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> added<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// freq添加</span>
            <span class="token class-name">DList</span> dList <span class="token operator">=</span> freqMap<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">DList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            dList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>added<span class="token punctuation">)</span><span class="token punctuation">;</span>
            freqMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> dList<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 最小频率是新增的1</span>
            minFreq <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">update</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">Node</span> m<span class="token punctuation">,</span> <span class="token class-name">Integer</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// freq删除老频率, 且确保空时加最小频率</span>
        <span class="token class-name">DList</span> dList <span class="token operator">=</span> freqMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>freq<span class="token punctuation">)</span><span class="token punctuation">;</span>
        dList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">if</span><span class="token punctuation">(</span>dList<span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">==</span> dList<span class="token punctuation">.</span>tail <span class="token operator">&amp;&amp;</span> m<span class="token punctuation">.</span>freq <span class="token operator">==</span> minFreq<span class="token punctuation">)</span><span class="token punctuation">{</span>
            minFreq<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// freq添加新频率</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            m<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        m<span class="token punctuation">.</span>freq<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token class-name">DList</span> dList2 <span class="token operator">=</span> freqMap<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>freq<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">DList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dList2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
        freqMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>freq<span class="token punctuation">,</span> dList2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","LRU和LFU.html.vue"]]);export{k as default};
