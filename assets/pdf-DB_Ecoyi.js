import{c as k,d as C,r as D,s as B}from"./index-DMxaS4VE.js";const I=18,b=24,M=24;function j(e,a,h){const t=[];let s="";for(const n of e)(n===`
`||s&&h(s+n)>a)&&(t.push(s),s=""),n!==`
`&&n!=="\r"&&(s+=n);return s&&t.push(s),t}function H(e,a,h,t,s=c=>[...c].reduce((d,p)=>d+(p.charCodeAt(0)<256?9:18),0),n=!1){const c=Array.from({length:Math.ceil(h/16)},()=>[]);if(!e.lyrics)return c;const d=(e.backingSource??(e.youtube?"youtube":"file"))==="youtube"?e.youtube?.startSeconds??0:e.audioStartSeconds??0,p=e.lyrics.lines.map(f=>({text:f.text,tick:(f.seconds+e.lyrics.offsetSeconds-d)*e.bpm/60*4}));for(let f=0;f<p.length;f++){const o=p[f],i=(a===0||n)&&o.tick<a&&(p[f+1]?.tick??1/0)>a,r=i?a:Math.round(o.tick*1e8)/1e8;if(!o.text.trim()||r<a||r>=a+h)continue;const u=Math.floor((r-a)/16),x=Math.round((r%16/4+1)*100)/100,l=i?"続き · ":`${x}拍 · `;c[u].push(...j(l+o.text,t,s))}return c}const g=1240,T=1754,m=70,S=34;function _(e,a=!1,h){const t=[[]];let s=200;for(let n=0;n<e.lengthTicks;n+=64){const c=Math.min(64,e.lengthTicks-n),d=Math.max(1,...Array.from({length:Math.ceil(c/16)},(u,x)=>D(e.notes,n+x*16,Math.min(16,c-x*16)).length)),p=66+B(e).length*18+d*52+(a?18:0),f=u=>H(e,n,c,(g-m*2-S)/4-24,h,u);let o=f(!t.at(-1).length);const i=Math.max(1,Math.floor((T-80-200-p-M)/b));let r=0;do{const u=o.map(y=>y.slice(r,r+i)),x=Math.max(0,...u.map(y=>y.length)),l=p+(x?M+x*b:0);if(s+l>T-80&&t.at(-1).length){t.push([]),s=200,r===0&&(o=f(!0));continue}t.at(-1).push({start:n,count:c,height:l,lanes:d,lyrics:u,continuation:r>0}),s+=l,r+=i}while(r<Math.max(1,...o.map(u=>u.length)))}return t}function F(e){const a=new TextEncoder,h=[],t=[0];let s=0;const n=o=>{const i=typeof o=="string"?a.encode(o):o;h.push(i),s+=i.length},c=(o,i)=>{t[o]=s,n(`${o} 0 obj
`),typeof i=="string"?n(i):i(),n(`
endobj
`)};n(`%PDF-1.4
`),c(1,"<< /Type /Catalog /Pages 2 0 R >>"),c(2,`<< /Type /Pages /Count ${e.length} /Kids [${e.map((o,i)=>`${3+i*3} 0 R`).join(" ")}] >>`),e.forEach((o,i)=>{const r=3+i*3,u=`q
595.28 0 0 841.89 0 0 cm
/Score Do
Q
`;c(r,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Score ${r+1} 0 R >> >> /Contents ${r+2} 0 R >>`),c(r+1,()=>{n(`<< /Type /XObject /Subtype /Image /Width ${g} /Height ${T} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${o.length} >>
stream
`),n(o),n(`
endstream`)}),c(r+2,`<< /Length ${a.encode(u).length} >>
stream
${u}endstream`)});const d=s;n(`xref
0 ${t.length}
0000000000 65535 f 
`);for(let o=1;o<t.length;o++)n(`${String(t[o]).padStart(10,"0")} 00000 n 
`);n(`trailer
<< /Size ${t.length} /Root 1 0 R >>
startxref
${d}
%%EOF
`);const p=new Uint8Array(s);let f=0;for(const o of h)p.set(o,f),f+=o.length;return p}async function v(e,a=!1){const h=document.createElement("canvas");h.width=g,h.height=T;const t=h.getContext("2d");if(!t)throw new Error("PDFを作成できません。");t.font=`${I}px sans-serif`;const s=_(e,a,f=>t.measureText(f).width),n=[],c=a?k(e):void 0,d=(g-m*2-S)/4;for(const[f,o]of s.entries()){t.textAlign="left",t.fillStyle="#ffffff",t.fillRect(0,0,g,T),t.fillStyle="#352d29",t.font="bold 28px sans-serif";let i="",r=66;for(const l of e.title||"無題")t.measureText(i+l).width>g-m*2&&(t.fillText(i,m,r),r+=34,i=""),i+=l;t.fillText(i,m,r),t.font="18px sans-serif",t.fillText(`${e.instrument==="guitar"?"Guitar":"Bass"}  ·  ${e.tuning==="flat"?"半音下げ":"Standard"}  ·  ♩ = ${e.bpm}  ·  4/4`,m,156);let u=200;for(const l of o){const y=Math.max(0,...l.lyrics.map($=>$.length)),w=y?M+y*b:0;if(y){const $=u;t.fillStyle="#6d655e",t.font="12px sans-serif",t.fillText(l.continuation?"続き":"歌詞",m-10,$+23),t.font=`${I}px sans-serif`,t.fillStyle="#352d29";for(const[L,R]of l.lyrics.entries()){const P=m+S+L*d;R.length&&(t.strokeStyle="#ddd6ce",t.lineWidth=1,t.beginPath(),t.moveTo(P+5,$),t.lineTo(P+d-5,$),t.stroke(),R.forEach((A,E)=>t.fillText(A,P+12,$+M+E*b)))}}C(t,e,l,u+w,{margin:m,labelWidth:S,measureWidth:d,degrees:c}),u+=l.height}t.font="14px sans-serif",t.fillStyle="#80756c",t.fillText("Pocket TAB",m,T-38),t.textAlign="right",t.fillText(`${f+1} / ${s.length}`,g-m,T-38);const x=await new Promise((l,y)=>h.toBlob(w=>w?l(w):y(new Error("PDFを作成できません。")),"image/jpeg",.92));n.push(new Uint8Array(await x.arrayBuffer())),await new Promise(l=>setTimeout(l,0))}const p=F(n);return h.width=0,h.height=0,new Blob([p],{type:"application/pdf"})}export{v as exportPdf,F as jpegPdf,_ as pdfLayout};
