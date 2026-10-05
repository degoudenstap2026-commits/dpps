
async function loadData(){const saved=localStorage.getItem('goudenstap-data');if(saved)return JSON.parse(saved);const r=await fetch('data.json');return r.json()}
function saveData(d){localStorage.setItem('goudenstap-data',JSON.stringify(d));}
function resetData(){localStorage.removeItem('goudenstap-data');location.reload()}
function applySite(d){document.querySelectorAll('[data-site-name]').forEach(e=>e.textContent=d.site.name);document.querySelectorAll('[data-tagline]').forEach(e=>e.textContent=d.site.tagline);document.documentElement.style.setProperty('--primary',d.site.primary);document.documentElement.style.setProperty('--dark',d.site.dark);document.documentElement.style.setProperty('--cream',d.site.cream);document.documentElement.style.setProperty('--text',d.site.text);document.querySelectorAll('[data-footer]').forEach(e=>e.textContent=d.site.footer)}
