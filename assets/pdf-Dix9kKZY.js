import{s as $,d as T,r as P}from"./index-CWry7jNq.js";const m=1240,u=1754,g=70,w=34;function R(n){const l=[[]];let f=190;for(let o=0;o<n.lengthTicks;o+=64){const c=Math.min(64,n.lengthTicks-o),r=Math.max(1,...Array.from({length:Math.ceil(c/16)},(h,t)=>P(n.notes,o+t*16,Math.min(16,c-t*16)).length)),a=66+$(n).length*18+r*52;f+a>u-80&&l.at(-1).length&&(l.push([]),f=190),l.at(-1).push({start:o,count:c,height:a,lanes:r}),f+=a}return l}function S(n){const l=new TextEncoder,f=[],o=[0];let c=0;const r=e=>{const s=typeof e=="string"?l.encode(e):e;f.push(s),c+=s.length},a=(e,s)=>{o[e]=c,r(`${e} 0 obj
`),typeof s=="string"?r(s):s(),r(`
endobj
`)};r(`%PDF-1.4
`),a(1,"<< /Type /Catalog /Pages 2 0 R >>"),a(2,`<< /Type /Pages /Count ${n.length} /Kids [${n.map((e,s)=>`${3+s*3} 0 R`).join(" ")}] >>`),n.forEach((e,s)=>{const d=3+s*3,i=`q
595.28 0 0 841.89 0 0 cm
/Score Do
Q
`;a(d,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Score ${d+1} 0 R >> >> /Contents ${d+2} 0 R >>`),a(d+1,()=>{r(`<< /Type /XObject /Subtype /Image /Width ${m} /Height ${u} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${e.length} >>
stream
`),r(e),r(`
endstream`)}),a(d+2,`<< /Length ${l.encode(i).length} >>
stream
${i}endstream`)});const h=c;r(`xref
0 ${o.length}
0000000000 65535 f 
`);for(let e=1;e<o.length;e++)r(`${String(o[e]).padStart(10,"0")} 00000 n 
`);r(`trailer
<< /Size ${o.length} /Root 1 0 R >>
startxref
${h}
%%EOF
`);const t=new Uint8Array(c);let p=0;for(const e of f)t.set(e,p),p+=e.length;return t}async function B(n){const l=R(n),f=[];$(n);const o=(m-g*2-w)/4;for(const[r,a]of l.entries()){const h=document.createElement("canvas");h.width=m,h.height=u;const t=h.getContext("2d");if(!t)throw new Error("PDFを作成できません。");t.fillStyle="#ffffff",t.fillRect(0,0,m,u),t.fillStyle="#352d29",t.font="bold 28px sans-serif";let p="",e=66;for(const i of n.title||"無題")t.measureText(p+i).width>m-g*2&&(t.fillText(p,g,e),e+=34,p=""),p+=i;t.fillText(p,g,e),t.font="18px sans-serif",t.fillText(`${n.instrument==="guitar"?"Guitar":"Bass"}  ·  ${n.tuning==="flat"?"半音下げ":"Standard"}  ·  ♩ = ${n.bpm}  ·  4/4`,g,156);let s=200;for(const i of a)T(t,n,i,s,{margin:g,labelWidth:w,measureWidth:o}),s+=i.height;t.font="14px sans-serif",t.fillStyle="#80756c",t.fillText("Pocket TAB",g,u-38),t.textAlign="right",t.fillText(`${r+1} / ${l.length}`,m-g,u-38);const d=await new Promise((i,y)=>h.toBlob(x=>x?i(x):y(new Error("PDFを作成できません。")),"image/jpeg",.92));f.push(new Uint8Array(await d.arrayBuffer())),h.width=0,h.height=0,await new Promise(i=>setTimeout(i,0))}const c=S(f);return new Blob([c],{type:"application/pdf"})}export{B as exportPdf,S as jpegPdf,R as pdfLayout};
