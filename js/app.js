function C(){ return window.AGROCORE || {}; }

function hydrateCommon(){
  const c=C();
  document.querySelectorAll("[data-brand]").forEach(el=>el.textContent=c.marca||"GPS.dev AgroCore");
  document.querySelectorAll("[data-email]").forEach(el=>{
    el.textContent=c.email||"";
    if(el.tagName==="A") el.href="mailto:"+c.email;
  });
  document.querySelectorAll("[data-github]").forEach(el=>el.href=c.github||"#");
  document.querySelectorAll("[data-portfolio]").forEach(el=>el.href=c.portfolio||"#");
  document.querySelectorAll("[data-blog]").forEach(el=>el.href=c.blog||"#");
  document.querySelectorAll("[data-linkedin]").forEach(el=>el.href=c.linkedin||"#");
  document.querySelectorAll("[data-youtube]").forEach(el=>el.href=c.youtube||"#");
  document.querySelectorAll("[data-medium]").forEach(el=>el.href=c.medium||"#");
  document.querySelectorAll("[data-substack]").forEach(el=>el.href=c.substack||"#");
  document.querySelectorAll("[data-paranagel]").forEach(el=>el.href=(c.paranagelHub&&c.paranagelHub.link)||"#");
  document.querySelectorAll("[data-atlas]").forEach(el=>el.href=(c.parceiroAtlas&&c.parceiroAtlas.link)||"#");
  document.querySelectorAll("[data-paranagel-nome]").forEach(el=>el.textContent=(c.paranagelHub&&c.paranagelHub.nome)||"Paranagel Hub");
  document.querySelectorAll("[data-atlas-nome]").forEach(el=>el.textContent=(c.parceiroAtlas&&c.parceiroAtlas.nome)||"Atlas Hotel");
  document.querySelectorAll("[data-app]").forEach(el=>el.href=c.aplicativo||"#");
  document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
}

function renderPlanos(){
  const wrap=document.querySelector("#planos-grid");
  if(!wrap) return;
  wrap.innerHTML=(C().planos||[]).map(p=>`
    <article class="card ${p.destaque?'featured':''}">
      <div class="kicker">${p.destaque?'Mais escolhido':'AgroCore SaaS'}</div>
      <h3>${p.nome}</h3>
      <div class="price">${p.preco}</div>
      <div class="small">${p.periodo}</div>
      <ul class="list">${p.itens.map(i=>`<li>${i}</li>`).join("")}</ul>
      <a class="btn ${p.destaque?'':'alt'}" href="contato.html">Solicitar</a>
    </article>
  `).join("");
}

function renderLivros(){
  const wrap=document.querySelector("#livros-grid");
  if(!wrap) return;
  wrap.innerHTML=(C().livros||[]).map(l=>`
    <article class="card">
      <div class="kicker">${l.ano}</div>
      <h3>${l.titulo}</h3>
      <a class="btn alt" href="${l.link}" target="_blank" rel="noopener">Ver publicação</a>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded",()=>{
  hydrateCommon(); renderPlanos(); renderLivros();
});
