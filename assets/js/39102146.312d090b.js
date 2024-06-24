"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[3085],{7533:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(6540),i=n(1122),s=n(6025),r=n(4848);const a=e=>{let{alt:t,sources:n,style:a}=e;const[l,c]=(0,o.useState)(!1),d=e=>{"Escape"===e.key&&c(!1)};(0,o.useEffect)((()=>(l?document.addEventListener("keydown",d):document.removeEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)})),[l]);return(0,r.jsx)("div",{className:"zoomable-image "+(l?"fullscreen":""),onClick:()=>{c(!l)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...a},children:(0,r.jsx)(i.A,{className:"zoomable-image-inner",alt:t,sources:{light:(0,s.Ay)(n.light),dark:(0,s.Ay)(n.dark)}})})}},6756:(e,t,n)=>{n.r(t),n.d(t,{CH:()=>h,assets:()=>d,chCodeConfig:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>u});n(6540);var o=n(4848),i=n(8453),s=n(4754),r=(n(1122),n(6025),n(7533),n(7293));const a={},l="Build Chatbots with the System Message Component",c={id:"tutorials/chatprompttemplate_guide",title:"Build Chatbots with the System Message Component",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/tutorials/chatprompttemplate_guide.mdx",sourceDirName:"tutorials",slug:"/tutorials/chatprompttemplate_guide",permalink:"/tutorials/chatprompttemplate_guide",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Custom Components",permalink:"/components/custom"},next:{title:"Custom Components",permalink:"/tutorials/custom_components"}},d={},h={annotations:s.hk,InlineCode:s.R0},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},u=[{value:"Overview",id:"overview",level:2},{value:"Interactive Guide",id:"interactive-guide",level:2},{value:"Step-by-Step Instructions",id:"step-by-step-instructions",level:2}];function m(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",blockquote:"blockquote",strong:"strong",code:"code"},(0,i.RP)(),e.components);return h||b("CH",!1),h.InlineCode||b("CH.InlineCode",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n","\n",(0,o.jsx)(t.h1,{id:"build-chatbots-with-the-system-message-component",children:"Build Chatbots with the System Message Component"}),"\n",(0,o.jsx)(r.A,{type:"warning",title:"warning",children:(0,o.jsx)(t.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:'In this guide, we will modify the "Basic Chat with Prompt and History" example, integrating the ChatPromptTemplate with the SystemMessagePromptTemplate and HumanMessagePromptTemplate components. By following these steps, you\'ll be able to build a personalized chatbot that can interpret and respond based on user-defined System messages.'}),"\n",(0,o.jsx)(t.h2,{id:"interactive-guide",children:"Interactive Guide"}),"\n",(0,o.jsx)("iframe",{src:"https://app.tango.us/app/embed/f05bb3a7-4ceb-4b61-921f-628563b562f6?iframe=true",sandbox:"allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin",security:"restricted",title:"Step-by-Step Instructions to Customize and Build a Chatbot with custom System Message",width:"100%",height:"800px",referrerpolicy:"strict-origin-when-cross-origin",frameborder:"0",webkitallowfullscreen:"webkitallowfullscreen",mozallowfullscreen:"mozallowfullscreen",allowfullscreen:"allowfullscreen"}),"\n",(0,o.jsx)(t.h2,{id:"step-by-step-instructions",children:"Step-by-Step Instructions"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Navigate to the "Community Examples" section.'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Locate the "Basic Chat with Prompt and History" example, and click on "Fork Example".'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Once in the editor, find the "PromptTemplate" component and remove it.'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Now, add these three components: ChatPromptTemplate, SystemMessagePromptTemplate, and HumanMessagePromptTemplate."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," Remember to set the model to gpt-3.5-turbo-0613 or the most up-to-date version. The latest models have improved capabilities to comprehend System messages."]}),"\n"]}),"\n",(0,o.jsxs)(t.ol,{start:"5",children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Open the "Prompt" field on the SystemMessagePromptTemplate component.'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Enter the text: ",(0,o.jsx)(h.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"You are a {role} that {behavior}.",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"You are a {role} that {behavior}."})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Save your changes by clicking on "Check & Save".'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Define the 'role' variable by typing \"obedient assistant\"."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Next, navigate to the HumanMessagePromptTemplate and open the "Prompt" field.'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Here, simply enter ",(0,o.jsx)(t.code,{children:"{input}"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Save these changes by clicking on "Check & Save".'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Now, you should see your flow populated with the variables you defined."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"In the Memory component, set the 'Input Key' to \"input\"."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Tip:"})," When using a Memory component with multiple variables, it's crucial to specify which variable should be used to generate the conversation history."]}),"\n"]}),"\n",(0,o.jsxs)(t.ol,{start:"14",children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Click on the "Build" button to implement your changes.'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Open the chat interface to test your modifications."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"You should now be able to see and use the defined variables in the chat interface."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Click on 'role' to examine the variable you established in the workspace."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Now, let's define the 'behavior' variable."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Enter the text: \"writes the word 'Langflow' at the end of every sentence.\""}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Test your chatbot by typing "How can you help me?"'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"If everything was set up correctly, your chatbot should respond appropriately, following the defined behavior."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Congratulations! You have successfully customized and built your chatbot."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"By following these instructions, you have created a dynamic chatbot capable of understanding and responding based on custom system messages, enhancing the user experience and interaction. Enjoy your personalized assistant!"})]})}const g=function(e={}){const{wrapper:t}=Object.assign({},(0,i.RP)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(m,e)})):m(e)};function b(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);