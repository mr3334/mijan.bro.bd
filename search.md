
---
layout: page
title: Search
permalink: /search/
---

<input id="q" placeholder="Search posts..." style="width:100%;padding:10px;">
<div id="results"></div>

<script>
fetch("/posts.json")
.then(res=>res.json())
.then(posts=>{
 const q=document.getElementById("q");
 const r=document.getElementById("results");
 q.addEventListener("input",()=>{
   const s=q.value.toLowerCase();
   r.innerHTML=posts.filter(p=>p.title.toLowerCase().includes(s))
   .map(p=>`<div><a href="${p.url}">${p.title}</a></div>`).join("");
 });
});
</script>
