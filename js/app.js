"use strict";
/* ================= i18n ================= */
const I18N={
 en:{},
 hi:{
  skip:"मुख्य सामग्री पर जाएँ",proto:"प्रोटोटाइप",forwho:"विकास निगरानी एवं राज्य टीमों हेतु प्रोटोटाइप, नीति आयोग",textsize:"अक्षर आकार",contrast:"उच्च कंट्रास्ट",dark:"डार्क मोड",
  brandsub:"दस्तावेज़ इंटेलिजेंस कार्यक्षेत्र",title:"नीति इंटेलिजेंस पोर्टल",navlbl:"कार्यक्षेत्र",headline:"आधिकारिक दस्तावेज़ों को नोट, प्रस्तुति और ऑडियो में बदलें",tagline:"रिपोर्ट, कार्यवृत्त और KPI वर्कबुक अपलोड करें। एक पृष्ठ का नोट, नीति प्रारूप में प्रस्तुति, चार्ट और वाचन पाएँ।",
  stdocs:"पढ़े गए दस्तावेज़",stpages:"संसाधित पृष्ठ",stslides:"बनाई गई स्लाइड",
  tHome:"होम",tUpload:"अपलोड",howH:"यह कैसे काम करता है",s1:"अपलोड करें",s1p:"PDF, Word या Excel फ़ाइल जोड़ें। टेक्स्ट, तालिकाएँ और स्कैन पृष्ठ स्वतः पढ़े जाते हैं।",s2:"नोट देखें",s2p:"मुख्य आँकड़ों और कार्य बिंदुओं सहित एक पृष्ठ का सारांश, PDF या Word में डाउनलोड योग्य।",s3:"प्रस्तुत करें, सुनें और पूछें",s3p:"मूल टेक्स्ट से नीति-प्रारूप डेक बनाएँ, डेटा का चार्ट देखें, अंग्रेज़ी या हिंदी में सुनें और प्रश्न पूछें।",getH:"आपको क्या मिलता है",exampleP:"पहले आउटपुट देखना चाहते हैं?",a11y:"सुगम्यता",readable:"पठनीय फ़ॉन्ट (Atkinson Hyperlegible)",spacing:"अधिक पंक्ति व अक्षर अंतर",motion:"एनिमेशन कम करें",shortcuts:"कीबोर्ड शॉर्टकट",k1:"अनुभाग बदलें",k2:"फ़ाइलें अपलोड करें",k3:"ऑडियो चलाएँ/रोकें",k4:"यह पैनल खोलें",k5:"प्रश्न पूछें",reset:"डिफ़ॉल्ट पर लौटें",zip:"सभी फ़ाइलें (.zip)",tSummary:"सारांश",tPpt:"प्रस्तुति",tData:"डेटा विश्लेषण",tAudio:"ऑडियो",tAsk:"दस्तावेज़ से पूछें",tHistory:"इतिहास",
  trayEye:"दस्तावेज़ ट्रे",trayTitle:"लोड किए गए दस्तावेज़",trayEmpty:"अभी कोई दस्तावेज़ नहीं है। शुरू करने के लिए PDF, Word या Excel फ़ाइल जोड़ें।",
  gen:"सारांश बनाएँ",addMore:"फ़ाइल जोड़ें",clear:"सभी हटाएँ",
  upH:"दस्तावेज़ अपलोड करें",upP:"एक या अधिक फ़ाइलें जोड़ें। पोर्टल उन्हें पढ़ता है, एक पृष्ठ का सारांश लिखता है, नीति प्रारूप में प्रस्तुति बनाता है और दस्तावेज़ को पढ़कर सुनाता है।",
  dropH:"फ़ाइलें यहाँ खींचें या अपने कंप्यूटर से चुनें",dropP:"नीति रिपोर्ट, बैठक का कार्यवृत्त, योजना दिशानिर्देश और KPI वर्कबुक। स्कैन किए गए PDF पृष्ठ-दर-पृष्ठ पढ़े जाते हैं।",
  choose:"फ़ाइलें चुनें",sample:"उदाहरण दस्तावेज़ खोलें",
  c1:"एक पृष्ठ का सारांश",c1p:"स्पष्ट शीर्षकों के अंतर्गत मुख्य बिंदु, प्रमुख आँकड़े और कार्य बिंदु। PDF या Word में डाउनलोड करें।",
  c2:"प्रस्तुति",c2p:"नीति डेक प्रारूप में संपादन योग्य PowerPoint। लंबाई सामग्री के अनुसार।",
  c3:"ऑडियो वाचन",c3p:"पूरा दस्तावेज़ अंग्रेज़ी या हिंदी में सुनें, गति समायोजित करें।",
  c4:"डेटा विश्लेषण",c4p:"Excel वर्कबुक स्वतः KPI टाइल और चार्ट में बदलती है।",
  sumH:"सारांश नोट",sumP:"जहाँ संभव हो एक पृष्ठ में। बड़े या अनेक दस्तावेज़ों के लिए ही दो पृष्ठ।",copy:"टेक्स्ट कॉपी करें",regen:"फिर से बनाएँ",
  pptH:"प्रस्तुति",pptP:"कवर, विषय-सूची, मुख्य निष्कर्ष, डेटा चार्ट, सिफ़ारिशें, अगले कदम और अनुलग्नक — नीति डेक प्रारूप में।",genPpt:"प्रस्तुति बनाएँ",dlPpt:".pptx डाउनलोड करें",
  dataH:"डेटा विश्लेषण",dataP:"अपलोड की गई वर्कबुक का हर संख्यात्मक कॉलम KPI टाइल और चार्ट बनता है। ये चार्ट प्रस्तुति में भी जाते हैं।",sheet:"शीट",
  audH:"ऑडियो वाचन",audP:"पूरा दस्तावेज़ आपके ब्राउज़र में पढ़ा जाता है। हिंदी में अनुवाद चलते-चलते खंडवार होता है।",audDoc:"दस्तावेज़",audLang:"भाषा",audVoice:"आवाज़",audRate:"गति",stop:"रोकें",
  askH:"दस्तावेज़ से पूछें",askP:"उत्तर केवल लोड किए गए दस्तावेज़ों से, स्रोत खंड सहित।",newChat:"नई बातचीत",askPh:"दस्तावेज़ों के बारे में प्रश्न पूछें",send:"पूछें",
  hisH:"इतिहास",hisP:"इस ब्राउज़र में संसाधित दस्तावेज़। यह अन्य उपयोगकर्ताओं के साथ साझा नहीं होता।",hisClear:"इतिहास साफ़ करें",
  foot:"नीति इंटेलिजेंस पोर्टल · आंतरिक समीक्षा हेतु प्रोटोटाइप · बनाई गई सामग्री को मूल दस्तावेज़ों से सत्यापित करें"
 }
};
const MSG={
 en:{aiOn:"AI assist on",aiOff:"Basic mode",aiCheck:"Checking",reading:"Reading",ready:"Ready",error:"Error",pages:"pages",sheets:"sheets",
  noDocs:"Add documents first.",sumEmpty:"No summary yet",sumEmptyP:"Upload documents and choose Generate summary.",
  pptEmpty:"No presentation yet",pptEmptyP:"Upload documents, then build the deck here.",dataEmpty:"No data yet",dataEmptyP:"Upload an Excel, CSV, PDF or Word file to see KPI tiles and charts.",
  audEmpty:"Nothing to read yet",histEmpty:"No history yet",histEmptyP:"Summaries you generate are kept here in this browser.",
  stale:"Documents changed since this summary was made.",thinking:"Reading the documents and drafting…",copied:"Copied",saved:"Download started",
  basic:"This summary was made in basic mode (AI off), so it is extracted from the text rather than written. Open “AI off · why?” at the top of the page to turn on AI for a proper summary.",
  askOff:"Questions need AI, which is not available in this view.",hiOff:"Hindi reading needs AI translation, which is not available in this view.",
  noHiVoice:"No Hindi voice is installed on this device, so Hindi text may be read with a default voice. On Windows, add Hindi under Settings › Time & language › Speech. Chrome's online Google हिन्दी voice also works.",
  translating:"Translating the next section into Hindi…"},
 hi:{aiOn:"AI सहायता चालू",aiOff:"बेसिक मोड",aiCheck:"जाँच जारी",reading:"पढ़ रहा है",ready:"तैयार",error:"त्रुटि",pages:"पृष्ठ",sheets:"शीट",
  noDocs:"पहले दस्तावेज़ जोड़ें।",sumEmpty:"अभी कोई सारांश नहीं",sumEmptyP:"दस्तावेज़ अपलोड करें और 'सारांश बनाएँ' चुनें।",
  pptEmpty:"अभी कोई प्रस्तुति नहीं",pptEmptyP:"पहले सारांश बनाएँ, फिर यहाँ डेक तैयार करें।",dataEmpty:"कोई वर्कबुक लोड नहीं",dataEmptyP:"KPI टाइल और चार्ट देखने के लिए Excel या CSV फ़ाइल अपलोड करें।",
  audEmpty:"पढ़ने के लिए अभी कुछ नहीं",histEmpty:"अभी कोई इतिहास नहीं",histEmptyP:"आपके बनाए सारांश इस ब्राउज़र में यहाँ रखे जाते हैं।",
  stale:"इस सारांश के बाद दस्तावेज़ बदले गए हैं।",thinking:"दस्तावेज़ पढ़े जा रहे हैं और मसौदा तैयार हो रहा है…",copied:"कॉपी हो गया",saved:"डाउनलोड शुरू",
  basic:"इस दृश्य में AI उपलब्ध नहीं है, इसलिए पोर्टल बेसिक निष्कर्षण का उपयोग कर रहा है। पूर्ण AI सारांश, प्रस्तुति, हिंदी ऑडियो और प्रश्नोत्तर के लिए Analysis service को कॉन्फ़िगर करके पोर्टल खोलें।",
  askOff:"प्रश्नों के लिए AI आवश्यक है, जो इस दृश्य में उपलब्ध नहीं है।",hiOff:"हिंदी वाचन के लिए AI अनुवाद आवश्यक है, जो इस दृश्य में उपलब्ध नहीं है।",
  noHiVoice:"इस डिवाइस पर हिंदी आवाज़ स्थापित नहीं है। Windows में Settings › Time & language › Speech में हिंदी जोड़ें।",
  translating:"अगला खंड हिंदी में अनुवादित हो रहा है…"}
};
let LANG="en";
const m=k=>(MSG[LANG]&&MSG[LANG][k])||MSG.en[k]||k;
const EN_CACHE={};
function applyI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k=el.dataset.i18n; if(!(k in EN_CACHE)) EN_CACHE[k]=el.textContent;
    el.textContent=(LANG==="hi"&&I18N.hi[k])?I18N.hi[k]:EN_CACHE[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const k=el.dataset.i18nPh; const key="ph:"+k; if(!(key in EN_CACHE)) EN_CACHE[key]=el.placeholder;
    el.placeholder=(LANG==="hi"&&I18N.hi[k])?I18N.hi[k]:EN_CACHE[key];
  });
  document.documentElement.lang=LANG==="hi"?"hi":"en";
  renderAiChip(); renderTray(); renderAll();
  const cr=$("#crumb"); if(cr&&currentTab()) cr.textContent=$("#t-"+currentTab()+" span").textContent;
}

/* ================= helpers ================= */
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const uid=()=>Math.random().toString(36).slice(2,10);
function store(k,v){try{if(v===undefined)return JSON.parse(localStorage.getItem(k)||"null");localStorage.setItem(k,JSON.stringify(v));}catch(e){return null}}
let toastT;function toast(t){const el=$("#toast");el.textContent=t;el.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>el.hidden=true,2600)}
const ICON={
 empty:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6z"/><path d="M9 12h7M9 16h5"/></svg>',
 info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/></svg>',
 x:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>'
};
const emptyBox=(t,p,go)=>`<div class="card empty">${ICON.empty}<b>${esc(t)}</b><span>${esc(p||"")}</span>${go?`<button type="button" class="btn btn-primary btn-sm" data-go="home">${LANG==="hi"?"दस्तावेज़ अपलोड करें":"Upload documents"}</button>`:""}</div>`;
const notice=(t,cls="")=>`<div class="notice ${cls}">${ICON.info}<div>${esc(t)}</div></div>`;
const wordCount=s=>(String(s).match(/\S+/g)||[]).length;

/* ================= state ================= */
const S={docs:[],result:null,deck:null,stale:false,chat:[],sheetIdx:0,isSample:false};
let sample=null, downloads=null, imgLimits=null;

/* ================= capabilities ================= */
const AI={framed:false,perm:"",lastErr:"",lastMsg:"",checkedAt:null,test:""};
let permsApi=null;

function parseAIJson(value){
  if(value && typeof value === "object") return value;
  const text=String(value||"").trim().replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/i,"");
  try{return JSON.parse(text)}catch(e){
    const a=text.indexOf("{"); const b=text.lastIndexOf("}");
    if(a>=0&&b>a){try{return JSON.parse(text.slice(a,b+1))}catch(_){} }
    return null;
  }
}

async function geminiCall(input, options={}){
  let prompt=input;
  if(Array.isArray(input)){
    prompt=input.map(t=>`${String(t.role||"user").toUpperCase()}: ${String(t.content||"")}`).join("\n\n");
  }
  const answer=await window.NITI_AI.ask(prompt,"",{
    model:options.model||"gemini-3.8-flash",
    thinking_level:options.thinking_level||"low"
  });
  return {text:String(answer||"")};
}

geminiCall.json=async function(input, options={}){
  const r=await geminiCall(input,options);
  const parsed=parseAIJson(r.text);
  if(!parsed) { const e=new Error("The analysis service returned an invalid response."); e.code="invalid_json"; throw e; }
  return parsed;
};

async function initCaps(){
  AI.framed=true; AI.perm="available"; AI.lastErr=""; sample=geminiCall; downloads=true; imgLimits=null;
  AI.checkedAt=new Date(); aiChecked=true; renderAiChip(); renderAiPanel(); renderAll();
}
let aiChecked=false;
function renderAiChip(){
  const c=$("#aiChip"),t=$("#aiChipTxt");
  if(!aiChecked){t.textContent=m("aiCheck");c.classList.add("off");return}
  c.classList.toggle("off",!sample); t.textContent=sample?m("aiOn"):(LANG==="hi"?"AI बंद · क्यों?":"AI off · why?");
  const hb=$("#homeAiBanner"); if(hb)hb.hidden=!!sample;
}
function aiReason(){
  if(sample)return {title:"Analysis service is available",body:"Summaries, presentations, document analysis, Hindi translation and questions are available through the secure analysis service. Credentials remain server-side.",steps:[]};
  return {title:"Analysis service is unavailable",body:"The portal could not connect to the analysis service. Check the secure backend configuration.",steps:["Confirm the secure backend is deployed.","Confirm the backend credential is configured as a server-side secret."]};
}
function renderAiPanel(){
  const p=$("#aiPanel"); if(!p)return; const r=aiReason();
  p.innerHTML=`<h4>${esc(r.title)}</h4><p>${esc(r.body)}</p>${r.steps.length?`<ol>${r.steps.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>`:""}
   <div class="row"><button type="button" class="btn btn-ghost btn-sm" id="aiRecheck">Check again</button>${sample?`<button type="button" class="btn btn-ghost btn-sm" id="aiTest">Test AI</button>`:""}</div>
   ${AI.test?`<p style="color:var(--ink)">${esc(AI.test)}</p>`:""}
   <dl class="diag"><dt>Analysis service</dt><dd>${sample?"connected":"not connected"}</dd><dt>Analysis capability</dt><dd>${sample?"available":"not available"}</dd><dt>Service</dt><dd>gemini-3.8-flash</dd><dt>Last AI error</dt><dd>${esc(AI.lastErr||"none")}</dd><dt>Checked</dt><dd>${AI.checkedAt?AI.checkedAt.toLocaleTimeString("en-IN"):"—"}</dd></dl>`;
  $("#aiRecheck").onclick=async()=>{AI.test="";try{await initCaps();AI.test=sample?"Analysis service is connected.":"Analysis service is not available."}catch(e){AI.test="Connection check failed."}renderAiPanel()};
  const te=$("#aiTest"); if(te)te.onclick=async()=>{te.disabled=true;AI.test="Running analysis…";renderAiPanel();
    try{const r_=await geminiCall("Reply with exactly: AI assist is working.");AI.test="Test passed: "+r_.text.trim().slice(0,80);AI.lastErr=""}catch(e){AI.lastErr=e&&e.code||"error";AI.test="Test failed: "+(e&&e.message||"unknown") ;}
    renderAiChip();renderAiPanel()};
}
function toggleAiPanel(open){const p=$("#aiPanel"),b=$("#aiChip");const o=open??p.hidden;p.hidden=!o;b.setAttribute("aria-expanded",o);if(o)renderAiPanel()}
$("#aiChip").onclick=()=>toggleAiPanel();
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&!aiChecked)initCaps()});
$("#homeAiWhy").onclick=e=>{e.stopPropagation();window.scrollTo({top:0});toggleAiPanel(true)};
document.addEventListener("click",e=>{const p=$("#aiPanel");if(p&&!p.hidden&&!e.target.closest("#aiChip")&&!e.target.closest("#aiPanel"))toggleAiPanel(false)});
function aiErr(e){
  const c=e&&e.code; if(c)AI.lastErr=c;
  if(c==="prompt_too_large")return "The documents are too long to send in one request. Remove a file and try again.";
  if(c==="invalid_json")return "The AI reply could not be read. Try again.";
  if(c==="cancelled")return "Stopped.";
  return e&&e.message?String(e.message):"The AI service did not respond. Try again in a moment.";
}

/* ================= file ingestion ================= */
if(window.pdfjsLib){pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";}
const extOf=n=>(n.split(".").pop()||"").toLowerCase();
function kindOf(n){const e=extOf(n);if(e==="pdf")return"pdf";if(e==="docx")return"docx";if(e==="xlsx"||e==="xls")return"xlsx";if(e==="csv")return"csv";if(e==="txt")return"txt";return null}
function fmtSize(b){return b>1048576?(b/1048576).toFixed(1)+" MB":Math.max(1,Math.round(b/1024))+" KB"}

async function addFiles(list){
  const files=[...list];
  if(S.isSample){S.docs=[];S.result=null;S.deck=null;S.isSample=false}
  for(const f of files){
    const kind=kindOf(f.name);
    const d={id:uid(),name:f.name,kind:kind||"txt",size:f.size,pages:0,text:"",status:"busy",note:"",sheets:[],scanned:[],file:f};
    if(!kind){d.status="err";d.note="Unsupported file type";}
    S.docs.push(d);
  }
  S.stale=!!S.result; S.fig=null; renderTray(); switchTab("home");
  for(const d of S.docs.filter(x=>x.status==="busy")){
    stepProgress([{t:`${m("reading")}: ${d.name}`,s:"run"}]);
    try{ await extract(d); d.status="ready"; }
    catch(e){console.error(e);d.status="err";d.note=(e&&e.message)||"Could not read this file"}
    renderTray();
  }
  const scannedDocs=S.docs.filter(d=>d.scanned&&d.scanned.length&&!d.ocrDone);
  if(scannedDocs.length) await runOcr(scannedDocs);
  stepProgress([]); renderAll();
  if(S.docs.some(d=>d.status==="ready")) generateSummary();
}

async function extract(d){
  const buf=await d.file.arrayBuffer();
  if(d.kind==="pdf") return extractPdf(d,buf);
  if(d.kind==="docx") return extractDocx(d,buf);
  if(d.kind==="xlsx"||d.kind==="csv") return extractSheet(d,buf);
  d.text=new TextDecoder().decode(buf); d.pages=Math.max(1,Math.ceil(wordCount(d.text)/450));
}
async function extractPdf(d,buf){
  if(!window.pdfjsLib) throw new Error("PDF reader did not load");
  const pdf=await pdfjsLib.getDocument({data:new Uint8Array(buf),isEvalSupported:false}).promise;
  d.pages=pdf.numPages; d.pdf=pdf; const parts=[];
  for(let i=1;i<=pdf.numPages;i++){
    const page=await pdf.getPage(i); const tc=await page.getTextContent();
    const items=tc.items.filter(it=>"str" in it&&it.str.trim()!=="").map(it=>({s:it.str.replace(/​/g,""),x:it.transform[4],y:it.transform[5],w:it.width||0,h:Math.abs(it.transform[3])||10}));
    items.sort((a,b)=>b.y-a.y||a.x-b.x);
    const rows=[];
    for(const it of items){const r=rows.find(r=>Math.abs(r.y-it.y)<Math.max(2.5,it.h*.45));if(r)r.items.push(it);else rows.push({y:it.y,items:[it]})}
    rows.sort((a,b)=>b.y-a.y);
    const lines=rows.map(r=>{r.items.sort((a,b)=>a.x-b.x);let out="",end=null;
      for(const it of r.items){if(end!==null){const gap=it.x-end;out+=gap>Math.max(14,it.h*1.6)?" | ":(gap>it.h*.18&&!out.endsWith(" ")&&!it.s.startsWith(" ")?" ":"")}out+=it.s;end=it.x+it.w}
      return out.replace(/\s+/g," ").trim()});
    const txt=lines.filter(Boolean).join("\n");
    if(txt.replace(/\s/g,"").length<30) d.scanned.push(i);
    parts.push({p:i,t:`[Page ${i}]\n`+txt});
  }
  d.pageTexts=parts;
  d.text=parts.map(x=>x.t).join("\n\n");
}
async function extractDocx(d,buf){
  if(!window.mammoth) throw new Error("Word reader did not load");
  const r=await mammoth.convertToHtml({arrayBuffer:buf});
  const div=document.createElement("div"); div.innerHTML=r.value; const out=[];
  div.childNodes.forEach(n=>{
    const tag=(n.tagName||"").toLowerCase();
    if(/^h[1-6]$/.test(tag)) out.push("\n"+n.textContent.trim()+"\n");
    else if(tag==="ul"||tag==="ol") n.querySelectorAll("li").forEach(li=>out.push("- "+li.textContent.trim()));
    else if(tag==="table"){n.querySelectorAll("tr").forEach(tr=>out.push([...tr.children].map(c=>c.textContent.trim()).join(" | ")));out.push("")}
    else if(n.textContent&&n.textContent.trim()) out.push(n.textContent.trim());
  });
  d.text=out.join("\n").replace(/\n{3,}/g,"\n\n").trim();
  d.pages=Math.max(1,Math.ceil(wordCount(d.text)/450));
}
function toNum(v){
  if(typeof v==="number"&&isFinite(v))return v;
  if(v instanceof Date)return null;
  let s=String(v).replace(/[,₹%\s]|Rs\.?|INR|crore|cr|lakhs?/gi,"").trim();if(/^\(\d.*\)$/.test(s))s="-"+s.slice(1,-1);
  if(!s||!/^[-+]?\d*\.?\d+(e[-+]?\d+)?$/i.test(s))return null;
  const n=Number(s);return isFinite(n)?n:null;
}
async function extractSheet(d,buf){
  if(!window.XLSX) throw new Error("Excel reader did not load");
  const wb=d.kind==="csv"?XLSX.read(new TextDecoder().decode(buf),{type:"string"}):XLSX.read(new Uint8Array(buf),{type:"array",cellDates:true});
  const txt=[];
  wb.SheetNames.forEach(name=>{
    const rows=XLSX.utils.sheet_to_json(wb.Sheets[name],{header:1,raw:true,defval:""}).map(r=>r.map(c=>c instanceof Date?c.toISOString().slice(0,10):c));
    const clean=rows.filter(r=>r.some(c=>String(c).trim()!==""));
    if(!clean.length)return;
    const an=analyseSheet(name,clean); d.sheets.push(an);
    txt.push(`Sheet: ${name} (${clean.length} rows)`);
    clean.slice(0,160).forEach(r=>txt.push(r.map(c=>typeof c==="number"?+c.toFixed(4):String(c).trim()).join(" | ")));
    if(clean.length>160)txt.push(`… ${clean.length-160} more rows`);
    txt.push("");
  });
  d.text=txt.join("\n"); d.pages=d.sheets.length;
}
function isBlankCell(v){return v===null||v===undefined||String(v).trim()===""||/^(-|–|—|na|n\/a|nil|null|#n\/a|#div\/0!|\.)$/i.test(String(v).trim())}
function analyseSheet(name,rows){
  const width=Math.max(...rows.slice(0,40).map(r=>r.filter(c=>!isBlankCell(c)).length),1);
  const strCount=r=>r.filter(c=>typeof c==="string"&&c.trim()&&toNum(c)===null&&!isBlankCell(c)).length;
  let hi=0;
  for(let i=0;i<Math.min(20,rows.length-1);i++){if(strCount(rows[i])>=Math.max(2,Math.ceil(width*.5))){hi=i;break}}
  let header=rows[hi].map(h=>String(h??"").trim());
  // merge a group-header row above (e.g. merged cells) when present
  if(hi>0&&strCount(rows[hi-1])>=2){let last="";const up=rows[hi-1].map(c=>{const t=String(c??"").trim();if(t)last=t;return last});header=header.map((h,j)=>up[j]&&up[j]!==h&&h?`${up[j]} – ${h}`:(h||up[j]))}
  header=header.map((h,j)=>h||`Column ${j+1}`);
  const data=rows.slice(hi+1).filter(r=>r.some(c=>!isBlankCell(c)));
  const cols=header.map((h,j)=>{
    const vals=data.map(r=>r[j]).filter(v=>!isBlankCell(v));
    const nums=vals.map(toNum).filter(v=>v!==null);
    const uniq=new Set(vals.map(v=>String(v).trim())).size;
    const seq=nums.length>3&&nums.every((x,k)=>x===k+1);
    return {h,j,numeric:nums.length>=2&&nums.length/Math.max(vals.length,1)>=.6,seq,count:vals.length,uniq};
  });
  const lab=cols.find(c=>!c.numeric&&c.count>=Math.min(2,data.length)&&c.uniq>=Math.min(c.count,2)*.5);
  const body=data.filter(r=>!/^(grand\s*)?(total|sum|average|overall)\b/i.test(String(lab?r[lab.j]:r[0]??"").trim())).slice(0,2000);
  const numCols=cols.filter(c=>c.numeric&&!c.seq&&!/^(s\.?\s?no\.?|sr\.?\s?no\.?|sl\.?\s?no\.?|#|id|code|pin ?code|lgd.*|.*\bcode)$/i.test(c.h));
  const labels=body.map((r,i)=>lab?String(r[lab.j]??"").trim()||`Row ${i+1}`:`Row ${i+1}`);
  const series=numCols.map(c=>({name:c.h,values:body.map(r=>toNum(r[c.j]))})).filter(se=>se.values.some(v=>v!==null));
  const timeLike=labels.length>2&&labels.filter(l=>/(20\d\d|19\d\d|q[1-4]|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|fy|month|week)/i.test(l)).length/labels.length>.6;
  const kpis=series.slice(0,8).map(s=>{
    const v=s.values.map((x,i)=>({x,l:labels[i]})).filter(o=>o.x!==null);
    if(!v.length)return null;
    const sum=v.reduce((a,o)=>a+o.x,0),avg=sum/v.length;
    const mx=v.reduce((a,o)=>o.x>a.x?o:a),mn=v.reduce((a,o)=>o.x<a.x?o:a);
    const pct=/%|percent|rate|ratio|share|score|index|avg|average|per/i.test(s.name)||v.every(o=>o.x>=0&&o.x<=1);
    return {name:s.name,avg,sum,max:mx,min:mn,n:v.length,useAvg:pct};
  }).filter(Boolean);
  return {name,header,rows:body,labelCol:lab?lab.h:null,labels,series,timeLike,kpis};
}
async function runOcr(docs){
  if(!sample||!imgLimits){
    docs.forEach(d=>{d.note=`${d.scanned.length} scanned page(s) could not be read in this view`;});
    return;
  }
  for(const d of docs){
    const pages=d.scanned.slice(0,40); const per=Math.max(1,Math.min(imgLimits.maxCount||1,4));
    for(let i=0;i<pages.length;i+=per){
      const grp=pages.slice(i,i+per);
      stepProgress([{t:`Reading scanned pages ${grp[0]}–${grp[grp.length-1]} of ${d.name}`,s:"run"}]);
      const blobs=[];
      for(const p of grp){
        const page=await d.pdf.getPage(p); const vp0=page.getViewport({scale:1});
        const scale=Math.min(2.2,1800/Math.max(vp0.width,vp0.height)); const vp=page.getViewport({scale});
        const c=document.createElement("canvas");c.width=vp.width;c.height=vp.height;
        await page.render({canvasContext:c.getContext("2d"),viewport:vp}).promise;
        blobs.push(await new Promise(r=>c.toBlob(r,"image/jpeg",.85)));
      }
      try{
        const {text}=await sample(`These ${grp.length} image(s) are scanned pages ${grp.join(", ")} of the document "${d.name}". Transcribe all text exactly as written, in reading order. Render tables as rows with " | " between cells. Before each page write a line "=== Page N ===". Output only the transcription.`,{images:blobs});
        const chunks=text.split(/=== Page (\d+) ===/);
        for(let k=1;k<chunks.length;k+=2){const pn=+chunks[k];const pt=d.pageTexts.find(x=>x.p===pn);if(pt)pt.t=chunks[k+1].trim()}
        if(chunks.length<3){const pt=d.pageTexts.find(x=>x.p===grp[0]);if(pt)pt.t=text.trim()}
      }catch(e){d.note=aiErr(e);break}
    }
    d.text=d.pageTexts.map(x=>x.t).join("\n\n"); d.ocrDone=true;
    d.note=`${pages.length} scanned page(s) read with AI`;
    renderTray();
  }
}

/* ================= progress / tray ================= */
function stepProgress(steps){$("#progress").innerHTML=steps.map(s=>`<div class="pstep ${s.s}"><span class="dot"></span>${esc(s.t)}</div>`).join("")}
function renderTray(){
  const ul=$("#fileList");
  ul.innerHTML=S.docs.map(d=>{
    const st=d.status==="ready"?`<span class="fstate st-ready">${m("ready")}</span>`:d.status==="err"?`<span class="fstate st-err">${m("error")}</span>`:`<span class="fstate st-busy"><span class="spin" style="width:10px;height:10px;vertical-align:-1px"></span></span>`;
    const meta=[fmtSize(d.size||0), d.pages?`${d.pages} ${d.kind==="xlsx"||d.kind==="csv"?m("sheets"):m("pages")}`:"", d.note].filter(Boolean).join(" · ");
    return `<li class="file"><span class="ftype ft-${d.kind}">${d.kind.toUpperCase()}</span><div style="min-width:0"><div class="fname" title="${esc(d.name)}">${esc(d.name)}</div><div class="fmeta">${esc(meta)}</div></div><div class="row" style="gap:4px;flex-wrap:nowrap">${st}<button class="iconbtn" data-rm="${d.id}" aria-label="Remove ${esc(d.name)}">${ICON.x}</button></div></li>`;
  }).join("");
  $("#trayEmpty").hidden=S.docs.length>0;
  $("#trayCount").textContent=S.docs.filter(d=>d.status==="ready").length;
  $("#genBtn").disabled=!S.docs.some(d=>d.status==="ready")||busy.sum;
}
$("#fileList").addEventListener("click",e=>{const b=e.target.closest("[data-rm]");if(!b)return;S.docs=S.docs.filter(d=>d.id!==b.dataset.rm);S.stale=!!S.result;stopAudio();renderTray();renderAll()});

/* ================= context building ================= */
function readyDocs(){return S.docs.filter(d=>d.status==="ready"&&d.text&&d.text.trim())}
function docBlock(d,max){const t=d.text.length>max?d.text.slice(0,max)+"\n[…truncated]":d.text;return `### Document: ${d.name} (${d.kind.toUpperCase()}, ${d.pages} ${d.kind==="xlsx"||d.kind==="csv"?"sheets":"pages"})\n${t}`}
function totalChars(){return readyDocs().reduce((a,d)=>a+d.text.length,0)}
function isBig(){const docs=readyDocs();return docs.length>2||totalChars()>30000||docs.reduce((a,d)=>a+(d.pages||0),0)>12}
function chunkDocs(limit){
  const chunks=[];let cur="";
  for(const d of readyDocs()){
    const head=`### Document: ${d.name}\n`; let t=d.text;
    while(t.length){const room=limit-cur.length-head.length;if(room<2000){chunks.push(cur);cur="";continue}
      const piece=t.slice(0,room);cur+=head+piece+"\n\n";t=t.slice(room);if(t.length){chunks.push(cur);cur=""}}
  }
  if(cur)chunks.push(cur);return chunks;
}

/* ================= SUMMARY ================= */
const busy={sum:false,ppt:false,ask:false};
const SUMMARY_SPEC=big=>`Write a summary note for senior officers at NITI Aayog (Government of India).
LENGTH: ${big?"The material is large: at most TWO A4 pages (about 850-950 words in total).":"ONE A4 page (about 480-560 words in total)."}
COVERAGE IS MANDATORY: the OUTLINE lists every section of the source. Every outline section must be represented in the note, in the same order as the source. Group closely related minor sections under one heading if needed, but never drop a topic. Balance space by importance; do not spend most of the note on the first sections.
ACCURACY: use only facts stated in the source. Copy numbers, dates, names and units exactly (₹, %, counts, deadlines). Do not round, infer or combine figures unless the source does. If something is pending or awaited, say so.
Structure:
- "title": the document's own title or subject.
- "doc_date": date of the document if stated, else "".
- "overview": 3-4 full sentences: what the document is, its purpose, and the overall status or conclusion.
- "sections": one entry per major topic, using the source's own section names as headings. Each has "narrative" (2-3 full sentences with the key figures) and "points" (0-3 short bullets with specific facts not already in the narrative, each under 25 words).
- "key_numbers": ${big?"5-8":"4-6"} headline figures, each with what it measures and its date or comparison.
- "action_items": concrete actions, pending tasks and deadlines stated in the source (up to ${big?12:8}). Not recommendations. Owner and due date only if stated or clearly implied; otherwise "—".
Write in a formal, factual government register, as prose with supporting bullets.
Reply with only JSON of this shape:
{"title":"...","doc_date":"...","doc_type":"e.g. Project status update / Minutes of meeting / Policy report / KPI workbook","overview":"...","sections":[{"heading":"...","narrative":"...","points":["..."]}],"key_numbers":[{"value":"727 / 805","label":"what it measures","context":"date or comparison"}],"action_items":[{"action":"...","owner":"...","due":"..."}]}`;
const OUTLINE_SPEC=`Read this part of an official document and build a complete, faithful outline of it. List EVERY section and sub-section in order, using the document's own headings (for untitled blocks, write a short descriptive heading). Under each, list all key facts: figures with units, dates, names, decisions, status, pending items, owners and deadlines — copied exactly. Include facts from tables. Do not summarise away anything important.
Reply with only JSON: {"doc_title":"...","doc_date":"...","sections":[{"heading":"...","facts":["..."]}]}`;
const VERIFY_SPEC=`You are checking a draft summary note against its source. Compare every statement in the DRAFT with the SOURCE.
1. Correct any number, date, name, unit or claim that is wrong or not supported by the source.
2. If any section of the OUTLINE is missing from the draft, add it briefly (merge with a related section if space is tight).
3. Add any clearly stated action item or deadline that is missing.
4. Keep the same JSON shape, the same register and roughly the same length (tighten wording if you add content).
Reply with only JSON: the corrected note in the same shape, plus "review":{"corrections":<number of fixes>,"added":<number of sections or items added>}.`;

async function generateSummary(force){
  const docs=readyDocs(); if(!docs.length){toast(m("noDocs"));return}
  if(busy.sum)return; busy.sum=true; renderTray(); switchTab("summary");
  $("#sumStale").innerHTML=""; $("#sumActions").hidden=true;
  const big=isBig();
  const steps=[["Reading the full document",0],["Writing the note",0],["Checking every figure against the source",0]];
  const draw=(k,extra)=>{steps.forEach((s_,i)=>s_[1]=i<k?2:i===k?1:0);$("#sumOut").innerHTML=`<div class="card empty" style="justify-items:stretch;max-width:520px;margin:0 auto;text-align:left"><b style="text-align:center">${esc(m("thinking"))}</b><div class="progress" style="margin:0">${steps.map(([t,st])=>`<div class="pstep ${st===2?"done":st===1?"run":""}"><span class="dot"></span>${esc(t)}${st===1&&extra?` · ${esc(extra)}`:""}</div>`).join("")}</div><span style="text-align:center;font-size:.85rem">Usually takes 1–2 minutes. Accuracy is checked before the note is shown.</span></div>`};
  let summary=null,mode="ai",review=null,outlineHeads=[];
  const cacheOpt=force?{gcTime:600000,refresh:true}:{gcTime:600000};
  try{
    if(sample){
      // 1. outline of the whole material (chunked)
      draw(0);
      const chunks=chunkDocs(40000); const outlines=[];
      for(let i=0;i<chunks.length;i++){
        draw(0,chunks.length>1?`part ${i+1} of ${chunks.length}`:"");
        const r=await sample.json(OUTLINE_SPEC+"\n\n=== SOURCE ===\n"+chunks[i],{cache:cacheOpt});
        outlines.push(r&&typeof r==="object"?r:{sections:[]});
      }
      const outline=outlines.flatMap(o=>Array.isArray(o.sections)?o.sections:[]).map(x=>({heading:String(x.heading||""),facts:(Array.isArray(x.facts)?x.facts:[]).map(String)}));
      outlineHeads=outline.map(x=>x.heading).filter(Boolean);
      const outlineTxt=outline.map((x,i)=>`${i+1}. ${x.heading}\n${x.facts.map(f=>"   - "+f).join("\n")}`).join("\n");
      const total=totalChars();
      const source=total<=30000?docs.map(d=>docBlock(d,30000)).join("\n\n"):"";
      // 2. write
      draw(1);
      const writeIn=`${SUMMARY_SPEC(big)}\n\n=== OUTLINE (complete, in source order) ===\n${outlineTxt}`.slice(0,34000)+(source?`\n\n=== SOURCE TEXT ===\n${source}`:"");
      let draft=normaliseSummary(await sample.json(writeIn.slice(0,62000),{cache:cacheOpt}));
      // 3. verify against source
      draw(2);
      try{
        const ref=source||outlineTxt;
        const checked=await sample.json(`${VERIFY_SPEC}\n\n=== DRAFT ===\n${JSON.stringify(draft)}\n\n=== OUTLINE ===\n${outline.map(x=>x.heading).join("\n")}\n\n=== SOURCE ===\n${ref}`.slice(0,62000),{cache:cacheOpt});
        const fixed=normaliseSummary(checked);
        if(fixed&&fixed.sections.length){review=checked.review||{};summary=fixed}else summary=draft;
      }catch(e){summary=draft}
      if(summary&&!summary.doc_date&&outlines[0]&&outlines[0].doc_date)summary.doc_date=String(outlines[0].doc_date);
    }
  }catch(e){ console.warn(e); $("#sumStale").innerHTML=notice(aiErr(e),"warn"); summary=null; }
  if(!summary){ summary=basicSummary(docs,big); mode="basic"; if(!sample) $("#sumStale").innerHTML=notice(m("basic")); }
  summary.coverage=outlineHeads; summary.review=review;
  S.result={summary,mode,big,files:docs.map(d=>({name:d.name,kind:d.kind,pages:d.pages})),at:new Date().toISOString()};
  S.deck=null; S.stale=false; S.isSample=false; busy.sum=false;
  saveHistory(); renderTray(); renderAll();
}
function normaliseSummary(s){
  if(!s||typeof s!=="object")return null;
  const arr=v=>Array.isArray(v)?v:[];
  return {title:String(s.title||"Document summary"),doc_date:String(s.doc_date||""),doc_type:String(s.doc_type||""),overview:String(s.overview||""),
    sections:arr(s.sections).map(x=>({heading:String(x.heading||""),narrative:String(x.narrative||""),points:arr(x.points).map(String).filter(Boolean)})).filter(x=>x.points.length||x.narrative),
    key_numbers:arr(s.key_numbers).map(x=>({value:String(x.value??""),label:String(x.label??""),context:String(x.context??"")})).filter(x=>x.value),
    action_items:arr(s.action_items).map(x=>({action:String(x.action??""),owner:String(x.owner||"—"),due:String(x.due||"—")})).filter(x=>x.action)};
}

/* Basic (no-AI) summariser: rebuilds paragraphs from the document layout, then picks sections, figures and actions */
const MON="(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)[a-z]*\\.?";
const DATE_RE=new RegExp(`(\\d{1,2}(?:st|nd|rd|th)?\\s${MON}(?:,?\\s\\d{2,4})?|${MON}\\s\\d{1,2}(?:st|nd|rd|th)?,?\\s\\d{4}|(?:by\\s)?(?:the\\s)?(?:end|last week|first week|mid)[-\\s]of\\s(?:${MON}|the month|the quarter)(?:\\s\\d{4})?|${MON}\\s\\d{4}|\\d{1,2}[/-]\\d{1,2}[/-]\\d{2,4})`,"i");
function splitSentences(t){return String(t).replace(/\s+/g," ").split(/(?<=[.!?।])\s+(?=[A-Z0-9"“(])/).map(s=>s.trim()).filter(s=>s.length>2)}
function clip(t,n){t=String(t).trim();if(t.length<=n)return t;const cut=t.slice(0,n);const p=Math.max(cut.lastIndexOf(". "),cut.lastIndexOf("; "));return (p>n*.5?cut.slice(0,p+1):cut.replace(/\s+\S*$/,"")+"…")}
function reflow(text){
  const bullet=/^(\(?[a-z]\)|\(?[ivx]{1,4}\)|[a-z][.)]|[ivx]{1,4}[.)]|\d{1,2}[.)]|[-•●▪◦*–·])\s*/i;
  const blocks=[];let cur=null,lastLen=0;
  for(let raw of String(text).split(/\n/)){
    let l=raw.replace(/​/g,"").trim();
    if(!l||/^\[Page \d+\]$/.test(l)||/^\d{1,3}$/.test(l))continue;
    const prevLen=lastLen; lastLen=l.length;
    const wrapped=cur&&cur.type==="item"&&prevLen>=80&&!/[.!?]$/.test(cur.text)&&!bullet.test(l);
    if(wrapped&&!/ \| /.test(l)){cur.text+=" "+l;continue}
    const isRow=/ \| /.test(l);
    const hasBullet=bullet.test(l);
    const words=l.split(/\s+/).length;
    const isHead=!isRow&&!hasBullet&&l.length<=70&&words<=9&&/^[A-Z0-9“"]/.test(l)&&!/[.,;]$/.test(l)&&!(/:$/.test(l)&&words>6)&&!/^\d[\d,.\s%]*$/.test(l)&&!(cur&&cur.type==="item"&&!/[.!?:]$/.test(cur.text)&&/^[a-z]/.test(l));
    if(isRow){blocks.push(cur={type:"row",text:l});continue}
    if(isHead&&!(cur&&cur.type==="head"&&cur.text.length<25&&!/:$/.test(cur.text)&&l.length<25&&false)){blocks.push(cur={type:"head",text:l.replace(/:$/,"")});continue}
    if(hasBullet){blocks.push(cur={type:"item",text:l.replace(bullet,"")});continue}
    if(cur&&cur.type==="item"&&(!/[.!?]$/.test(cur.text)||/^[a-z(]/.test(l))){cur.text+=" "+l;continue}
    blocks.push(cur={type:"item",text:l});
  }
  blocks.forEach(b=>b.text=b.text.replace(/\s+/g," ").trim());
  return blocks.filter(b=>b.text.length>1);
}
function basicSummary(docs,big){
  const sections=[],numbers=[],actions=[];let title="",docDate="",kind="";
  const actRe=/\b(to be|will be|shall|pending|awaited|follow[- ]?up|deadline|expected|scheduled|to schedule|to finali[sz]e|to initiate|to share|to create|next steps?|is being|are being|in progress|planned|target)\b/i;
  const numRe=/(₹\s?[\d,.]+(?:\s?(?:cr|crore|lakh))?|\d[\d,]*(?:\.\d+)?\s?(?:%|percent|k\b|cr\b|crore|lakh)|\d[\d,]*\s?\/\s?\d[\d,]*|\b\d{1,3}(?:,\d{3})+\b|\b\d{2,}(?:\.\d+)?\b)/i;
  for(const d of docs){
    if(d.sheets&&d.sheets.length){
      kind=kind||"KPI workbook";
      for(const sh of d.sheets.slice(0,4)){
        const k=sh.kpis.slice(0,3);
        const narr=`The sheet “${sh.name}” in ${d.name} has ${sh.rows.length} rows${sh.labelCol?` by ${sh.labelCol}`:""} and ${sh.series.length} numeric indicators.`+(k.length?" "+k.map(x=>`${x.name} ${x.useAvg?"averages":"totals"} ${fmtNum(x.useAvg?x.avg:x.sum)}, highest in ${x.max.l} (${fmtNum(x.max.x)}) and lowest in ${x.min.l} (${fmtNum(x.min.x)})`).join("; ")+".":"");
        sections.push({heading:`${sh.name}`,narrative:narr,points:[],w:narr.length});
        k.forEach(x=>numbers.push({value:fmtNum(x.useAvg?x.avg:x.sum),label:`${x.name} (${x.useAvg?"average":"total"})`,context:`${sh.name}, ${x.n} rows`}));
      }
      continue;
    }
    const blocks=reflow(d.text);
    const firstHead=blocks.find(b=>b.type==="head");
    if(!title)title=(firstHead?firstHead.text:"")||d.name.replace(/\.[^.]+$/,"");
    if(!docDate){const mm=d.text.slice(0,800).match(DATE_RE);if(mm)docDate=mm[1]}
    let sec=null;
    for(const b of blocks){
      if(b.type==="head"){if(sec&&!sec.items.length&&sec.heading.length<40&&b.text.length<50){sec.heading=`${sec.heading}: ${b.text}`;continue}sec={heading:b.text,items:[],rows:[]};sections.push(sec);continue}
      if(!sec){sec={heading:"Introduction",items:[],rows:[]};sections.push(sec)}
      if(b.type==="row"){sec.rows.push(b.text);continue}
      sec.items.push(b.text);
      const t=b.text;
      for(const sn of splitSentences(t)){if(actions.length>=(big?14:10))break;if(!actRe.test(sn)||/\b(was|were)\s(held|conducted|completed|done)\b/i.test(sn))continue;const dm=sn.match(DATE_RE);actions.push({action:clip(sn.replace(/^[A-Za-z &/-]{2,40}:\s*/,m0=>m0.length<45?"":m0),170),owner:"—",due:dm?dm[1].replace(/^by\s/i,""):"—",score:(dm?2:0)+(/pending|awaited|to be|will be|by \d/i.test(sn)?2:0)})}
      const nm=t.match(numRe);
      if(nm&&!/^20\d\d$/.test(nm[1].trim())){const dm=t.match(DATE_RE);const s0=splitSentences(t).find(x=>x.includes(nm[1]))||t;numbers.push({value:nm[1].trim(),label:clip(s0.replace(nm[1],"").replace(/[~≈]\s*(?=\s|$)/g,"").replace(/\s{2,}/g," ").replace(/^[a-z]\.\s*/i,"").trim(),95),context:dm?dm[1]:"",score:(/%|\/|,\d{3}|₹/.test(nm[1])?2:0)+(nm[1].replace(/\D/g,"").length>=3?1:0)})}
    }
  }
  // choose sections: those with real content, keep document order, limit count
  const withBody=sections.filter(s=>s.narrative||(s.items&&s.items.length));
  const lim=big?6:5;
  const ranked=[...withBody].map((s,i)=>({s,i,w:s.w||s.items.join(" ").length})).sort((a,b)=>b.w-a.w).slice(0,lim).sort((a,b)=>a.i-b.i).map(x=>x.s);
  const outSecs=ranked.map(s=>{
    if(s.narrative)return {heading:s.heading,narrative:s.narrative,points:s.points||[]};
    const sents=s.items.flatMap(splitSentences);
    const narrative=clip(sents.slice(0,2).join(" "),big?340:270);
    const used=new Set(sents.slice(0,2));
    const pts=s.items.map(it=>splitSentences(it)[0]||it).filter(x=>!used.has(x)&&numRe.test(x)).slice(0,2).map(x=>clip(x,150));
    const rowPts=s.rows.slice(0,2).map(r=>clip(r.replace(/\s\|\s/g,"; "),150));
    return {heading:s.heading,narrative,points:pts.length?pts:rowPts};
  });
  const covered=withBody.map(s=>s.heading);
  const firstReal=splitSentences(withBody.flatMap(s=>s.items||[]).join(" ")).find(x=>x.length>60)||"";
  const overview=`${docs.length===1?`This document`:`These ${docs.length} documents`} cover${docs.length===1?"s":""} ${covered.slice(0,6).join(", ")}${covered.length>6?` and ${covered.length-6} more sections`:""}. ${clip(firstReal,240)}`.trim();
  const seen=new Set();
  const keyNums=numbers.sort((a,b)=>(b.score||0)-(a.score||0)).filter(n=>{const k=n.value+n.label.slice(0,20);if(seen.has(k))return false;seen.add(k);return true}).slice(0,big?8:6).map(({value,label,context})=>({value,label,context}));
  const acts=actions.sort((a,b)=>b.score-a.score).slice(0,big?10:7).map(({action,owner,due})=>({action,owner,due}));
  return {title:title||(docs.length===1?docs[0].name.replace(/\.[^.]+$/,""):`${docs.length} documents`),doc_date:docDate,doc_type:(kind||"Document")+" · basic extraction (AI off)",overview,sections:outSecs,key_numbers:keyNums,action_items:acts};
}
function summaryWords(s){return wordCount([s.title,s.overview,...s.sections.flatMap(x=>[x.heading,x.narrative||"",...x.points]),...s.key_numbers.map(k=>k.value+" "+k.label+" "+k.context),...s.action_items.map(a=>a.action+a.owner+a.due)].join(" "))}
function renderSummary(){
  const out=$("#sumOut");
  if(!S.result){out.innerHTML=emptyBox(m("sumEmpty"),m("sumEmptyP"),!readyDocs().length);$("#sumActions").hidden=true;return}
  const {summary:s,files,at}=S.result;
  const w=summaryWords(s); const two=w>720;
  const dt=new Date(at);
  const ref=`NIP/${dt.getFullYear()}/${String(dt.getMonth()+1).padStart(2,"0")}${String(dt.getDate()).padStart(2,"0")}-${String(Math.abs(hash(files.map(f=>f.name).join()))%9000+1000)}`;
  if(S.stale&&!$("#sumStale").innerHTML)$("#sumStale").innerHTML=notice(m("stale"),"warn");
  const rv=s.review; const cov=(s.coverage||[]).length;
  out.innerHTML=`<article class="note" id="noteDoc">
   <div class="note-top"></div>
   <div class="note-h"><div><div class="k">Summary Note ${S.isSample?'<span class="sample-tag" style="margin-left:6px">Example</span>':""}</div><div style="font-weight:700;font-size:1.05rem">NITI Intelligence Portal</div></div><div class="ref num">Ref. ${esc(ref)}<br>${dt.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}</div></div>
   <div class="note-b">
    <div class="subj"><span>Subject</span><h3 class="t">${esc(s.title)}</h3></div>
    <table class="metat"><tbody>
      <tr><th>Source</th><td>${files.map(f=>`${esc(f.name)} <span class="fmeta">(${f.pages} ${f.kind==="xlsx"||f.kind==="csv"?"sheets":"pages"})</span>`).join("<br>")}</td></tr>
      <tr><th>Document type</th><td>${esc(s.doc_type||"—")}</td></tr>
      ${s.doc_date?`<tr><th>Document date</th><td>${esc(s.doc_date)}</td></tr>`:""}
    </tbody></table>
    <div class="meta"><span class="pagefit ${two?"two":""}">${two?"2 pages":"1 page"} · ${w} words · ${Math.max(1,Math.round(w/200))} min read</span>${rv?`<span class="pagefit">Checked against source${rv.corrections?` · ${rv.corrections} correction${rv.corrections>1?"s":""}`:""}</span>`:""}${cov?`<span class="pagefit">${cov} source sections covered</span>`:""}</div>
    ${s.overview?`<div class="sec"><h4>Overview</h4><p class="narr">${esc(s.overview)}</p></div>`:""}
    ${s.sections.map((x,i)=>`<div class="sec"><h4>${i+1}. ${esc(x.heading)}</h4>${x.narrative?`<p class="narr">${esc(x.narrative)}</p>`:""}${x.points.length?`<ul>${x.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul>`:""}</div>`).join("")}
    ${s.key_numbers.length?`<div class="sec"><h4>Key figures</h4><div class="tscroll"><table class="t kf"><thead><tr><th>Figure</th><th>What it measures</th><th>Date / comparison</th></tr></thead><tbody>${s.key_numbers.map(k=>`<tr><td class="num"><b>${esc(k.value)}</b></td><td>${esc(k.label)}</td><td>${esc(k.context||"—")}</td></tr>`).join("")}</tbody></table></div></div>`:""}
    ${s.action_items.length?`<div class="sec"><h4>Action items</h4><div class="tscroll"><table class="t"><thead><tr><th>#</th><th>Action</th><th>Owner</th><th>Timeline</th></tr></thead><tbody>${s.action_items.map((a,i)=>`<tr><td>${i+1}</td><td>${esc(a.action)}</td><td>${esc(a.owner)}</td><td>${esc(a.due)}</td></tr>`).join("")}</tbody></table></div></div>`:""}
   </div></article>`;
  $("#sumActions").hidden=false;
}
function hash(s){let h=0;for(const c of s)h=(h*31+c.charCodeAt(0))|0;return h}
function summaryText(s){
  return ["SUMMARY NOTE","Subject: "+s.title,"Document type: "+(s.doc_type||"—"),...(s.doc_date?["Document date: "+s.doc_date]:[]),"","OVERVIEW",s.overview,"",...s.sections.flatMap((x,i)=>[`${i+1}. ${x.heading.toUpperCase()}`,...(x.narrative?[x.narrative]:[]),...x.points.map(p=>"• "+p),""]),
    s.key_numbers.length?"KEY FIGURES":"",...s.key_numbers.map(k=>`• ${k.value} — ${k.label}${k.context?" ("+k.context+")":""}`),"",
    s.action_items.length?"ACTION ITEMS":"",...s.action_items.map((a,i)=>`${i+1}. ${a.action} | Owner: ${a.owner} | Timeline: ${a.due}`)].join("\n").trim();
}

/* ================= DOWNLOADS ================= */
async function saveFile(filename,blob){
  if(downloads){
    try{await downloads.save({filename,data:blob});toast(m("saved"));return}
    catch(e){if(e&&e.code==="declined")return; if(e&&e.code==="rate_limited"){toast("A save prompt is already open");return} }
  }
  try{const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();a.remove();toast(m("saved"))}
  catch(e){toast("Downloads are not available in this view")}
}
const safeName=s=>String(s).replace(/[\\/:*?"<>|]+/g," ").replace(/\s+/g," ").trim().slice(0,80)||"Summary";
const pdfSafe=s=>String(s??"").replace(/₹\s?/g,"Rs. ").replace(/[‘’]/g,"'").replace(/[“”]/g,'"').replace(/[–—]/g,"-").replace(/…/g,"...").replace(/[→]/g,"->").replace(/[^\x09\x0A\x0D\x20-\x7E -ÿ•]/g,"");

function buildPdfK(k){
  const {summary:s,files,at}=S.result; const {jsPDF}=window.jspdf;
  const doc=new jsPDF({unit:"mm",format:"a4"}); const W=210,H=297,M=18; let y=0;
  const NAVY=[27,37,89],INK=[20,26,51],MUTED=[86,96,124],RULE=[200,208,222],PANEL=[238,242,248];
  const lh=4.35*k;
  const header=first=>{doc.setFillColor(...NAVY);doc.rect(0,0,W,3,"F");doc.setFillColor(255,153,51);doc.rect(0,3,W/3,1,"F");doc.setFillColor(19,136,8);doc.rect(2*W/3,3,W/3,1,"F");
    doc.setFont("helvetica","bold");doc.setFontSize(8);doc.setTextColor(...NAVY);doc.text("NITI INTELLIGENCE PORTAL",M,11);
    doc.setFont("helvetica","normal");doc.setTextColor(...MUTED);doc.text("Summary Note"+(first?"":" (contd.)"),W-M,11,{align:"right"});
    doc.setDrawColor(...RULE);doc.setLineWidth(.3);doc.line(M,13.5,W-M,13.5);y=21};
  const need=h=>{if(y+h>H-16){doc.addPage();header(false)}};
  header(true);
  doc.setFont("helvetica","bold");doc.setFontSize(12.5*k);doc.setTextColor(...NAVY);doc.text("SUMMARY NOTE",W/2,y,{align:"center"});y+=6.5*k;
  // meta block
  const meta=[["Subject",s.title],["Source",files.map(f=>`${f.name} (${f.pages} ${f.kind==="xlsx"||f.kind==="csv"?"sheets":"pages"})`).join("; ")],["Document type",s.doc_type||"-"],...(s.doc_date?[["Document date",s.doc_date]]:[]),["Prepared on",new Date(at).toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"})]];
  doc.setFontSize(9*k);
  meta.forEach(([a,b],i)=>{const vl=doc.splitTextToSize(pdfSafe(b),W-2*M-32);need(vl.length*lh);doc.setFont("helvetica","bold");doc.setTextColor(...MUTED);doc.text(a,M,y);doc.setFont("helvetica",i===0?"bold":"normal");doc.setTextColor(...INK);doc.text(vl,M+32,y);y+=vl.length*lh+.6*k});
  y+=1.5*k;doc.setDrawColor(...NAVY);doc.setLineWidth(.5);doc.line(M,y,W-M,y);y+=6*k;
  const head=t=>{need(10*k+lh*2);doc.setFont("helvetica","bold");doc.setFontSize(10*k);doc.setTextColor(...NAVY);doc.text(pdfSafe(t),M,y);y+=5*k};
  const para=t=>{doc.setFont("helvetica","normal");doc.setFontSize(9.6*k);doc.setTextColor(...INK);const ls=doc.splitTextToSize(pdfSafe(t),W-2*M);ls.forEach((l,i)=>{need(lh);doc.text(l,M,y,i<ls.length-1?{maxWidth:W-2*M,align:"justify"}:{});y+=lh});y+=1.4*k};
  const bullet=t=>{doc.setFont("helvetica","normal");doc.setFontSize(9.4*k);const ls=doc.splitTextToSize(pdfSafe(t),W-2*M-6);need(ls.length*lh);doc.setTextColor(...NAVY);doc.text("-",M+1.5,y);doc.setTextColor(...INK);doc.text(ls,M+6,y);y+=ls.length*lh+.6*k};
  if(s.overview){head("Overview");para(s.overview);y+=1.5*k}
  s.sections.forEach((sec,i)=>{head(`${i+1}. ${sec.heading}`);if(sec.narrative)para(sec.narrative);sec.points.forEach(bullet);y+=2*k});
  const table=(title,cols,cw,rows)=>{head(title);const hx=[];let x=M;cw.forEach(w=>{hx.push(x);x+=w});
    const hh=6.2*k;need(hh+lh*2);doc.setFillColor(...NAVY);doc.rect(M,y-4.2*k,W-2*M,hh,"F");doc.setFont("helvetica","bold");doc.setFontSize(8.4*k);doc.setTextColor(255,255,255);cols.forEach((t,i)=>doc.text(t,hx[i]+1.8,y));y+=hh-2.2*k;
    rows.forEach((r,ri)=>{doc.setFontSize(8.8*k);const cells=r.map((t,j)=>doc.splitTextToSize(pdfSafe(t),cw[j]-3.6));const h=Math.max(...cells.map(c=>c.length))*3.9*k+2.8*k;need(h);
      if(ri%2===1){doc.setFillColor(...PANEL);doc.rect(M,y-1,W-2*M,h,"F")}
      cells.forEach((c,j)=>{doc.setFont("helvetica",j===0&&title==="Key figures"?"bold":"normal");doc.setTextColor(...(j===0&&title==="Key figures"?NAVY:INK));doc.text(c,hx[j]+1.8,y+2.6*k)});
      doc.setDrawColor(...RULE);doc.setLineWidth(.2);doc.line(M,y-1+h,W-M,y-1+h);y+=h});y+=5*k};
  if(s.key_numbers.length)table("Key figures",["Figure","What it measures","Date / comparison"],[34,W-2*M-34-52,52],s.key_numbers.map(x=>[x.value,x.label,x.context||"-"]));
  if(s.action_items.length)table("Action items",["#","Action","Owner","Timeline"],[9,W-2*M-9-40-32,40,32],s.action_items.map((a,i)=>[String(i+1),a.action,a.owner,a.due]));
  const n=doc.getNumberOfPages();
  for(let i=1;i<=n;i++){doc.setPage(i);doc.setDrawColor(...RULE);doc.setLineWidth(.3);doc.line(M,H-12,W-M,H-12);doc.setFont("helvetica","normal");doc.setFontSize(7.2);doc.setTextColor(124,134,162);
    doc.text("Generated by NITI Intelligence Portal. Verify figures against the source documents.",M,H-8);
    doc.text(`Page ${i} of ${n}  |  NITI Intelligence Portal`,W-M,H-8,{align:"right"})}
  return {blob:doc.output("blob"),pages:n};
}
function buildPdf(){const target=S.result&&summaryWords(S.result.summary)>720?2:1;let last;for(const k of [1,.95,.9,.86,.82,.78,.74,.7]){last=buildPdfK(k);if(last.pages<=target)break}return last.blob}
async function buildDocx(){
  const {summary:s,files,at}=S.result; const D=window.docx;
  const {Document,Packer,Paragraph,TextRun,Table,TableRow,TableCell,WidthType,ShadingType,BorderStyle,AlignmentType,Footer,Header,TableLayoutType}=D;const TW=9906;const cw=a=>a.map(x=>Math.round(x/100*TW));
  const NAVY="1B2559",BLUE="2E56A6",MUT="56607C";
  const P=(runs,opts={})=>new Paragraph({children:Array.isArray(runs)?runs:[runs],...opts});
  const R=(t,o={})=>new TextRun({text:t,font:"Arial",size:o.size||19,...o});
  const H=t=>P(R(t.toUpperCase(),{bold:true,color:BLUE,size:19}),{spacing:{before:160,after:60},border:{bottom:{style:BorderStyle.SINGLE,size:6,color:"D6DDEA",space:2}}});
  const kids=[];
  kids.push(P(R("SUMMARY NOTE",{bold:true,color:NAVY,size:26}),{alignment:AlignmentType.CENTER,spacing:{after:160}}));
  const metaRows=[["Subject",s.title],["Source",files.map(f=>`${f.name} (${f.pages} ${f.kind==="xlsx"||f.kind==="csv"?"sheets":"pages"})`).join("; ")],["Document type",s.doc_type||"—"],...(s.doc_date?[["Document date",s.doc_date]]:[]),["Prepared on",new Date(at).toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"})]];
  const noB={top:{style:BorderStyle.NONE,size:0,color:"FFFFFF"},bottom:{style:BorderStyle.NONE,size:0,color:"FFFFFF"},left:{style:BorderStyle.NONE,size:0,color:"FFFFFF"},right:{style:BorderStyle.NONE,size:0,color:"FFFFFF"}};
  kids.push(new Table({width:{size:TW,type:WidthType.DXA},columnWidths:cw([22,78]),layout:TableLayoutType.FIXED,borders:{...noB,insideHorizontal:noB.top,insideVertical:noB.top},
    rows:metaRows.map(([a,b],i)=>new TableRow({children:[new TableCell({borders:noB,width:{size:Math.round(.22*TW),type:WidthType.DXA},children:[P(R(a,{bold:true,color:MUT,size:18}))]}),new TableCell({borders:noB,width:{size:Math.round(.78*TW),type:WidthType.DXA},children:[P(R(b,{bold:i===0,size:18}))]})]}))}));
  kids.push(P(R(""),{border:{bottom:{style:BorderStyle.SINGLE,size:10,color:NAVY,space:4}},spacing:{after:160}}));
  const H2=t=>P(R(t,{bold:true,color:NAVY,size:21}),{spacing:{before:180,after:60},keepNext:true});
  if(s.overview){kids.push(H2("Overview"));kids.push(P(R(s.overview),{alignment:AlignmentType.JUSTIFIED,spacing:{after:80}}))}
  s.sections.forEach((sec,i)=>{kids.push(H2(`${i+1}. ${sec.heading}`));if(sec.narrative)kids.push(P(R(sec.narrative),{alignment:AlignmentType.JUSTIFIED,spacing:{after:60}}));sec.points.forEach(p=>kids.push(P(R(p),{bullet:{level:0},spacing:{after:30}})))});
  const cell=(t,o={})=>new TableCell({children:[P(R(t,{bold:!!o.bold,color:o.color||"141A33",size:o.size||18}))],shading:o.fill?{type:ShadingType.CLEAR,fill:o.fill,color:"auto"}:undefined,width:o.w?{size:Math.round(o.w/100*TW),type:WidthType.DXA}:undefined,margins:{top:40,bottom:40,left:90,right:90}});
  if(s.key_numbers.length){kids.push(H2("Key figures"));
    kids.push(new Table({width:{size:TW,type:WidthType.DXA},columnWidths:cw([20,50,30]),layout:TableLayoutType.FIXED,rows:[new TableRow({tableHeader:true,children:[cell("Figure",{bold:true,color:"FFFFFF",fill:NAVY,w:20}),cell("What it measures",{bold:true,color:"FFFFFF",fill:NAVY,w:50}),cell("Date / comparison",{bold:true,color:"FFFFFF",fill:NAVY,w:30})]}),
      ...s.key_numbers.map((k,i)=>new TableRow({children:[cell(k.value,{bold:true,color:NAVY,fill:i%2?"EAF0F8":undefined,w:20}),cell(k.label,{fill:i%2?"EAF0F8":undefined,w:50}),cell(k.context||"—",{fill:i%2?"EAF0F8":undefined,color:MUT,w:30})]}))]}))}
  if(s.action_items.length){kids.push(H2("Action items"));
    kids.push(new Table({width:{size:TW,type:WidthType.DXA},columnWidths:cw([6,56,20,18]),layout:TableLayoutType.FIXED,rows:[new TableRow({tableHeader:true,children:[cell("#",{bold:true,color:"FFFFFF",fill:NAVY,w:6}),cell("Action",{bold:true,color:"FFFFFF",fill:NAVY,w:56}),cell("Owner",{bold:true,color:"FFFFFF",fill:NAVY,w:20}),cell("Timeline",{bold:true,color:"FFFFFF",fill:NAVY,w:18})]}),
      ...s.action_items.map((a,i)=>new TableRow({children:[cell(String(i+1),{fill:i%2?"EAF0F8":undefined,color:MUT,w:6}),cell(a.action,{fill:i%2?"EAF0F8":undefined,w:56}),cell(a.owner,{fill:i%2?"EAF0F8":undefined,w:20}),cell(a.due,{fill:i%2?"EAF0F8":undefined,w:18})]}))]}))}
  const doc=new Document({creator:"NITI Intelligence Portal",title:s.title,styles:{default:{document:{run:{font:"Arial",size:20}}}},
    sections:[{properties:{page:{size:{width:11906,height:16838},margin:{top:800,bottom:800,left:1000,right:1000}}},
      headers:{default:new Header({children:[P([R("NITI INTELLIGENCE PORTAL",{color:NAVY,bold:true,size:15}),R("\tSummary Note",{color:MUT,size:15})],{tabStops:[{type:"right",position:TW}],border:{bottom:{style:BorderStyle.SINGLE,size:6,color:"C8D0DE",space:4}}})]})},
      footers:{default:new Footer({children:[P(R("Generated by NITI Intelligence Portal. Verify figures against source documents.",{color:"7C86A2",size:14}),{alignment:AlignmentType.RIGHT})]})},
      children:kids}]});
  return Packer.toBlob(doc);
}
$("#dlPdf").onclick=async()=>{try{await saveFile(safeName(S.result.summary.title)+" - Summary.pdf",buildPdf())}catch(e){console.error(e);toast("Could not build the PDF")}};
$("#dlDocx").onclick=async()=>{try{await saveFile(safeName(S.result.summary.title)+" - Summary.docx",await buildDocx())}catch(e){console.error(e);toast("Could not build the Word file")}};
$("#copySum").onclick=async()=>{const t=summaryText(S.result.summary);try{await navigator.clipboard.writeText(t);toast(m("copied"))}catch(e){const r=document.createRange();r.selectNodeContents($("#noteDoc"));const sel=getSelection();sel.removeAllRanges();sel.addRange(r);toast("Text selected, press Ctrl+C")}};
$("#regenSum").onclick=()=>{if(S.isSample&&!readyDocs().length){toast(m("noDocs"));return}generateSummary(true)};
$("#demoBtn").onclick=()=>loadDemo();
$("#genBtn").onclick=()=>generateSummary(false);

async function downloadAll(){
  if(!S.result){toast(m("noDocs"));return}
  const Z=window.JSZip; if(!Z){toast("ZIP export is not available here");return}
  try{toast(LANG==="hi"?"फ़ाइलें तैयार हो रही हैं…":"Preparing files…");const z=new Z();const base=safeName(S.result.summary.title);
    z.file(base+" - Summary.pdf",buildPdf());z.file(base+" - Summary.docx",await buildDocx());
    if(S.deck)z.file(base+" - Presentation.pptx",await buildPptx().write({outputType:"blob"}));
    await saveFile(base+" - NITI Intelligence Portal.zip",await z.generateAsync({type:"blob"}))}
  catch(e){console.error(e);toast("Could not build the ZIP file")}
}
$("#dlZip").onclick=downloadAll;$("#dlZip2").onclick=downloadAll;
/* ================= PRESENTATION ================= */
function targetContentSlides(){
  const docs=readyDocs(); const words=docs.reduce((a,d)=>a+wordCount(d.text),0);
  const n=Math.round(3+(docs.length-1)*2+words/1800);
  return Math.max(3,Math.min(16,n));
}
function excelCharts(){
  const out=[];
  for(const d of readyDocs()) for(const sh of d.sheets||[]){
    if(!sh.series.length||sh.labels.length<2)continue;
    const top=sh.series.slice(0,3); const n=Math.min(sh.labels.length,12);
    let idx=[...Array(sh.labels.length).keys()];
    if(!sh.timeLike&&top.length===1){idx.sort((a,b)=>(top[0].values[b]??-Infinity)-(top[0].values[a]??-Infinity))}
    idx=idx.slice(0,n);
    out.push({source:`${d.name} › ${sh.name}`,kind:sh.timeLike?"line":"bar",labels:idx.map(i=>sh.labels[i].slice(0,28)),series:top.map(s=>({name:s.name,values:idx.map(i=>s.values[i]??0)})),title:`${top.map(s=>s.name).join(", ")} by ${sh.labelCol||"row"}`});
    if(out.length>=3)return out;
  }
  if(!out.length&&S.fig&&S.fig.key===docKey()&&S.fig.datasets)S.fig.datasets.slice(0,2).forEach(d=>out.push({source:d.source||"documents",kind:d.kind,labels:d.labels,series:d.series,title:d.title,takeaway:d.insight}));
  return out;
}
const DECK_SPEC=(n,hasCharts)=>`You are preparing a presentation for NITI Aayog (Government of India) in its standard deck format. Build the slides DIRECTLY FROM THE SOURCE DOCUMENTS below — their sections, data, tables and wording — not from a summary. Cover every major section of the documents in order. Build the CONTENT slides only (cover, contents, annexure and closing slides are added automatically).
Make exactly ${n} content slides${n<=3?"; with so few slides you may combine Recommendations and Next steps into one slide":""}. Order:
1. Key findings (type "findings", 3-6 cards) summarising the whole material.
2. One or more slides per major section of the documents (types "findings", "stats", "bullets", "table"${hasCharts?"":", or \"chart\" when the documents state a series of comparable numbers"}). Reproduce important tables from the documents as "table" slides.
3. Recommendations (type "recommendations", 3-5 items grounded in the documents).
4. Next steps (type "next_steps", 3-8 rows, from actions, owners and deadlines in the documents).
Text must be slide-ready: headings under 8 words, card text 20-40 words, bullets under 25 words. Use only facts from the documents; never invent numbers.
Slide JSON types:
{"type":"findings","title":"...","items":[{"head":"...","text":"..."}]}
{"type":"stats","title":"...","stats":[{"value":"8,149","label":"...","context":"..."}],"note":"one-line takeaway"}
{"type":"bullets","title":"...","intro":"optional one-line lead","bullets":["..."]}
{"type":"table","title":"...","columns":["..."],"rows":[["..."]]}   (max 5 columns, 8 rows)
{"type":"chart","title":"...","chart":{"kind":"bar|line|pie","labels":["..."],"series":[{"name":"...","values":[1,2]}]},"takeaway":"..."}
{"type":"recommendations","title":"Recommendations","items":[{"head":"...","text":"..."}]}
{"type":"next_steps","title":"Next Steps","steps":[{"action":"...","owner":"...","timeline":"..."}]}
Also give an annexure: supporting detail tables taken from the documents (max 2 tables, 10 rows each) and source notes.
Reply with only JSON: {"deck_title":"...","subtitle":"...","slides":[...],"annexure":{"tables":[{"title":"...","columns":["..."],"rows":[["..."]]}],"notes":["..."]}}`;

async function generateDeck(){
  const docs=readyDocs();
  if(!docs.length){toast(m("noDocs"));return}
  if(busy.ppt)return; busy.ppt=true;
  const btn=$("#genPpt"); btn.disabled=true; btn.innerHTML=`<span class="spin"></span> Building…`;
  $("#pptMsg").innerHTML="";
  const setMsg=t=>{$("#deck").innerHTML=`<div class="card empty" style="grid-column:1/-1"><span class="spin" style="width:28px;height:28px;color:var(--brand)"></span><b>${esc(t)}</b><span>Slides are built from the full text of ${docs.length} document(s).</span></div>`};
  setMsg("Reading the source documents…");
  const charts=excelCharts(); const n=Math.max(3,targetContentSlides()-(charts.length?Math.min(charts.length,2):0));
  let deck=null;
  try{
    if(sample){
      let material; const total=totalChars();
      if(total<=52000){material=docs.map(d=>docBlock(d,52000)).join("\n\n")}
      else{
        const chunks=chunkDocs(42000); const parts=[];
        for(let i=0;i<chunks.length;i++){
          setMsg(`Reading part ${i+1} of ${chunks.length} of the source documents…`);
          const r=await sample.json(`From this part of the source documents, extract everything needed to build presentation slides: section names, key findings with figures, tables of comparable numbers (as rows), decisions, risks, and actions with owners and dates. Reply with only JSON: {"sections":[{"name":"...","facts":["..."]}],"tables":[{"title":"...","columns":["..."],"rows":[["..."]]}],"actions":[{"action":"...","owner":"...","due":"..."}]}\n\n${chunks[i]}`);
          parts.push(`Part ${i+1}: ${JSON.stringify(r)}`);
        }
        material=`Source documents: ${docs.map(d=>d.name).join("; ")}\n\nDetailed extraction from the full text, in document order:\n${parts.join("\n\n")}`.slice(0,58000);
      }
      setMsg("Designing the slides…");
      const r=await sample.json(DECK_SPEC(n,charts.length>0)+"\n\n=== SOURCE DOCUMENTS ===\n"+material,{cache:{gcTime:300000}});
      deck=normaliseDeck(r);
    }
  }catch(e){console.warn(e);$("#pptMsg").innerHTML=notice(aiErr(e),"warn")}
  if(!deck){deck=basicDeck(S.result?S.result.summary:basicSummary(docs,isBig()));if(!sample)$("#pptMsg").innerHTML=notice(m("basic"))}
  if(charts.length){const cs=charts.slice(0,2).map(c=>({type:"chart",title:c.title.length>60?"Data overview":c.title,chart:{kind:c.kind,labels:c.labels,series:c.series},takeaway:c.takeaway||`Source: ${c.source}`,real:true}));deck.slides.splice(1,0,...cs)}
  deck.files=docs.map(d=>({name:d.name,kind:d.kind,pages:d.pages}));
  S.deck=deck; busy.ppt=false; btn.disabled=false; btn.innerHTML=`<span>${LANG==="hi"?"फिर से बनाएँ":"Regenerate presentation"}</span>`;
  saveHistory(); renderDeck(); renderStats();
}
function normaliseDeck(r){
  if(!r||!Array.isArray(r.slides))return null;
  const A=v=>Array.isArray(v)?v:[];
  const slides=r.slides.map(s=>{const t=String(s.type||"bullets");const o={type:t,title:String(s.title||"")};
    if(t==="findings"||t==="recommendations")o.items=A(s.items).map(i=>({head:String(i.head||""),text:String(i.text||"")})).slice(0,6);
    else if(t==="stats"){o.stats=A(s.stats).map(i=>({value:String(i.value??""),label:String(i.label??""),context:String(i.context??"")})).slice(0,6);o.note=String(s.note||"")}
    else if(t==="table"){o.columns=A(s.columns).map(String).slice(0,5);o.rows=A(s.rows).map(r=>A(r).map(String).slice(0,5)).slice(0,8)}
    else if(t==="chart"){const c=s.chart||{};o.chart={kind:["bar","line","pie"].includes(c.kind)?c.kind:"bar",labels:A(c.labels).map(String).slice(0,12),series:A(c.series).map(x=>({name:String(x.name||""),values:A(x.values).map(v=>toNum(v)??0).slice(0,12)})).slice(0,3)};o.takeaway=String(s.takeaway||"");if(!o.chart.labels.length||!o.chart.series.length)return null}
    else if(t==="next_steps")o.steps=A(s.steps).map(i=>({action:String(i.action||""),owner:String(i.owner||"—"),timeline:String(i.timeline||"—")})).slice(0,8);
    else{o.type="bullets";o.intro=String(s.intro||"");o.bullets=A(s.bullets).map(String).slice(0,8)}
    return o}).filter(Boolean);
  const an=r.annexure||{};
  return {deck_title:String(r.deck_title||(S.result?S.result.summary.title:"Presentation")),subtitle:String(r.subtitle||""),slides,annexure:{tables:A(an.tables).slice(0,2).map(t=>({title:String(t.title||""),columns:A(t.columns).map(String).slice(0,5),rows:A(t.rows).map(r=>A(r).map(String).slice(0,5)).slice(0,10)})),notes:A(an.notes).map(String).slice(0,6)}};
}
function basicDeck(s){
  const slides=[];
  slides.push({type:"findings",title:"Key Findings",items:s.sections.slice(0,6).map(x=>({head:x.heading,text:x.points[0]||""}))});
  if(s.key_numbers.length)slides.push({type:"stats",title:"Key Figures",stats:s.key_numbers.slice(0,6),note:""});
  slides.push({type:"recommendations",title:"Recommendations",items:s.action_items.slice(0,4).map(a=>({head:"Prioritise: "+a.action.split(/\s+/).slice(0,5).join(" ").replace(/[,.;:]$/,""),text:a.action}))});
  slides.push({type:"next_steps",title:"Next Steps",steps:s.action_items.slice(0,7).map(a=>({action:a.action,owner:a.owner,timeline:a.due}))});
  return {deck_title:s.title,subtitle:s.doc_type,slides:slides.filter(x=>(x.items||x.stats||x.steps||[]).length),annexure:{tables:[],notes:[]}};
}
function fullDeckList(){
  const d=S.deck; if(!d)return [];
  const list=[{type:"cover"},{type:"toc"},...d.slides];
  list.push({type:"annexure"});
  list.push({type:"thanks"}); return list;
}
function deckFiles(){return (S.deck&&S.deck.files)||(S.result&&S.result.files)||[]}
function tocTitles(){return [...S.deck.slides.map(s=>s.title),"Annexure"]}

/* HTML preview */
const coverSvg=`<svg viewBox="0 0 1333 750" preserveAspectRatio="none" aria-hidden="true"><polygon points="560,750 1333,300 1333,750" fill="#F2B233"/><polygon points="700,750 1333,470 1333,750" fill="#D9892B" opacity=".55"/><polygon points="0,0 780,0 430,750 0,750" fill="#1F255E"/><polygon points="0,120 620,750 0,750" fill="#2E4A9A" opacity=".85"/><polygon points="0,0 360,0 0,360" fill="#16204F"/></svg>`;
const thanksSvg=`<svg viewBox="0 0 1333 750" preserveAspectRatio="none" aria-hidden="true"><polygon points="820,0 1333,0 1333,750 560,750" fill="#2E4A9A" opacity=".55"/><polygon points="1100,750 1333,520 1333,750" fill="#F2B233"/></svg>`;
function slideHtml(s,i,total){
  const foot=`<div class="s-foot"><span>NITI Intelligence Portal</span><span>${i+1}</span></div>`;
  const hdr=t=>`<div class="s-hdr">${esc(t)}</div>`;
  if(s.type==="cover")return `<div class="slide cover">${coverSvg}<div class="cd">${new Date().toLocaleDateString("en-IN",{month:"long",year:"numeric"})}</div><div class="ct"><h6>${esc(S.deck.deck_title)}</h6>${S.deck.subtitle?`<p>${esc(S.deck.subtitle)}</p>`:""}</div></div>`;
  if(s.type==="thanks")return `<div class="slide thanks">${thanksSvg}<h6>Thank You</h6></div>`;
  if(s.type==="toc")return `<div class="slide">${hdr("Contents")}<div class="s-body"><div class="s-toc">${tocTitles().map((t,k)=>`<div><i>${k+1}</i><span>${esc(t)}</span></div>`).join("")}</div></div>${foot}</div>`;
  let body="";
  if(s.type==="findings"||s.type==="recommendations"){
    if(s.type==="recommendations")body=`<div class="s-grid" style="grid-template-rows:repeat(${s.items.length},1fr)">${s.items.map((x,k)=>`<div class="s-rec"><i>${k+1}</i><div><b>${esc(x.head)}</b><br><span>${esc(x.text)}</span></div></div>`).join("")}</div>`;
    else{const n=s.items.length,c=n<=3?n:n===4?2:3;body=`<div class="s-grid" style="grid-template-columns:repeat(${c},1fr)">${s.items.map(x=>`<div class="s-card"><h5>${esc(x.head)}</h5><p>${esc(x.text)}</p></div>`).join("")}</div>`}
  }else if(s.type==="stats"){const n=s.stats.length,c=n<=3?n:n===4?2:3;body=`<div class="s-grid" style="grid-template-columns:repeat(${c},1fr)">${s.stats.map(x=>`<div class="s-stat"><b>${esc(x.value)}</b><span>${esc(x.label)}</span>${x.context?`<small>${esc(x.context)}</small>`:""}</div>`).join("")}</div>${s.note?`<div class="s-intro">${esc(s.note)}</div>`:""}`}
  else if(s.type==="table"){body=`<table class="s-table"><tr>${s.columns.map(c=>`<th>${esc(c)}</th>`).join("")}</tr>${s.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</table>`}
  else if(s.type==="chart"){const v=s.chart.series[0].values,mx=Math.max(...v.map(Math.abs),1);
    body=`<div class="s-chart"><div style="display:flex;flex-direction:column;min-height:0"><div class="bars" style="flex:1;padding-top:2.4cqw">${v.map(x=>`<div style="height:${Math.max(2,Math.abs(x)/mx*100)}%"><span>${fmtNum(x)}</span></div>`).join("")}</div><div class="lbls">${s.chart.labels.map(l=>`<span>${esc(l)}</span>`).join("")}</div></div><div class="s-take"><b>${esc(s.chart.series.map(x=>x.name).join(" · "))}</b><span>${esc(s.takeaway||"")}</span></div></div>`}
  else if(s.type==="next_steps"){body=`<table class="s-table"><tr><th style="width:6%">#</th><th>Action</th><th style="width:22%">Owner</th><th style="width:18%">Timeline</th></tr>${s.steps.map((r,k)=>`<tr><td>${k+1}</td><td>${esc(r.action)}</td><td>${esc(r.owner)}</td><td>${esc(r.timeline)}</td></tr>`).join("")}</table>`}
  else if(s.type==="annexure"){const a=S.deck.annexure;const t=a.tables[0];
    body=t?`<div style="font-weight:700;color:#1F255E;font-size:1.4cqw">${esc(t.title)}</div><table class="s-table"><tr>${t.columns.map(c=>`<th>${esc(c)}</th>`).join("")}</tr>${t.rows.slice(0,7).map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</table>`
      :`<div class="s-panel"><ul><li><b>Source documents:</b> ${esc(deckFiles().map(f=>f.name).join("; "))}</li>${a.notes.map(n=>`<li>${esc(n)}</li>`).join("")}</ul></div>`;
    return `<div class="slide">${hdr("Annexure")}<div class="s-body">${body}</div>${foot}</div>`}
  else{body=`${s.intro?`<div class="s-intro">${esc(s.intro)}</div>`:""}<div class="s-panel"><ul>${(s.bullets||[]).map(b=>`<li>${esc(b)}</li>`).join("")}</ul></div>`}
  return `<div class="slide">${hdr(s.title)}<div class="s-body">${body}</div>${foot}</div>`;
}
function fmtNum(x){if(x===null||x===undefined)return"";const a=Math.abs(x);if(a>=1e7)return(x/1e7).toFixed(1)+" Cr";if(a>=1e5)return(x/1e5).toFixed(1)+" L";if(a>=1000)return Math.round(x).toLocaleString("en-IN");return Number.isInteger(x)?String(x):x.toFixed(a<1?2:1)}
function renderDeck(){
  const box=$("#deck"),dl=$("#dlPpt"),gb=$("#genPpt");
  if(!S.deck&&!readyDocs().length){box.innerHTML=`<div style="grid-column:1/-1">${emptyBox(m("pptEmpty"),m("pptEmptyP"),true)}</div>`;dl.hidden=true;$("#dlZip2").hidden=true;gb.disabled=true;return}
  gb.disabled=busy.ppt;
  if(!S.deck){if(!busy.ppt)box.innerHTML=`<div style="grid-column:1/-1">${emptyBox("Ready to build",`About ${targetContentSlides()+4} slides will be built from the full text of ${readyDocs().length} document(s). Choose Generate presentation.`)}</div>`;dl.hidden=true;$("#dlZip2").hidden=true;return}
  const list=fullDeckList();
  const lbl={cover:"Cover",toc:"Contents",thanks:"Closing",annexure:"Annexure",findings:"Key findings",stats:"Key figures",bullets:"Content",table:"Table",chart:"Chart",recommendations:"Recommendations",next_steps:"Next steps"};
  box.innerHTML=list.map((s,i)=>`<div class="sw" title="Click to enlarge">${slideHtml(s,i,list.length)}<div class="cap2"><span>${i+1}. ${lbl[s.type]||""}</span>${s.real?"<span>From workbook</span>":""}</div></div>`).join("");
  dl.hidden=false; $("#dlZip2").hidden=!S.result; gb.innerHTML=`<span>${LANG==="hi"?"फिर से बनाएँ":"Regenerate presentation"}</span>`;
  if(S.isSample&&!$("#pptMsg").innerHTML)$("#pptMsg").innerHTML=notice("Example deck built from the NFS PMU update. Upload your own documents from Home to build a new one.");
}
$("#genPpt").onclick=()=>generateDeck();
$("#deck").addEventListener("click",e=>{const w=e.target.closest(".sw");if(!w)return;const on=!w.classList.contains("big");document.querySelectorAll(".sw.big").forEach(x=>x.classList.remove("big"));if(on){w.classList.add("big");w.scrollIntoView({block:"nearest"})}});

/* PPTX export */
function buildPptx(){
  const pptx=new PptxGenJS(); pptx.layout="LAYOUT_WIDE"; pptx.author="NITI Intelligence Portal"; pptx.title=S.deck.deck_title;
  const NAVY="1F255E",PANEL="DCE6F1",BLUE2="1D6194",GOLD="F2B233",W=13.333;
  const serif="Cambria",sans="Arial";
  let num=0;
  const base=(title)=>{const s=pptx.addSlide();num++;s.background={color:"FFFFFF"};
    s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:W,h:0.92,fill:{color:NAVY},line:{color:NAVY}});
    s.addText(title,{x:0.4,y:0.05,w:W-0.8,h:0.82,fontFace:serif,fontSize:title.length>55?20:24,bold:true,color:"FFFFFF",align:"center",valign:"middle",fit:"shrink"});
    s.addText("NITI Intelligence Portal",{x:0.4,y:7.08,w:5,h:0.3,fontFace:sans,fontSize:9,color:"8A93AB"});
    s.addText(String(num),{x:W-1.4,y:7.08,w:1,h:0.3,fontFace:sans,fontSize:9,color:"8A93AB",align:"right"});
    return s};
  const fs=(t,base,len)=>t.length>len*1.6?base-3:t.length>len?base-1.5:base;
  // cover
  {const s=pptx.addSlide();num++;s.background={color:"FFFFFF"};
    const poly=(pts,color,tr)=>s.addShape(pptx.ShapeType.custGeom,{x:0,y:0,w:W,h:7.5,fill:{color,transparency:tr||0},line:{color,width:0,transparency:100},points:[...pts.map((p,i)=>({x:p[0],y:p[1],...(i===0?{moveTo:true}:{})})),{close:true}]});
    poly([[5.6,7.5],[W,3.0],[W,7.5]],GOLD);poly([[7.0,7.5],[W,4.7],[W,7.5]],"D9892B",45);
    poly([[0,0],[7.8,0],[4.3,7.5],[0,7.5]],NAVY);poly([[0,1.2],[6.2,7.5],[0,7.5]],"2E4A9A",15);poly([[0,0],[3.6,0],[0,3.6]],"16204F");
    s.addText(S.deck.deck_title,{x:0.7,y:2.3,w:5.6,h:1.9,fontFace:sans,fontSize:S.deck.deck_title.length>50?26:32,bold:true,color:"FFFFFF",valign:"bottom",fit:"shrink"});
    if(S.deck.subtitle)s.addText(S.deck.subtitle,{x:0.7,y:4.3,w:5.0,h:1.0,fontFace:sans,fontSize:16,color:"F5D68E",valign:"top"});
    s.addText(new Date().toLocaleDateString("en-IN",{month:"long",year:"numeric"}),{x:W-4.4,y:0.5,w:3.9,h:0.4,fontFace:sans,fontSize:14,bold:true,color:NAVY,align:"right"})}
  // TOC
  {const s=base("Contents");const t=tocTitles();const n=t.length;const h=Math.min(0.62,5.6/n-0.1);
    t.forEach((x,k)=>{const y=1.3+k*(h+0.1);s.addShape(pptx.ShapeType.rect,{x:1.6,y,w:0.75,h,fill:{color:NAVY},line:{color:NAVY}});
      s.addText(String(k+1),{x:1.6,y,w:0.75,h,fontFace:serif,fontSize:16,bold:true,color:"FFFFFF",align:"center",valign:"middle"});
      s.addShape(pptx.ShapeType.rect,{x:2.35,y,w:9.3,h,fill:{color:PANEL},line:{color:PANEL}});
      s.addText(x,{x:2.6,y,w:9.0,h,fontFace:sans,fontSize:16,bold:true,color:NAVY,valign:"middle"})})}
  for(const sl of S.deck.slides){
    const s=base(sl.title||"");
    const X=0.5,Y=1.25,CW=W-1.0,CH=5.65;
    if(sl.type==="findings"){const n=sl.items.length,c=n<=3?n:n===4?2:3,r=Math.ceil(n/c),g=0.3,w=(CW-(c-1)*g)/c,h=(CH-(r-1)*g)/r;
      sl.items.forEach((it,k)=>{const x=X+(k%c)*(w+g),y=Y+Math.floor(k/c)*(h+g);
        s.addShape(pptx.ShapeType.rect,{x,y,w,h:0.6,fill:{color:NAVY},line:{color:NAVY}});
        s.addText(it.head,{x:x+0.1,y,w:w-0.2,h:0.6,fontFace:sans,fontSize:fs(it.head,16,30),bold:true,color:"FFFFFF",valign:"middle",fit:"shrink"});
        s.addShape(pptx.ShapeType.rect,{x,y:y+0.6,w,h:h-0.6,fill:{color:PANEL},line:{color:PANEL}});
        s.addText(it.text,{x:x+0.15,y:y+0.7,w:w-0.3,h:h-0.8,fontFace:sans,fontSize:fs(it.text,18,110)-(r>1?1:0),color:"1A1A1A",valign:"top",fit:"shrink"})})}
    else if(sl.type==="recommendations"){const n=sl.items.length,g=0.18,h=(CH-(n-1)*g)/n;
      sl.items.forEach((it,k)=>{const y=Y+k*(h+g);s.addShape(pptx.ShapeType.rect,{x:X,y,w:CW,h,fill:{color:PANEL},line:{color:PANEL}});
        const d=Math.min(0.72,h-0.2);s.addShape(pptx.ShapeType.ellipse,{x:X+0.25,y:y+(h-d)/2,w:d,h:d,fill:{color:NAVY},line:{color:NAVY}});
        s.addText(String(k+1),{x:X+0.25,y:y+(h-d)/2,w:d,h:d,fontFace:serif,fontSize:18,bold:true,color:"FFFFFF",align:"center",valign:"middle"});
        s.addText([{text:it.head,options:{bold:true,color:BLUE2,fontSize:17,breakLine:true}},{text:it.text,options:{color:"1A1A1A",fontSize:fs(it.text,15,120)}}],{x:X+1.25,y:y+0.05,w:CW-1.45,h:h-0.1,fontFace:sans,valign:"middle",fit:"shrink"})})}
    else if(sl.type==="stats"){const n=sl.stats.length,c=n<=3?n:n===4?2:3,r=Math.ceil(n/c),g=0.3,noteH=sl.note?0.8:0,w=(CW-(c-1)*g)/c,h=(CH-noteH-(r-1)*g-(noteH?0.2:0))/r;
      sl.stats.forEach((it,k)=>{const x=X+(k%c)*(w+g),y=Y+Math.floor(k/c)*(h+g);
        s.addShape(pptx.ShapeType.roundRect,{x,y,w,h,fill:{color:NAVY},line:{color:NAVY},rectRadius:0.12});
        s.addText([{text:it.value,options:{fontFace:serif,fontSize:it.value.length>10?26:34,bold:true,color:"FFFFFF",breakLine:true}},{text:it.label,options:{fontSize:14,bold:true,color:"FFFFFF",breakLine:!!it.context}},...(it.context?[{text:it.context,options:{fontSize:11.5,color:"C9D2EC"}}]:[])],{x:x+0.25,y:y+0.1,w:w-0.5,h:h-0.2,fontFace:sans,valign:"middle",fit:"shrink"})});
      if(sl.note){s.addShape(pptx.ShapeType.rect,{x:X,y:Y+CH-noteH,w:CW,h:noteH,fill:{color:"FFFFFF"},line:{color:NAVY,width:1.25}});s.addText(sl.note,{x:X+0.2,y:Y+CH-noteH,w:CW-0.4,h:noteH,fontFace:sans,fontSize:15,bold:true,color:"1A1A1A",valign:"middle",fit:"shrink"})}}
    else if(sl.type==="table"||sl.type==="next_steps"){
      const cols=sl.type==="table"?sl.columns:["#","Action","Owner","Timeline"];
      const rows=sl.type==="table"?sl.rows:sl.steps.map((r,k)=>[String(k+1),r.action,r.owner,r.timeline]);
      const colW=sl.type==="table"?null:[0.6,CW-0.6-2.8-2.2,2.8,2.2];
      const fz=rows.length>6?13:15;
      s.addTable([cols.map(c=>({text:c,options:{bold:true,color:"FFFFFF",fill:{color:NAVY},fontSize:fz+0.5}})),...rows.map((r,k)=>cols.map((_,j)=>({text:r[j]??"",options:{fill:{color:k%2?PANEL:"FFFFFF"},fontSize:fz,color:"1A1A1A"}})))],
        {x:X,y:Y+0.05,w:CW,colW:colW||undefined,fontFace:sans,border:{type:"solid",pt:0.75,color:"B7C3D6"},valign:"middle",margin:0.08,autoPage:false})}
    else if(sl.type==="chart"){const c=sl.chart;const type=c.kind==="line"?pptx.ChartType.line:c.kind==="pie"?pptx.ChartType.pie:pptx.ChartType.bar;
      const data=c.series.map(se=>({name:se.name,labels:c.labels,values:se.values}));
      const opts={x:X,y:Y,w:8.4,h:CH,chartColors:["1F255E","2E56A6","F2B233","1C7C8C","8A93AB"],showLegend:c.series.length>1||c.kind==="pie",legendPos:"b",legendFontSize:11,catAxisLabelFontSize:10.5,valAxisLabelFontSize:10.5,catAxisLabelFontFace:sans,valAxisLabelFontFace:sans,dataLabelFontSize:10,showValue:c.labels.length<=10&&c.series.length<=2,dataLabelPosition:c.kind==="pie"?"bestFit":"outEnd",valGridLine:{color:"E3E8F0",size:0.5},barGapWidthPct:60,dataLabelFormatCode:"#,##0.##",valAxisLabelFormatCode:"#,##0.##",dataLabelColor:"1F255E",lineSize:2.5,lineDataSymbolSize:7};
      if(c.kind==="pie"){opts.showPercent=true;opts.showValue=false}
      s.addChart(type,data,opts);
      s.addShape(pptx.ShapeType.roundRect,{x:9.2,y:Y,w:W-9.7,h:CH,fill:{color:NAVY},line:{color:NAVY},rectRadius:0.1});
      s.addText([{text:"KEY TAKEAWAY",options:{fontSize:12,bold:true,color:"F5D68E",breakLine:true,charSpacing:2}},{text:" ",options:{fontSize:8,breakLine:true}},{text:sl.takeaway||c.series.map(x=>x.name).join(", "),options:{fontSize:16,color:"FFFFFF"}}],{x:9.45,y:Y+0.2,w:W-10.2,h:CH-0.4,fontFace:sans,valign:"top",fit:"shrink"})}
    else{let y=Y;if(sl.intro){s.addShape(pptx.ShapeType.rect,{x:X,y,w:CW,h:0.75,fill:{color:"FFFFFF"},line:{color:NAVY,width:1.25}});s.addText(sl.intro,{x:X+0.2,y,w:CW-0.4,h:0.75,fontFace:sans,fontSize:16,bold:true,color:"1A1A1A",valign:"middle",fit:"shrink"});y+=0.95}
      s.addShape(pptx.ShapeType.rect,{x:X,y,w:CW,h:Y+CH-y,fill:{color:PANEL},line:{color:PANEL}});
      s.addText((sl.bullets||[]).map(b=>({text:b,options:{bullet:{indent:18},breakLine:true,paraSpaceAfter:8}})),{x:X+0.3,y:y+0.15,w:CW-0.6,h:Y+CH-y-0.3,fontFace:sans,fontSize:(sl.bullets||[]).length>6?15:17,color:"1A1A1A",valign:"top",fit:"shrink"})}
  }
  // annexure
  const an=S.deck.annexure; const tabs=an.tables.length?an.tables:[];
  tabs.forEach((t,k)=>{const s=base(tabs.length>1?`Annexure ${k+1}: ${t.title}`:`Annexure: ${t.title}`);
    s.addTable([t.columns.map(c=>({text:c,options:{bold:true,color:"FFFFFF",fill:{color:NAVY}}})),...t.rows.map((r,i)=>t.columns.map((_,j)=>({text:r[j]??"",options:{fill:{color:i%2?PANEL:"FFFFFF"}}})))],{x:0.5,y:1.25,w:W-1,fontFace:sans,fontSize:t.rows.length>7?12.5:14,color:"1A1A1A",border:{type:"solid",pt:0.75,color:"B7C3D6"},margin:0.07,valign:"middle",autoPage:false})});
  {const s=base(tabs.length?"Annexure: Sources":"Annexure");
    const items=[{text:"Source documents",options:{bold:true,color:BLUE2,breakLine:true}},...deckFiles().map(f=>({text:`${f.name} (${f.kind.toUpperCase()}, ${f.pages} ${f.kind==="xlsx"||f.kind==="csv"?"sheets":"pages"})`,options:{bullet:true,breakLine:true}})),
      ...(an.notes.length?[{text:" ",options:{breakLine:true}},{text:"Notes",options:{bold:true,color:BLUE2,breakLine:true}},...an.notes.map(n=>({text:n,options:{bullet:true,breakLine:true}}))]:[]),
      {text:" ",options:{breakLine:true}},{text:"Prepared with NITI Intelligence Portal. Figures should be verified against the source documents.",options:{italic:true,color:"56607C",fontSize:12}}];
    s.addShape(pptx.ShapeType.rect,{x:0.5,y:1.25,w:W-1,h:5.65,fill:{color:PANEL},line:{color:PANEL}});
    s.addText(items,{x:0.8,y:1.4,w:W-1.6,h:5.35,fontFace:sans,fontSize:15,color:"1A1A1A",valign:"top",paraSpaceAfter:6,fit:"shrink"})}
  // thanks
  {const s=pptx.addSlide();s.background={color:NAVY};
    s.addShape(pptx.ShapeType.custGeom,{x:0,y:0,w:W,h:7.5,fill:{color:"2E4A9A",transparency:45},line:{color:NAVY,transparency:100},points:[{x:8.2,y:0,moveTo:true},{x:W,y:0},{x:W,y:7.5},{x:5.6,y:7.5},{close:true}]});
    s.addShape(pptx.ShapeType.custGeom,{x:0,y:0,w:W,h:7.5,fill:{color:GOLD},line:{color:GOLD,transparency:100},points:[{x:11,y:7.5,moveTo:true},{x:W,y:5.2},{x:W,y:7.5},{close:true}]});
    s.addText("Thank You",{x:0.9,y:2.4,w:8,h:2.4,fontFace:serif,fontSize:72,bold:true,italic:true,color:"FFFFFF",valign:"middle"})}
  return pptx;
}
$("#dlPpt").onclick=async()=>{try{const p=buildPptx();const blob=await p.write({outputType:"blob"});await saveFile(safeName(S.deck.deck_title)+".pptx",blob)}catch(e){console.error(e);toast("Could not build the presentation")}};

/* ================= DATA INSIGHTS ================= */
let charts=[];
function allSheets(){return readyDocs().flatMap(d=>(d.sheets||[]).map(s=>({doc:d.name,...s})))}
function chartPalette(){const dark=isDark();return dark?["#2DD4BF","#FBBF24","#60A5FA","#CBD5E1","#F472B6"]:["#0F766E","#D97706","#2563EB","#475467","#BE185D"]}
function drawChart(id,spec){
  if(!window.Chart)return;
  const cs=getComputedStyle(document.documentElement);const ink=cs.getPropertyValue("--muted").trim(),grid=cs.getPropertyValue("--line").trim();
  const pal=chartPalette(); const pie=spec.kind==="pie";
  const horiz=!pie&&spec.kind!=="line"&&spec.series.length===1&&spec.labels.length>6;
  const el=document.getElementById(id); if(!el)return;
  charts.push(new Chart(el,{type:pie?"doughnut":spec.kind==="line"?"line":"bar",
    data:{labels:spec.labels.map(l=>String(l).slice(0,28)),datasets:spec.series.map((se,j)=>({label:se.name,data:se.values,backgroundColor:pie?spec.labels.map((_,k)=>pal[k%pal.length]):pal[(spec.color??j)%pal.length],borderColor:pie?cs.getPropertyValue("--surface").trim():pal[(spec.color??j)%pal.length],borderRadius:pie?0:4,tension:.3,pointRadius:2.5,fill:false}))},
    options:{responsive:true,maintainAspectRatio:false,indexAxis:horiz?"y":"x",
      plugins:{legend:{display:pie||spec.series.length>1,position:"bottom",labels:{color:ink,boxWidth:12}},tooltip:{callbacks:{label:ctx=>`${ctx.dataset.label||ctx.label}: ${fmtNum(pie?ctx.parsed:ctx.parsed[horiz?"x":"y"])}${spec.unit?" "+spec.unit:""}`}}},
      scales:pie?{}:{x:{ticks:{color:ink},grid:{color:grid}},y:{ticks:{color:ink},grid:{color:grid},beginAtZero:true}}}}));
}
function renderData(){
  charts.forEach(c=>c.destroy());charts=[];
  const sheets=allSheets(), out=$("#dataOut"), pick=$("#sheetPick"), sel=$("#sheetSel");
  const textDocs=readyDocs().filter(d=>!(d.sheets&&d.sheets.length));
  if(!readyDocs().length){out.innerHTML=emptyBox(m("dataEmpty"),m("dataEmptyP"),true);pick.hidden=true;return}
  let html="",specs=[];
  // ---- workbooks
  if(sheets.length){
    pick.hidden=sheets.length<2;
    sel.innerHTML=sheets.map((s,i)=>`<option value="${i}">${esc(s.doc)} › ${esc(s.name)}</option>`).join("");
    if(S.sheetIdx>=sheets.length)S.sheetIdx=0; sel.value=S.sheetIdx;
    const sh=sheets[S.sheetIdx];
    html+=`<div class="eyeline"><h3>Workbook: ${esc(sh.doc)} › ${esc(sh.name)}</h3><span class="fmeta">${sh.rows.length} rows · ${sh.series.length} numeric columns</span></div>`;
    if(!sh.series.length){html+=notice(`No numeric columns were found in “${sh.name}”. The rows are shown below and are included in the summary.`)}
    else{
      html+=`<div class="kpis">${sh.kpis.slice(0,8).map(k=>{const v=k.useAvg?k.avg:k.sum;return `<div class="card kpi"><div class="l">${esc(k.name)} · ${k.useAvg?"average":"total"}</div><div class="v num">${fmtNum(v)}</div><div class="s">High: ${esc(k.max.l)} (${fmtNum(k.max.x)}) · Low: ${esc(k.min.l)} (${fmtNum(k.min.x)})</div></div>`}).join("")}</div>`;
      const pickIdx=se=>{let idx=[...Array(sh.labels.length).keys()].filter(k=>se.values[k]!==null);if(!sh.timeLike)idx.sort((a,b)=>se.values[b]-se.values[a]);return idx.slice(0,sh.timeLike?40:12)};
      if(sh.series.length>1){const idx=[...Array(sh.labels.length).keys()].slice(0,12);specs.push({title:`Comparison: ${sh.series.slice(0,3).map(s=>s.name).join(" vs ")}`,sub:`First ${idx.length} rows by ${sh.labelCol||"row"}`,kind:sh.timeLike?"line":"bar",labels:idx.map(k=>sh.labels[k]),series:sh.series.slice(0,3).map(se=>({name:se.name,values:idx.map(k=>se.values[k])}))})}
      sh.series.slice(0,4).forEach((se,i)=>{const idx=pickIdx(se);specs.push({title:se.name,sub:`${sh.timeLike?"Trend":"Highest values"} by ${sh.labelCol||"row"}`,kind:sh.timeLike?"line":"bar",labels:idx.map(k=>sh.labels[k]),series:[{name:se.name,values:idx.map(k=>se.values[k])}],color:i})});
      html+=`<div class="charts">${specs.map((c,i)=>`<div class="card chartcard"><h4>${esc(c.title)}</h4><div class="sub">${esc(c.sub)}</div><div class="chartbox"><canvas id="ch${i}" role="img" aria-label="${esc(c.title)}"></canvas></div></div>`).join("")}</div>`;
    }
    const cols=sh.header.slice(0,14);
    html+=`<div class="eyeline"><h3>Data preview</h3><span class="fmeta">First ${Math.min(50,sh.rows.length)} of ${sh.rows.length} rows</span></div><div class="dtable"><table><thead><tr>${cols.map(c=>`<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${sh.rows.slice(0,50).map(r=>`<tr>${cols.map((_,j)=>{const v=r[j];const n=toNum(v);return `<td>${esc(n!==null&&typeof v==="number"?fmtNum(n):v??"")}</td>`}).join("")}</tr>`).join("")}</tbody></table></div>`;
  }else pick.hidden=true;
  // ---- figures from documents (AI)
  if(textDocs.length){
    const F=S.fig;
    html+=`<div class="eyeline"><h3>Figures found in ${textDocs.length===1?esc(textDocs[0].name):textDocs.length+" documents"}</h3>${sample&&F&&!F.busy?`<button class="btn btn-ghost btn-sm" id="figRefresh">Extract again</button>`:""}</div>`;
    if(!sample){html+=notice("Charts from PDF and Word files need AI, which is not available in this view. Upload an Excel or CSV file to chart data directly.")}
    else if(!F||F.busy||F.key!==docKey()){html+=`<div class="card empty"><span class="spin" style="width:26px;height:26px;color:var(--brand)"></span><b>Finding tables and figures in the documents…</b><span>This takes about half a minute.</span></div>`}
    else if(F.error){html+=notice(F.error,"warn")}
    else{
      if(F.kpis.length)html+=`<div class="kpis">${F.kpis.map(k=>`<div class="card kpi"><div class="l">${esc(k.label)}</div><div class="v num">${esc(k.value)}</div><div class="s">${esc(k.context)}</div></div>`).join("")}</div>`;
      const base=specs.length;
      F.datasets.forEach(d=>specs.push({...d,sub:d.unit?`Unit: ${d.unit}`:""}));
      if(F.datasets.length)html+=`<div class="charts">${F.datasets.map((c,i)=>`<div class="card chartcard"><h4>${esc(c.title)}</h4><div class="sub">${esc(c.unit?`Unit: ${c.unit}`:"")}</div><div class="chartbox"><canvas id="ch${base+i}" role="img" aria-label="${esc(c.title)}"></canvas></div>${c.insight?`<div class="ins">${esc(c.insight)}</div>`:""}${c.source?`<div class="src">Source: ${esc(c.source)}</div>`:""}</div>`).join("")}</div>`;
      if(!F.kpis.length&&!F.datasets.length)html+=notice("No chartable figures were found in these documents.");
    }
  }
  out.innerHTML=html;
  specs.forEach((c,i)=>drawChart("ch"+i,c));
  const fr=$("#figRefresh"); if(fr)fr.onclick=()=>extractFigures(true);
  if(sample&&textDocs.length&&(!S.fig||(S.fig.key!==docKey()&&!S.fig.busy)))extractFigures(false);
}
function docKey(){return readyDocs().map(d=>d.name+":"+d.text.length).join("|")}
async function extractFigures(force){
  const docs=readyDocs().filter(d=>!(d.sheets&&d.sheets.length)); if(!docs.length||!sample)return;
  const key=docKey(); if(S.fig&&S.fig.busy)return;
  S.fig={key,busy:true,kpis:[],datasets:[]}; if(currentTab()==="data")renderData();
  const per=Math.floor(52000/docs.length);
  try{
    const r=await sample.json(`From these official documents, extract data that can be shown as KPI tiles and charts. Use ONLY numbers that appear in the documents; never estimate.
Reply with only JSON:
{"kpis":[{"value":"727 / 805","label":"what it measures","context":"date or comparison"}],"datasets":[{"title":"short chart title","unit":"%, count, ₹ crore …","kind":"bar|line|pie","labels":["..."],"series":[{"name":"...","values":[1,2]}],"insight":"one sentence on what the chart shows","source":"document and section"}]}
Give up to 8 kpis and up to 6 datasets. A dataset needs at least 2 labels and a number for every label in every series. Use "line" only for time series and "pie" only for parts of a whole.

${docs.map(d=>docBlock(d,per)).join("\n\n")}`,{cache:force?{gcTime:600000,refresh:true}:{gcTime:600000}});
    const A_=v=>Array.isArray(v)?v:[];
    S.fig={key,busy:false,
      kpis:A_(r&&r.kpis).map(k=>({value:String(k.value??""),label:String(k.label??""),context:String(k.context??"")})).filter(k=>k.value).slice(0,8),
      datasets:A_(r&&r.datasets).map(d=>{const labels=A_(d.labels).map(String).slice(0,15);const series=A_(d.series).map(x=>({name:String(x.name||""),values:A_(x.values).slice(0,labels.length).map(v=>toNum(v))})).filter(x=>x.values.length===labels.length&&x.values.every(v=>v!==null)).slice(0,3);
        return {title:String(d.title||"Chart"),unit:String(d.unit||""),kind:["bar","line","pie"].includes(d.kind)?d.kind:"bar",labels,series,insight:String(d.insight||""),source:String(d.source||"")}}).filter(d=>d.labels.length>=2&&d.series.length).slice(0,6)};
  }catch(e){S.fig={key,busy:false,kpis:[],datasets:[],error:aiErr(e)}}
  if(currentTab()==="data")renderData();
}
$("#sheetSel").onchange=e=>{S.sheetIdx=+e.target.value;renderData()};

/* ================= AUDIO ================= */
const synth=window.speechSynthesis;
const A={lang:"en",queue:[],idx:0,playing:false,paused:false,docId:null,en:[],hiChunks:[],translating:false,utt:null,hiVoiceFailed:false,mode:""};
function audioSentences(text){
  const t=text.replace(/​/g,"").replace(/ \| /g,", ").replace(/^[-•●▪◦*]\s*/gm,"").replace(/^(\s*[a-z0-9ivx]{1,4}[.)])\s+/gim,"").replace(/[ \t]+/g," ");
  const out=[];
  t.split(/\n{1,}/).forEach(line=>{const l=line.trim();if(!l)return;
    if(/^\d+$/.test(l))return;
    const parts=l.split(/(?<=[.!?।])\s+/);parts.forEach(p=>{p=p.trim();if(p.length<2)return;
      while(p.length>220){const c=p.lastIndexOf(",",200);const cut=c>80?c+1:200;out.push(p.slice(0,cut).trim());p=p.slice(cut).trim()}out.push(p)})});
  return out;
}
function renderAudio(){
  const docs=readyDocs(), sel=$("#audDoc");
  if(!docs.length){sel.innerHTML="";$("#transcript").innerHTML=emptyBox(m("audEmpty"),m("noDocs"),true);$("#audPlay").disabled=true;return}
  $("#audPlay").disabled=false;
  const cur=A.docId&&docs.find(d=>d.id===A.docId)?A.docId:docs[0].id;
  sel.innerHTML=docs.map(d=>`<option value="${d.id}">${esc(d.name)}</option>`).join(""); sel.value=cur;
  if(A.docId!==cur||!A.en.length)loadAudioDoc(cur);
  renderVoices(); renderTranscript(); audioNotice();
}
function loadAudioDoc(id){
  stopAudio(); A.docId=id; const d=readyDocs().find(x=>x.id===id); if(!d)return;
  A.en=audioSentences(d.text); A.idx=0; A.hiChunks=[];
  let cur=[],len=0; for(const s of A.en){cur.push(s);len+=s.length;if(len>900){A.hiChunks.push({src:cur,out:null});cur=[];len=0}} if(cur.length)A.hiChunks.push({src:cur,out:null});
  rebuildQueue();
}
function rebuildQueue(){A.queue=A.lang==="en"?A.en.map(t=>({t})):A.hiChunks.flatMap(c=>c.out||[])}
/* voices */
const allVoices=()=>synth?synth.getVoices():[];
const isHiVoice=v=>/^hi/i.test(v.lang||"")||/hindi|हिन्दी|हिंदी/i.test(v.name);
const isInVoice=v=>/en[-_]IN/i.test(v.lang||"")||/india/i.test(v.name);
function renderVoices(){
  const sel=$("#audVoice"); if(!synth){sel.innerHTML=`<option>Speech not supported</option>`;return}
  const vs=allVoices(); const prev=sel.value; let opts=[];
  if(A.lang==="hi"){
    const hi=vs.filter(isHiVoice), ind=vs.filter(v=>isInVoice(v)&&!isHiVoice(v)), en=vs.filter(v=>/^en/i.test(v.lang||"")&&!isInVoice(v)).slice(0,6);
    opts=[...hi.map(v=>({v:v.name,l:`${v.name} · Hindi`})),...ind.map(v=>({v:v.name,l:`${v.name} · reads Hindi in Roman script`})),...en.map(v=>({v:v.name,l:`${v.name} · reads Hindi in Roman script`}))];
  }else{
    const ind=vs.filter(isInVoice), en=vs.filter(v=>/^en/i.test(v.lang||"")&&!isInVoice(v));
    opts=[...ind,...en].map(v=>({v:v.name,l:`${v.name} (${v.lang})`}));
  }
  sel.innerHTML=opts.length?opts.map(o=>`<option value="${esc(o.v)}">${esc(o.l)}</option>`).join(""):`<option value="">Default voice</option>`;
  if(prev&&opts.some(o=>o.v===prev))sel.value=prev;
  else if(opts.length){const want=A.lang==="hi"?(vs.find(v=>isHiVoice(v)&&/google/i.test(v.name))||vs.find(isHiVoice)||vs.find(isInVoice)):(vs.find(v=>isInVoice(v)&&/google|neerja|heera|prabhat|ravi/i.test(v.name))||vs.find(isInVoice)||vs.find(v=>/^en/i.test(v.lang||"")));if(want)sel.value=want.name}
}
if(synth){synth.onvoiceschanged=()=>{if(currentTab()==="audio"){renderVoices();audioNotice()}}}
function chosenVoice(){const name=$("#audVoice").value;return allVoices().find(v=>v.name===name)||null}
function audioNotice(){
  const box=$("#audMsg");
  if(A.lang!=="hi"){box.innerHTML="";return}
  if(!sample){box.innerHTML=notice(m("hiOff"),"warn");return}
  const vs=allVoices(); const v=chosenVoice();
  if(A.hiVoiceFailed)box.innerHTML=notice("The Hindi voice on this device did not start, so the Hindi translation is being read in Roman script with an Indian English voice. The transcript stays in Devanagari.","warn");
  else if(vs.length&&!vs.some(isHiVoice))box.innerHTML=notice(m("noHiVoice"),"warn");
  else if(v&&!isHiVoice(v))box.innerHTML=notice("This voice reads the Hindi translation in Roman script. Pick a Hindi voice from the list to hear Devanagari pronunciation.");
  else box.innerHTML="";
}
/* transcript + progress */
function renderTranscript(){
  const box=$("#transcript"); box.setAttribute("lang",A.lang);
  const items=A.queue;
  if(!items.length){box.innerHTML=A.lang==="hi"?`<div class="empty">${sample?`<b>${esc(A.translating?m("translating"):"Press play to start the Hindi reading")}</b><span>Each section is translated just before it is read.</span>`:`<b>${esc(m("hiOff"))}</b>`}</div>`:emptyBox(m("audEmpty"),"");updateProgress();return}
  box.innerHTML=items.map((s,i)=>`<span data-i="${i}" class="${i===A.idx&&(A.playing||A.paused)?"cur":""}">${esc(s.t)}</span> `).join("")+(A.lang==="hi"&&A.hiChunks.some(c=>!c.out)?`<div style="color:var(--muted);font-size:.85rem;margin-top:8px">${A.translating?'<span class="spin" style="width:12px;height:12px"></span> ':""}${A.hiChunks.filter(c=>c.out).length} / ${A.hiChunks.length} sections translated</div>`:"");
  updateProgress();
}
function updateProgress(){
  const done=A.lang==="hi"?(A.hiChunks.length?A.hiChunks.filter(c=>c.out).length/A.hiChunks.length:0):1;
  const pct=A.queue.length?A.idx/A.queue.length*done*100:0;
  $("#audBar div").style.width=Math.min(100,pct)+"%"; $("#audBar").setAttribute("aria-valuenow",Math.round(pct));
  const words=A.en.slice(Math.floor(A.en.length*pct/100)).join(" ").split(/\s+/).length; const rate=+$("#audRate").value;
  $("#audTime").textContent=`${Math.min(A.idx+1,A.queue.length)} / ${A.queue.length}${A.lang==="hi"&&A.hiChunks.some(c=>!c.out)?"+":""} · ~${Math.ceil(words/(150*rate))} min`;
}
/* Hindi translation: Devanagari for display and Hindi voices, Roman script for any other voice */
async function translateChunk(k){
  const c=A.hiChunks[k]; if(!c||c.out||c.busy||!sample)return; c.busy=true; A.translating=true; renderTranscript();
  try{
    const r=await sample.json(`Translate each numbered sentence from an official Government of India document into clear, formal Hindi suitable for reading aloud. Keep numbers as digits and keep names such as NITI, NFS, SIT, ABP in their usual form.
For every sentence give "hi" (Devanagari) and "roman" (the same Hindi written in simple Roman letters, e.g. "Sabhi 805 sthanon par upkaran pahunch gaye hain").
Reply with only JSON: {"lines":[{"hi":"...","roman":"..."}]} with one entry per input sentence, in order.

${c.src.map((x,i)=>`${i+1}. ${x}`).join("\n")}`,{modelTier:"quick",cache:{gcTime:86400000}});
    const lines=(r&&Array.isArray(r.lines)?r.lines:[]).map(x=>({t:String(x.hi||"").trim(),r:String(x.roman||"").trim()})).filter(x=>x.t);
    if(!lines.length)throw {code:"invalid_json"};
    c.out=lines;
  }catch(e){c.busy=false;A.translating=A.hiChunks.some(x=>x.busy);$("#audMsg").innerHTML=notice(aiErr(e),"warn");renderTranscript();throw e}
  c.busy=false; A.translating=A.hiChunks.some(x=>x.busy); rebuildQueue(); renderTranscript();
}
async function ensureHi(){
  if(!sample)throw new Error("no ai");
  let done=0,k=0; for(;k<A.hiChunks.length;k++){if(!A.hiChunks[k].out)break;done+=A.hiChunks[k].out.length}
  if(A.idx>=done&&k<A.hiChunks.length){await translateChunk(k)}
  const nk=A.hiChunks.findIndex(c=>!c.out&&!c.busy); if(nk>=0)translateChunk(nk).catch(()=>{});
}
function setPlayIcon(){const p=$("#audPlay");const on=A.playing&&!A.paused;p.innerHTML=on?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>':'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';p.setAttribute("aria-label",on?"Pause":"Play");$("#wave").classList.toggle("on",on)}
function fallbackVoice(){const vs=allVoices();return vs.find(v=>isInVoice(v)&&!isHiVoice(v))||vs.find(v=>/^en/i.test(v.lang||""))||null}
async function speakNext(){
  if(!A.playing)return;
  if(A.lang==="hi"){try{await ensureHi()}catch(e){A.playing=false;setPlayIcon();return}}
  if(A.idx>=A.queue.length){if(A.lang==="hi"&&A.hiChunks.some(c=>!c.out)){setTimeout(speakNext,400);return}A.playing=false;A.idx=0;setPlayIcon();renderTranscript();return}
  const item=A.queue[A.idx]; let v=chosenVoice(); let text=item.t, lang="en-IN";
  if(A.lang==="hi"){
    const hiOk=v&&isHiVoice(v)&&!A.hiVoiceFailed;
    if(!v&&!A.hiVoiceFailed){v=allVoices().find(isHiVoice)||null}
    if((v&&isHiVoice(v)&&!A.hiVoiceFailed)||hiOk){lang="hi-IN"}
    else{text=item.r||item.t; if(!v||isHiVoice(v))v=fallbackVoice(); lang=v?v.lang:"en-IN"}
  }
  const u=new SpeechSynthesisUtterance(text); A.utt=u; u.lang=lang; u.rate=+$("#audRate").value; if(v)u.voice=v;
  let started=false;
  u.onstart=()=>{started=true};
  const hindiFailed=()=>{if(A.utt!==u||!A.playing)return;A.hiVoiceFailed=true;audioNotice();A.utt=null;synth.cancel();setTimeout(speakNext,120)};
  const t0=Date.now();
  const silent=()=>{A.silent=(A.silent||0)+1;if(A.silent>=3){stopAudio();A.silent=0;$("#audMsg").innerHTML=notice("No speech voice responded on this device. Check that sound is on and that your browser has text-to-speech voices (Chrome and Edge include them), then press play again.","warn");return true}return false};
  u.onend=()=>{if(A.utt!==u||!A.playing)return;if(lang==="hi-IN"&&!started){hindiFailed();return}if(!started&&Date.now()-t0<250){if(silent())return}else A.silent=0;A.idx++;speakNext()};
  u.onerror=ev=>{if(A.utt!==u)return;if(ev.error==="interrupted"||ev.error==="canceled")return;if(lang==="hi-IN"){hindiFailed();return}if(silent())return;A.idx++;speakNext()};
  if(lang==="hi-IN")setTimeout(()=>{if(!started&&A.utt===u&&A.playing&&!A.paused)hindiFailed()},4500);
  highlight(); synth.speak(u);
}
function highlight(){const box=$("#transcript");box.querySelectorAll("span.cur").forEach(s=>s.classList.remove("cur"));const el=box.querySelector(`span[data-i="${A.idx}"]`);if(el){el.classList.add("cur");const top=el.offsetTop-box.offsetTop-box.clientHeight/3;box.scrollTo({top,behavior:reducedMotion()?"auto":"smooth"})}updateProgress()}
function reducedMotion(){return document.documentElement.dataset.motion==="reduce"||matchMedia("(prefers-reduced-motion: reduce)").matches}
function stopAudio(){A.playing=false;A.paused=false;A.utt=null;if(synth)synth.cancel();setPlayIcon()}
function togglePlay(){
  if(!synth){toast("Speech is not supported in this browser");return}
  if(!readyDocs().length){toast(m("noDocs"));return}
  if(A.lang==="hi"&&!sample){audioNotice();return}
  if(A.playing&&!A.paused){synth.pause();A.paused=true;setPlayIcon();return}
  if(A.playing&&A.paused){synth.resume();A.paused=false;setPlayIcon();setTimeout(()=>{if(A.playing&&!A.paused&&!synth.speaking){speakNext()}},250);return}
  A.playing=true;A.paused=false;setPlayIcon();synth.cancel();speakNext();
}
$("#audPlay").onclick=togglePlay;
$("#audStop").onclick=()=>{stopAudio();A.idx=0;renderTranscript()};
$("#audDoc").onchange=e=>{loadAudioDoc(e.target.value);renderTranscript()};
const restartSpeech=()=>{if(A.playing&&!A.paused){A.utt=null;synth.cancel();setTimeout(speakNext,80)}};
$("#audRate").onchange=()=>{restartSpeech();updateProgress()};
$("#audVoice").onchange=()=>{A.hiVoiceFailed=false;audioNotice();restartSpeech()};
document.querySelectorAll("[data-alang]").forEach(b=>b.onclick=()=>{
  stopAudio(); A.lang=b.dataset.alang; A.hiVoiceFailed=false; document.querySelectorAll("[data-alang]").forEach(x=>x.setAttribute("aria-pressed",x===b));
  A.idx=0; rebuildQueue(); $("#audVoice").value=""; renderAudio();
});
$("#transcript").addEventListener("click",e=>{const s=e.target.closest("span[data-i]");if(!s)return;A.idx=+s.dataset.i;if(A.playing){A.paused=false;setPlayIcon();restartSpeech()}else highlight()});
$("#audBar").addEventListener("click",e=>{const r=e.currentTarget.getBoundingClientRect();A.idx=Math.max(0,Math.min(A.queue.length-1,Math.floor((e.clientX-r.left)/r.width*A.queue.length)));if(A.playing)restartSpeech();else highlight()});

/* ================= LOCAL DOCUMENT INTELLIGENCE ================= */
function localAnswer(q,docs){
  const query=String(q||"").toLowerCase();
  const all=docs.map(d=>({name:d.name,text:d.text||""}));
  const terms=query.replace(/[^a-z0-9\s₹%.-]/gi," ").split(/\s+/).filter(x=>x.length>2);
  const stop=new Set("what which where when who how are is the a an of to in on for from with and or tell me list show give does do did this that all any please document documents mentioned numbers figures".split(/\s+/));
  const keys=terms.filter(x=>!stop.has(x));
  const hits=[];
  for(const d of all){
    const lines=d.text.split(/\n+/).map(x=>x.trim()).filter(Boolean);
    for(const line of lines){
      const low=line.toLowerCase();
      const score=keys.reduce((n,k)=>n+(low.includes(k)?1:0),0);
      if(score) hits.push({score,line,name:d.name});
    }
  }
  hits.sort((a,b)=>b.score-a.score);
  if(!hits.length){
    const nums=[];
    for(const d of all){
      for(const m of d.text.matchAll(/(?:₹\s?[\d,.]+|\b\d[\d,.]*%|\b\d{2,}[\d,.]*)/g)) nums.push(`${m[0]} — ${d.name}`);
    }
    if(/number|figure|value|amount|percent|percentage|data/i.test(q)&&nums.length) return "Key figures found in the loaded documents:\n\n• "+nums.slice(0,20).join("\n• ");
    return "I could not find a directly matching passage in the loaded documents. Try using a specific indicator, scheme, department, date, figure, or phrase from the document.";
  }
  const unique=[]; const seen=new Set();
  for(const h of hits){const k=h.name+"|"+h.line;if(!seen.has(k)){seen.add(k);unique.push(h)}if(unique.length>=6)break}
  return "Based on the loaded documents:\n\n"+unique.map(h=>`• ${h.line}\n  Source: ${h.name}`).join("\n\n");
}
function makeDemoFile(){
  const text=`NITI Aayog Development Monitoring Review\nState Development Monitoring Meeting\n25 September 2026\n\nExecutive Summary\nThe review assessed progress across priority development indicators and identified areas requiring follow-up by State teams. Overall monitoring covered 53 indicators across key sectors.\n\nKey Findings\nHealth and Nutrition: The review highlighted district-level variation in performance and the need to close data gaps in the latest reporting period.\nEducation: State teams were asked to validate the latest education indicators and confirm source mappings.\nInfrastructure: Several indicators require updated source data before the next review.\n\nKey Figures\n53 — indicators reviewed\n12 — districts requiring follow-up\n₹ 24.5 crore — indicative programme allocation\n78.4% — reported achievement on a priority indicator\n\nAction Items\nState teams to validate latest indicator values by 30 September 2026.\nData team to review source mappings and resolve missing data before the next review.\nProgramme team to share the updated district-wise status for senior review.\n\nNext Review\nThe next monitoring review will assess closure of the identified data and implementation gaps.`;
  return new File([text],"NITI_Development_Monitoring_Demo.txt",{type:"text/plain"});
}
async function loadDemo(){await addFiles([makeDemoFile()]);toast("Demo document loaded");}

/* ================= ASK ================= */
function renderAsk(){
  const box=$("#msgs");
  $("#askMsg").innerHTML=!sample&&aiChecked?notice(m("askOff"),"warn"):"";
  $("#askSend").disabled=!readyDocs().length||busy.ask;
  if(!S.chat.length){
    const qs=["What are the pending action items and their deadlines?","List all numbers mentioned with what they measure.","What decisions need senior-level approval?","Which targets are at risk of slipping?"];
    box.innerHTML=readyDocs().length?`<div class="empty" style="padding:24px 8px"><b>Ask anything about ${readyDocs().length===1?esc(readyDocs()[0].name):readyDocs().length+" documents"}</b><div class="chips">${qs.map(q=>`<button class="chip" type="button" data-q="${esc(q)}">${esc(q)}</button>`).join("")}</div></div>`:emptyBox(m("noDocs"),"");
    return}
  box.innerHTML=S.chat.map(t=>`<div class="msg ${t.role==="user"?"u":"a"}${t.think?" think":""}">${esc(t.content)}</div>`).join("");
  box.scrollTop=box.scrollHeight;
}
$("#msgs").addEventListener("click",e=>{const c=e.target.closest("[data-q]");if(c){$("#askBox").value=c.dataset.q;ask()}});
$("#askForm").addEventListener("submit",e=>{e.preventDefault();ask()});
$("#askBox").addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();ask()}});
$("#askClear").onclick=()=>{S.chat=[];renderAsk()};
async function ask(){
  const q=$("#askBox").value.trim(); if(!q||busy.ask||!readyDocs().length)return;
  $("#askBox").value=""; busy.ask=true;
  S.chat.push({role:"user",content:q}); const a={role:"assistant",content:"Thinking…",think:true}; S.chat.push(a); renderAsk();
  const docs=readyDocs();
  if(!sample){
    await sleep(180);
    a.content=localAnswer(q,docs); a.think=false; busy.ask=false; renderAsk(); return;
  }
  const per=Math.floor(44000/docs.length);
  const rules=`You answer questions for NITI Aayog officers using ONLY the documents below. Be concise and factual; use short bullets where useful. After each answer, name the document and section it came from. If the documents do not contain the answer, say so plainly. Answer in the language of the question.\n\n${docs.map(d=>docBlock(d,per)).join("\n\n")}`;
  const turns=[{role:"user",content:rules},...S.chat.filter(t=>!t.think).slice(-8)];
  while(turns.length>1&&turns[1].role!=="user")turns.splice(1,1);
  try{const r=await sample(turns,{thinking_level:"low"});a.content=r.text;a.think=false}
  catch(e){a.content=e.text||aiErr(e);a.think=false}
  busy.ask=false; renderAsk();
}

/* ================= HISTORY ================= */
const HK="nip.history.v1";
function getHist(){return store(HK)||[]}
function saveHistory(){
  if(!S.result||S.isSample)return;
  const h=getHist(); const id=S.result.id||(S.result.id=uid());
  const entry={id,at:S.result.at,files:S.result.files,summary:S.result.summary,mode:S.result.mode,deck:S.deck,slides:S.deck?fullDeckList().length:0,
    docs:readyDocs().map(d=>({name:d.name,kind:d.kind,pages:d.pages,size:d.size,text:d.text.slice(0,60000),sheets:(d.sheets||[]).map(s=>({...s,rows:s.rows.slice(0,300)}))}))};
  const i=h.findIndex(x=>x.id===id); if(i>=0)h[i]=entry;else h.unshift(entry);
  while(h.length>12)h.pop();
  let ok=store(HK,h); if(ok===null){for(const e of h)e.docs=e.docs.map(d=>({...d,text:d.text.slice(0,15000),sheets:[]}));store(HK,h)}
  renderStats(); renderHistory();
}
function renderStats(){
  const h=getHist();
  $("#stDocs").textContent=h.reduce((a,e)=>a+e.files.length,0).toLocaleString("en-IN");
  $("#stPages").textContent=h.reduce((a,e)=>a+e.files.reduce((b,f)=>b+(f.pages||0),0),0).toLocaleString("en-IN");
  $("#stSlides").textContent=h.reduce((a,e)=>a+(e.slides||0),0).toLocaleString("en-IN");
}
function renderHistory(){
  const h=getHist(), box=$("#hist");
  if(!h.length){box.innerHTML=emptyBox(m("histEmpty"),m("histEmptyP"));return}
  box.innerHTML=h.map(e=>`<div class="card hitem"><div style="min-width:0"><h4>${esc(e.summary.title)}</h4><p>${new Date(e.at).toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})} · ${e.files.length} file(s): ${esc(e.files.map(f=>f.name).join(", "))}${e.deck?` · ${e.slides} slides`:""}</p></div><div class="row"><button class="btn btn-navy btn-sm" data-open="${e.id}">Open</button><button class="btn btn-ghost btn-sm" data-del="${e.id}">Delete</button></div></div>`).join("");
}
$("#hist").addEventListener("click",e=>{
  const o=e.target.closest("[data-open]"),d=e.target.closest("[data-del]");
  if(d){store(HK,getHist().filter(x=>x.id!==d.dataset.del));renderHistory();renderStats();return}
  if(o)openHistory(o.dataset.open);
});
function openHistory(id){{const en=getHist().find(x=>x.id===id);if(!en)return;stopAudio();
    S.docs=en.docs.map(x=>({...x,id:uid(),status:"ready",note:"From history",scanned:[],sheets:x.sheets||[]}));
    S.result={id:en.id,summary:en.summary,files:en.files,at:en.at,mode:en.mode};S.deck=en.deck||null;S.stale=false;S.isSample=false;S.chat=[];A.docId=null;
    $("#sumStale").innerHTML="";$("#pptMsg").innerHTML="";S.fig=null;renderTray();renderAll();switchTab("summary")}}
$("#hisClear").onclick=()=>{if($("#hisClear").dataset.confirm){store(HK,[]);renderHistory();renderStats();delete $("#hisClear").dataset.confirm;$("#hisClear").textContent=LANG==="hi"?I18N.hi.hisClear:"Clear history";return}
  $("#hisClear").dataset.confirm="1";$("#hisClear").textContent=LANG==="hi"?"पुष्टि करें":"Click again to confirm";setTimeout(()=>{if($("#hisClear").dataset.confirm){delete $("#hisClear").dataset.confirm;$("#hisClear").textContent=LANG==="hi"?I18N.hi.hisClear:"Clear history"}},4000)};

/* ================= tabs / render ================= */
const TABS=["home","summary","ppt","data","audio","ask","history"];
function switchTab(id){
  TABS.forEach(t=>{const on=t===id;$("#t-"+t).setAttribute("aria-selected",on);$("#t-"+t).tabIndex=on?0:-1;$("#p-"+t).classList.toggle("active",on)});
  if(id!=="audio"&&A.playing&&!A.paused){/* keep reading in background */}
  renderPanel(id);
  const cr=$("#crumb"); if(cr) cr.textContent=$("#t-"+id+" span").textContent;
  try{history.replaceState(null,"","#"+id)}catch(e){}
  const mn=$("#main"); if(mn&&document.activeElement&&!document.activeElement.closest(".tabs"))mn.focus({preventScroll:true});
  window.scrollTo({top:0,behavior:"auto"});
}
function renderHome(){
  const h=getHist().slice(0,4), box=$("#recent"); if(!box)return;
  box.innerHTML=h.length?`<h2 class="sechead">${LANG==="hi"?"हाल के दस्तावेज़":"Recent documents"}</h2><div class="recent">${h.map(e=>`<button type="button" class="rcard" data-open="${e.id}"><b>${esc(e.summary.title)}</b><span>${new Date(e.at).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})} · ${e.files.length} file(s)${e.deck?` · ${e.slides} slides`:""}</span></button>`).join("")}</div>`:"";
}
$("#recent").addEventListener("click",e=>{const b=e.target.closest("[data-open]");if(b)openHistory(b.dataset.open)});
function renderPanel(id){
  if(id==="home")renderHome(); else if(id==="summary")renderSummary(); else if(id==="ppt")renderDeck(); else if(id==="data")renderData(); else if(id==="audio")renderAudio(); else if(id==="ask")renderAsk(); else if(id==="history")renderHistory();
}
function currentTab(){return TABS.find(t=>$("#p-"+t).classList.contains("active"))}
function renderAll(){renderPanel(currentTab());renderTabBadges()}
function renderTabBadges(){
  const sheets=allSheets().length; const tb=$("#t-data"); let b=tb.querySelector(".badge");
  if(sheets){if(!b){b=document.createElement("span");b.className="badge";tb.appendChild(b)}b.textContent=sheets}else if(b)b.remove();
}
document.querySelector(".tabs").addEventListener("click",e=>{const t=e.target.closest(".tab");if(t)switchTab(t.id.slice(2))});
$("#brandHome").onclick=()=>switchTab("home");
$("#crumbHome").onclick=()=>switchTab("home");
document.addEventListener("click",e=>{const g=e.target.closest("[data-go]");if(g)switchTab(g.dataset.go)});
document.querySelector(".tabs").addEventListener("keydown",e=>{if(!["ArrowRight","ArrowLeft","ArrowDown","ArrowUp"].includes(e.key))return;e.preventDefault();const fwd=e.key==="ArrowRight"||e.key==="ArrowDown";const i=TABS.indexOf(currentTab());const n=TABS[(i+(fwd?1:TABS.length-1))%TABS.length];switchTab(n);$("#t-"+n).focus()});

/* ================= upload wiring ================= */
$("#fileInput").onchange=e=>{if(e.target.files.length)addFiles(e.target.files);e.target.value=""};
$("#addMore").onclick=()=>$("#fileInput").click();
$("#clearAll").onclick=()=>{stopAudio();S.docs=[];S.result=null;S.deck=null;S.chat=[];S.isSample=false;A.docId=null;$("#sumStale").innerHTML="";$("#pptMsg").innerHTML="";renderTray();renderAll()};
const drop=$("#drop");
["dragenter","dragover"].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add("over")}));
["dragleave","drop"].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove("over")}));
drop.addEventListener("drop",e=>{if(e.dataTransfer.files.length)addFiles(e.dataTransfer.files)});
document.addEventListener("dragover",e=>e.preventDefault());document.addEventListener("drop",e=>e.preventDefault());

/* ================= accessibility / prefs ================= */
const root=document.documentElement;
function setScale(v){root.style.setProperty("--scale",v);document.querySelectorAll("[data-scale]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.scale==v));store("nip.scale",v)}
document.querySelectorAll("[data-scale]").forEach(b=>b.onclick=()=>setScale(b.dataset.scale));
function isDark(){const t=root.dataset.theme;return t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches}
function setTheme(t){if(t)root.dataset.theme=t;else delete root.dataset.theme;$("#themeBtn").setAttribute("aria-pressed",isDark());store("nip.theme",t||"");if(currentTab()==="data")renderData()}
$("#themeBtn").onclick=()=>setTheme(isDark()?"light":"dark");
const PREFS={contrastBtn:["contrast","high"],fontBtn:["font","readable"],spaceBtn:["spacing","wide"],motionBtn:["motion","reduce"]};
function setPref(id,on){const [k,v]=PREFS[id];if(on)root.dataset[k]=v;else delete root.dataset[k];$("#"+id).setAttribute("aria-checked",on);store("nip."+k,on)}
Object.keys(PREFS).forEach(id=>{$("#"+id).onclick=()=>setPref(id,$("#"+id).getAttribute("aria-checked")!=="true")});
function toggleA11y(open){const p=$("#a11yPanel"),b=$("#a11yBtn");const o=open??p.hidden;p.hidden=!o;b.setAttribute("aria-expanded",o);if(o){const f=p.querySelector("button");f&&f.focus()}}
$("#a11yBtn").onclick=()=>toggleA11y();
$("#a11yReset").onclick=()=>{setScale(1);Object.keys(PREFS).forEach(id=>setPref(id,false));setTheme("");toast(LANG==="hi"?"डिफ़ॉल्ट सेटिंग बहाल":"Settings reset")};
document.addEventListener("click",e=>{if(!$("#a11yPanel").hidden&&!e.target.closest(".a11y-wrap"))toggleA11y(false)});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&!$("#a11yPanel").hidden){toggleA11y(false);$("#a11yBtn").focus();return}
  if(e.key==="Escape"&&!$("#aiPanel").hidden){toggleAiPanel(false);$("#aiChip").focus();return}
  const typing=/^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName||""));
  if(e.altKey&&!e.ctrlKey&&!e.metaKey){
    const k=e.key.toLowerCase(); const n=parseInt(e.code.replace("Digit",""),10);
    if(n>=1&&n<=TABS.length){e.preventDefault();switchTab(TABS[n-1]);$("#t-"+TABS[n-1]).focus();return}
    if(e.code==="KeyU"){e.preventDefault();$("#fileInput").click();return}
    if(e.code==="KeyP"){e.preventDefault();if(currentTab()!=="audio")switchTab("audio");togglePlay();return}
    if(e.code==="KeyA"){e.preventDefault();toggleA11y();return}
  }
  if(e.key==="/"&&!typing){e.preventDefault();switchTab("ask");$("#askBox").focus()}
});
document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>{LANG=b.dataset.lang;document.querySelectorAll("[data-lang]").forEach(x=>x.setAttribute("aria-pressed",x===b));store("nip.lang",LANG);applyI18n()});

/* ================= boot ================= */
(function boot(){
  const sc=store("nip.scale");if(sc)setScale(sc);
  const th=store("nip.theme");if(th)setTheme(th);else $("#themeBtn").setAttribute("aria-pressed",isDark());
  Object.keys(PREFS).forEach(id=>{if(store("nip."+PREFS[id][0]))setPref(id,true)});
  const lg=store("nip.lang");if(lg==="hi"){LANG="hi";document.querySelectorAll("[data-lang]").forEach(x=>x.setAttribute("aria-pressed",x.dataset.lang==="hi"))}
  applyI18n(); renderStats();
  const h=location.hash.replace("#","");
  switchTab(TABS.includes(h)&&h!=="summary"?h:"home");
  initCaps();
})();
