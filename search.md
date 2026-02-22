---
layout: page
title: Search
permalink: /search/
description: "Search all posts instantly."
---

<input id="q" type="text" placeholder="Search posts..." class="search-input">
<div id="results" style="margin-top:12px;"></div>

<script>
(async function(){
  const res = await fetch("/posts.json");
  const posts = await res.json();

  const q = document.getElementById("q");
  const out = document.getElementById("results");

  function render(list){
    if (!list.length){
      out.innerHTML = '<div class="muted">No results</div>';
      return;
    }
    out.innerHTML = list.map(p => `
      <a class="post-card" href="${p.url}" style="display:block;margin-bottom:10px;">
        <div class="post-body">
          <div class="post-title">${p.title}</div>
          <div class="post-meta"><span>${p.date}</span></div>
          <div class="muted">${p.excerpt}</div>
        </div>
      </a>
    `).join("");
  }

  function search(){
    const s = q.value.toLowerCase().trim();
    if (!s) return render(posts.slice(0, 12));
    const filtered = posts.filter(p =>
      (p.title + " " + p.excerpt).toLowerCase().includes(s)
    );
    render(filtered);
  }

  q.addEventListener("input", search);
  render(posts.slice(0, 12));
})();
</script>
