import{s as y,c as R,d as S,r as b}from"./index-BhuZH7FI.js";const d=1240,m=1754,h=70,w=34;function B(e,p=!1){const i=[[]];let o=190;for(let s=0;s<e.lengthTicks;s+=64){const n=Math.min(64,e.lengthTicks-s),l=Math.max(1,...Array.from({length:Math.ceil(n/16)},(u,a)=>b(e.notes,s+a*16,Math.min(16,n-a*16)).length)),g=66+y(e).length*18+l*52+(p?18:0);o+g>m-80&&i.at(-1).length&&(i.push([]),o=190),i.at(-1).push({start:s,count:n,height:g,lanes:l}),o+=g}return i}function j(e){const p=new TextEncoder,i=[],o=[0];let s=0;const n=t=>{const r=typeof t=="string"?p.encode(t):t;i.push(r),s+=r.length},l=(t,r)=>{o[t]=s,n(`${t} 0 obj
`),typeof r=="string"?n(r):r(),n(`
endobj
`)};n(`%PDF-1.4
`),l(1,"<< /Type /Catalog /Pages 2 0 R >>"),l(2,`<< /Type /Pages /Count ${e.length} /Kids [${e.map((t,r)=>`${3+r*3} 0 R`).join(" ")}] >>`),e.forEach((t,r)=>{const c=3+r*3,x=`q
595.28 0 0 841.89 0 0 cm
/Score Do
Q
`;l(c,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Score ${c+1} 0 R >> >> /Contents ${c+2} 0 R >>`),l(c+1,()=>{n(`<< /Type /XObject /Subtype /Image /Width ${d} /Height ${m} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${t.length} >>
stream
`),n(t),n(`
endstream`)}),l(c+2,`<< /Length ${p.encode(x).length} >>
stream
${x}endstream`)});const g=s;n(`xref
0 ${o.length}
0000000000 65535 f 
`);for(let t=1;t<o.length;t++)n(`${String(o[t]).padStart(10,"0")} 00000 n 
`);n(`trailer
<< /Size ${o.length} /Root 1 0 R >>
startxref
${g}
%%EOF
`);const u=new Uint8Array(s);let a=0;for(const t of i)u.set(t,a),a+=t.length;return u}async function E(e,p=!1){const i=B(e,p),o=[];y(e);const s=p?R(e):void 0,n=(d-h*2-w)/4;for(const[g,u]of i.entries()){const a=document.createElement("canvas");a.width=d,a.height=m;const t=a.getContext("2d");if(!t)throw new Error("PDFを作成できません。");t.fillStyle="#ffffff",t.fillRect(0,0,d,m),t.fillStyle="#352d29",t.font="bold 28px sans-serif";let r="",c=66;for(const f of e.title||"無題")t.measureText(r+f).width>d-h*2&&(t.fillText(r,h,c),c+=34,r=""),r+=f;t.fillText(r,h,c),t.font="18px sans-serif",t.fillText(`${e.instrument==="guitar"?"Guitar":"Bass"}  ·  ${e.tuning==="flat"?"半音下げ":"Standard"}  ·  ♩ = ${e.bpm}  ·  4/4`,h,156);let x=200;for(const f of u)S(t,e,f,x,{margin:h,labelWidth:w,measureWidth:n,degrees:s}),x+=f.height;t.font="14px sans-serif",t.fillStyle="#80756c",t.fillText("Pocket TAB",h,m-38),t.textAlign="right",t.fillText(`${g+1} / ${i.length}`,d-h,m-38);const T=await new Promise((f,P)=>a.toBlob($=>$?f($):P(new Error("PDFを作成できません。")),"image/jpeg",.92));o.push(new Uint8Array(await T.arrayBuffer())),a.width=0,a.height=0,await new Promise(f=>setTimeout(f,0))}const l=j(o);return new Blob([l],{type:"application/pdf"})}export{E as exportPdf,j as jpegPdf,B as pdfLayout};
