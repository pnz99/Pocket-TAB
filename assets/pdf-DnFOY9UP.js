import{c as E,d as k,r as A,s as D}from"./index-2J5Bqnqi.js";const R=18,w=24,b=24;function B(n,h,a){const t=[];let i="";for(const e of n)(e===`
`||i&&a(i+e)>h)&&(t.push(i),i=""),e!==`
`&&e!=="\r"&&(i+=e);return i&&t.push(i),t}function j(n,h,a,t,i=e=>[...e].reduce((l,u)=>l+(u.charCodeAt(0)<256?9:18),0)){const e=Array.from({length:Math.ceil(a/16)},()=>[]);if(!n.lyrics)return e;const l=(n.backingSource??(n.youtube?"youtube":"file"))==="youtube"?n.youtube?.startSeconds??0:n.audioStartSeconds??0,u=n.lyrics.lines.map(f=>({text:f.text,tick:(f.seconds+n.lyrics.offsetSeconds-l)*n.bpm/60*4}));for(let f=0;f<u.length;f++){const p=u[f],o=h===0&&p.tick<0&&(u[f+1]?.tick??1/0)>0,s=o?0:Math.round(p.tick*1e8)/1e8;if(!p.text.trim()||s<h||s>=h+a)continue;const r=Math.floor((s-h)/16),d=Math.round((s%16/4+1)*100)/100,$=o?"続き · ":`${d}拍 · `;e[r].push(...B($+p.text,t,i))}return e}const g=1240,T=1754,m=70,S=34;function H(n,h=!1,a){const t=[[]];let i=200;for(let e=0;e<n.lengthTicks;e+=64){const l=Math.min(64,n.lengthTicks-e),u=Math.max(1,...Array.from({length:Math.ceil(l/16)},(r,d)=>A(n.notes,e+d*16,Math.min(16,l-d*16)).length)),f=66+D(n).length*18+u*52+(h?18:0),p=j(n,e,l,(g-m*2-S)/4-24,a),o=Math.max(0,...p.map(r=>r.length)),s=Math.max(1,Math.floor((T-80-200-f-b)/w));for(let r=0;r<Math.max(1,o);r+=s){const d=p.map(y=>y.slice(r,r+s)),$=Math.max(0,...d.map(y=>y.length)),c=f+($?b+$*w:0);i+c>T-80&&t.at(-1).length&&(t.push([]),i=200),t.at(-1).push({start:e,count:l,height:c,lanes:u,lyrics:d,continuation:r>0}),i+=c}}return t}function _(n){const h=new TextEncoder,a=[],t=[0];let i=0;const e=o=>{const s=typeof o=="string"?h.encode(o):o;a.push(s),i+=s.length},l=(o,s)=>{t[o]=i,e(`${o} 0 obj
`),typeof s=="string"?e(s):s(),e(`
endobj
`)};e(`%PDF-1.4
`),l(1,"<< /Type /Catalog /Pages 2 0 R >>"),l(2,`<< /Type /Pages /Count ${n.length} /Kids [${n.map((o,s)=>`${3+s*3} 0 R`).join(" ")}] >>`),n.forEach((o,s)=>{const r=3+s*3,d=`q
595.28 0 0 841.89 0 0 cm
/Score Do
Q
`;l(r,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Score ${r+1} 0 R >> >> /Contents ${r+2} 0 R >>`),l(r+1,()=>{e(`<< /Type /XObject /Subtype /Image /Width ${g} /Height ${T} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${o.length} >>
stream
`),e(o),e(`
endstream`)}),l(r+2,`<< /Length ${h.encode(d).length} >>
stream
${d}endstream`)});const u=i;e(`xref
0 ${t.length}
0000000000 65535 f 
`);for(let o=1;o<t.length;o++)e(`${String(t[o]).padStart(10,"0")} 00000 n 
`);e(`trailer
<< /Size ${t.length} /Root 1 0 R >>
startxref
${u}
%%EOF
`);const f=new Uint8Array(i);let p=0;for(const o of a)f.set(o,p),p+=o.length;return f}async function G(n,h=!1){const a=document.createElement("canvas");a.width=g,a.height=T;const t=a.getContext("2d");if(!t)throw new Error("PDFを作成できません。");t.font=`${R}px sans-serif`;const i=H(n,h,p=>t.measureText(p).width),e=[],l=h?E(n):void 0,u=(g-m*2-S)/4;for(const[p,o]of i.entries()){t.textAlign="left",t.fillStyle="#ffffff",t.fillRect(0,0,g,T),t.fillStyle="#352d29",t.font="bold 28px sans-serif";let s="",r=66;for(const c of n.title||"無題")t.measureText(s+c).width>g-m*2&&(t.fillText(s,m,r),r+=34,s=""),s+=c;t.fillText(s,m,r),t.font="18px sans-serif",t.fillText(`${n.instrument==="guitar"?"Guitar":"Bass"}  ·  ${n.tuning==="flat"?"半音下げ":"Standard"}  ·  ♩ = ${n.bpm}  ·  4/4`,m,156);let d=200;for(const c of o){k(t,n,c,d,{margin:m,labelWidth:S,measureWidth:u,degrees:l});const y=Math.max(0,...c.lyrics.map(x=>x.length));if(y){const x=d+c.height-b-y*w;t.fillStyle="#6d655e",t.font="12px sans-serif",t.fillText(c.continuation?"続き":"歌詞",m-10,x+23),t.font=`${R}px sans-serif`,t.fillStyle="#352d29";for(const[I,P]of c.lyrics.entries()){const M=m+S+I*u;P.length&&(t.strokeStyle="#ddd6ce",t.lineWidth=1,t.beginPath(),t.moveTo(M+5,x),t.lineTo(M+u-5,x),t.stroke(),P.forEach((L,C)=>t.fillText(L,M+12,x+b+C*w)))}}d+=c.height}t.font="14px sans-serif",t.fillStyle="#80756c",t.fillText("Pocket TAB",m,T-38),t.textAlign="right",t.fillText(`${p+1} / ${i.length}`,g-m,T-38);const $=await new Promise((c,y)=>a.toBlob(x=>x?c(x):y(new Error("PDFを作成できません。")),"image/jpeg",.92));e.push(new Uint8Array(await $.arrayBuffer())),await new Promise(c=>setTimeout(c,0))}const f=_(e);return a.width=0,a.height=0,new Blob([f],{type:"application/pdf"})}export{G as exportPdf,_ as jpegPdf,H as pdfLayout};
