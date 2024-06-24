"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[5916],{5364:(e,n,o)=>{o.r(n),o.d(n,{CH:()=>h,assets:()=>a,chCodeConfig:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>g});o(6540);var t=o(4848),s=o(8453),r=o(4754),i=o(7293);const l={},c="Large Language Models (LLMs)",d={id:"components/model_specs",title:"Large Language Models (LLMs)",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/components/model_specs.mdx",sourceDirName:"components",slug:"/components/model_specs",permalink:"/components/model_specs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},a={},h={annotations:r.hk,Code:r.Cy},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},g=[{value:"Anthropic",id:"anthropic",level:2},{value:"ChatAnthropic",id:"chatanthropic",level:2},{value:"CTransformers",id:"ctransformers",level:2},{value:"ChatOpenAI Component",id:"chatopenai-component",level:2},{value:"Cohere Component",id:"cohere-component",level:2},{value:"HuggingFaceHub Component",id:"huggingfacehub-component",level:2},{value:"LlamaCpp Component",id:"llamacpp-component",level:2},{value:"VertexAI Component",id:"vertexai-component",level:2}];function u(e){const n=Object.assign({h1:"h1",p:"p",hr:"hr",h2:"h2",a:"a",ul:"ul",li:"li",strong:"strong",code:"code"},(0,s.RP)(),e.components);return h||m("CH",!1),h.Code||m("CH.Code",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n","\n",(0,t.jsx)(n.h1,{id:"large-language-models-llms",children:"Large Language Models (LLMs)"}),"\n",(0,t.jsx)(i.A,{type:"warning",title:"warning",children:(0,t.jsx)(n.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,t.jsx)(n.p,{children:"A Large Language Model (LLM) is a foundational component of Langflow. It provides a uniform interface for interacting with LLMs from various providers, including OpenAI, Cohere, and HuggingFace. Langflow extensively uses LLMs across its chains and agents, employing them to generate text based on specific prompts or inputs."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"anthropic",children:"Anthropic"}),"\n",(0,t.jsxs)(n.p,{children:["This is a wrapper for Anthropic's large language models. Learn more at ",(0,t.jsx)(n.a,{href:"https://www.anthropic.com",children:"Anthropic"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"anthropic_api_key:"})," This key authenticates and authorizes access to the Anthropic API."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"anthropic_api_url:"})," This URL connects to the Anthropic API."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"temperature:"})," This parameter adjusts the randomness level in text generation. Set this to a non-negative number."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"chatanthropic",children:"ChatAnthropic"}),"\n",(0,t.jsxs)(n.p,{children:["This is a wrapper for Anthropic's large language model designed for chat-based interactions. Learn more at ",(0,t.jsx)(n.a,{href:"https://www.anthropic.com",children:"Anthropic"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"anthropic_api_key:"})," This key authenticates and authorizes access to the Anthropic API."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"anthropic_api_url:"})," This URL connects to the Anthropic API."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"temperature:"})," This parameter adjusts the randomness level in text generation. Set this to a non-negative number."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"ctransformers",children:"CTransformers"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CTransformers"})," provides access to Transformer models implemented in C/C++ using the ",(0,t.jsx)(n.a,{href:"https://github.com/ggerganov/ggml",children:"GGML"})," library."]}),"\n",(0,t.jsx)(i.A,{type:"info",children:(0,t.jsxs)(n.p,{children:["Ensure the ",(0,t.jsx)(n.code,{children:"ctransformers"})," Python package is installed. Discover more about\ninstallation, supported models, and usage\n",(0,t.jsx)(n.a,{href:"https://github.com/marella/ctransformers",children:"here"}),"."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"config:"})," This configuration is for the Transformer models. Check the default settings and possible configurations at ",(0,t.jsx)(n.a,{href:"https://github.com/marella/ctransformers#config",children:"config"}),"."]}),"\n"]}),"\n",(0,t.jsx)(h.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"{",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "top_k"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"40",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "top_p"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"0.95",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "temperature"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"0.8",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "repetition_penalty"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"1.1",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "last_n_tokens"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"64",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "seed"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"-1",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "max_new_tokens"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"256",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "stop"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"null",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "stream"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"false",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "reset"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"true",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "batch_size"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"8",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "threads"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"-1",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "context_length"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"-1",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "gpu_layers"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"0",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"}",props:{style:{color:"#C9D1D9"}}}]}],lang:"json"},annotations:[]}]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"model"}),": The file path, directory, or Hugging Face Hub model repository name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"model_file"}),": The specific model file name within the repository or directory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"model_type"}),": The type of transformer model used. For further information, visit ",(0,t.jsx)(n.a,{href:"https://github.com/marella/ctransformers",children:"ctransformers"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"chatopenai-component",children:"ChatOpenAI Component"}),"\n",(0,t.jsxs)(n.p,{children:["This component interfaces with ",(0,t.jsx)(n.a,{href:"https://openai.com",children:"OpenAI's"})," large language models, supporting a variety of tasks such as chatbots, generative question-answering, and summarization."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"max_tokens"}),": The maximum number of tokens to generate for each completion. Set to ",(0,t.jsx)(n.code,{children:"-1"})," to generate as many tokens as possible, based on the model's context size. The default is ",(0,t.jsx)(n.code,{children:"256"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"model_kwargs"}),": A dictionary containing any additional model parameters for undefined calls."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"model_name"}),": Specifies the OpenAI chat model in use."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"openai_api_base"}),": The base URL for accessing the OpenAI API."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"openai_api_key"}),": The API key required for authentication with the OpenAI API."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"temperature"}),": Adjusts the randomness level of the text generation. This should be a non-negative number, defaulting to ",(0,t.jsx)(n.code,{children:"0.7"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"cohere-component",children:"Cohere Component"}),"\n",(0,t.jsxs)(n.p,{children:["A wrapper for accessing ",(0,t.jsx)(n.a,{href:"https://cohere.com",children:"Cohere's"})," large language models."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"cohere_api_key"}),": The API key needed for Cohere service authentication."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"max_tokens"}),": The limit on the number of tokens to generate per request, defaulting to ",(0,t.jsx)(n.code,{children:"256"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"temperature"}),": Adjusts the randomness level in text generations. This should be a non-negative number, defaulting to ",(0,t.jsx)(n.code,{children:"0.75"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"huggingfacehub-component",children:"HuggingFaceHub Component"}),"\n",(0,t.jsxs)(n.p,{children:["A component facilitating access to models hosted on the ",(0,t.jsx)(n.a,{href:"https://www.huggingface.co/models",children:"HuggingFace Hub"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"huggingfacehub_api_token"}),": The token required for API authentication."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"model_kwargs"}),": Parameters passed to the model."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"repo_id"}),": Specifies the model repository, defaulting to ",(0,t.jsx)(n.code,{children:"gpt2"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"task"}),": The specific task to execute with the model, returning either ",(0,t.jsx)(n.code,{children:"generated_text"})," or ",(0,t.jsx)(n.code,{children:"summary_text"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"llamacpp-component",children:"LlamaCpp Component"}),"\n",(0,t.jsxs)(n.p,{children:["This component provides access to ",(0,t.jsx)(n.code,{children:"llama.cpp"})," models, ensuring high performance and flexibility."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"echo"}),": Whether to echo the input prompt, defaulting to ",(0,t.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"f16_kv"}),": Indicates if half-precision should be used for the key/value cache, defaulting to ",(0,t.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"last_n_tokens_size"}),": The lookback size for applying repeat penalties, defaulting to ",(0,t.jsx)(n.code,{children:"64"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"logits_all"}),": Whether to return logits for all tokens or just the last one, defaulting to ",(0,t.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"logprobs"}),": The number of log probabilities to return. If set to None, no probabilities are returned."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"lora_base"}),": The path to the base Llama LoRA model."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"lora_path"}),": The specific path to the Llama LoRA model. If set to None, no LoRA model is loaded."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"max_tokens"}),": The maximum number of tokens to generate in one session, defaulting to ",(0,t.jsx)(n.code,{children:"256"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"model_path"}),": The file path to the Llama model."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"n_batch"}),": The number of tokens processed in parallel, defaulting to ",(0,t.jsx)(n.code,{children:"8"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"n_ctx"}),": The context window size for tokens, defaulting to ",(0,t.jsx)(n.code,{children:"512"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"repeat_penalty"}),": The penalty applied to repeated tokens, defaulting to ",(0,t.jsx)(n.code,{children:"1.1"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"seed"}),": The seed for random number generation. If set to ",(0,t.jsx)(n.code,{children:"-1"}),", a random seed is used."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"stop"}),": A list of stop strings that terminate generation when encountered."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"streaming"}),": Indicates whether to stream results token by token, defaulting to ",(0,t.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"suffix"}),": A suffix appended to generated text. If None, no suffix is appended."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"tags"}),": Tags added to the execution trace for monitoring."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"temperature"}),": The sampling temperature, defaulting to ",(0,t.jsx)(n.code,{children:"0.8"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"top_k"}),": The top-k sampling setting, defaulting to ",(0,t.jsx)(n.code,{children:"40"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"top_p"}),": The cumulative probability threshold for top-p sampling, defaulting to ",(0,t.jsx)(n.code,{children:"0.95"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"use_mlock"}),": Forces the system to retain the model in RAM, defaulting to ",(0,t.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"use_mmap"}),": Indicates whether to maintain the model loaded in RAM, defaulting to ",(0,t.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"verbose"}),": Controls the verbosity of output details. When enabled, it provides insights into internal states to aid debugging and understanding, defaulting to ",(0,t.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"vocab_only"}),": Loads only the vocabulary without model weights, defaulting to ",(0,t.jsx)(n.code,{children:"False"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"vertexai-component",children:"VertexAI Component"}),"\n",(0,t.jsxs)(n.p,{children:["This component integrates with ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai",children:"Google Vertex AI"})," large language models to enhance AI capabilities."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"credentials"}),": Custom"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"credentials used for API interactions."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"location"}),": The default location for API calls, defaulting to ",(0,t.jsx)(n.code,{children:"us-central1"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"max_output_tokens"}),": Limits the output tokens per prompt, defaulting to ",(0,t.jsx)(n.code,{children:"128"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"model_name"}),": The name of the Vertex AI model in use, defaulting to ",(0,t.jsx)(n.code,{children:"text-bison"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"project"}),": The default Google Cloud Platform project for API calls."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"request_parallelism"}),": The level of request parallelism for VertexAI model interactions, defaulting to ",(0,t.jsx)(n.code,{children:"5"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"temperature"}),": Adjusts the randomness level in text generations, defaulting to ",(0,t.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"top_k"}),": The setting for selecting the top-k tokens for outputs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"top_p"}),": The threshold for summing probabilities of the most likely tokens, defaulting to ",(0,t.jsx)(n.code,{children:"0.95"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"tuned_model_name"}),": Specifies a tuned model name, which overrides the default model name if provided."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"verbose"}),": Controls the output verbosity to assist in debugging and understanding the operational details, defaulting to ",(0,t.jsx)(n.code,{children:"False"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{})]})}const x=function(e={}){const{wrapper:n}=Object.assign({},(0,s.RP)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)};function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);