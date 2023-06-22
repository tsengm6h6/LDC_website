const tailwind = `/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.btn{border-radius:.25rem;border-style:solid;border-width:2px;cursor:pointer;padding:.5rem 1.5rem}.btn,.btn-lg{font-size:1rem;letter-spacing:.025em;line-height:1.5rem}.btn-lg{padding:.5rem 4rem}@media (min-width:768px){.btn-lg{font-size:1.25rem;line-height:1.75rem}}.btn-primary{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:#34b1b1;background-color:rgb(52 177 177/var(--tw-bg-opacity));border-color:#34b1b1;border-color:rgb(52 177 177/var(--tw-border-opacity));color:#fff;color:rgb(255 255 255/var(--tw-text-opacity));transition-duration:.3s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn-primary:hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:#2f9e9e;background-color:rgb(47 158 158/var(--tw-bg-opacity));border-color:#2f9e9e;border-color:rgb(47 158 158/var(--tw-border-opacity))}.btn-secondary{background-color:#ddaa97;background-color:rgb(221 170 151/var(--tw-bg-opacity));border-color:#ddaa97;border-color:rgb(221 170 151/var(--tw-border-opacity));color:#fff;color:rgb(255 255 255/var(--tw-text-opacity));transition-duration:.3s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn-secondary,.btn-secondary:hover{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1}.btn-secondary:hover{background-color:#edbfae;background-color:rgb(237 191 174/var(--tw-bg-opacity));border-color:#edbfae;border-color:rgb(237 191 174/var(--tw-border-opacity));color:#8a6659;color:rgb(138 102 89/var(--tw-text-opacity))}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.-bottom-1{bottom:-.25rem}.-left-3{left:-.75rem}.-left-4{left:-1rem}.-right-2{right:-.5rem}.-top-\\[1px\\]{top:-1px}.bottom-0{bottom:0}.bottom-\\[12px\\]{bottom:12px}.bottom-\\[1px\\]{bottom:1px}.bottom-\\[72px\\]{bottom:72px}.left-0{left:0}.right-0{right:0}.top-0{top:0}.top-\\[0\\.125rem\\]{top:.125rem}.top-\\[100\\%\\]{top:100%}.top-\\[100px\\]{top:100px}.top-\\[2px\\]{top:2px}.top-\\[4\\%\\]{top:4%}.top-\\[60px\\]{top:60px}.top-full{top:100%}.-z-10{z-index:-10}.z-0{z-index:0}.z-10{z-index:10}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.col-span-4{grid-column:span 4/span 4}.col-span-full{grid-column:1/-1}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.my-1{margin-bottom:.25rem;margin-top:.25rem}.my-4{margin-bottom:1rem;margin-top:1rem}.-ml-1{margin-left:-.25rem}.-mt-4{margin-top:-1rem}.mb-0{margin-bottom:0}.mb-12{margin-bottom:3rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-8{margin-bottom:2rem}.ml-2{margin-left:.5rem}.ml-4{margin-left:1rem}.ml-5{margin-left:1.25rem}.ml-auto{margin-left:auto}.mr-2{margin-right:.5rem}.mt-1{margin-top:.25rem}.mt-10{margin-top:2.5rem}.mt-12{margin-top:3rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-10{height:2.5rem}.h-12{height:3rem}.h-16{height:4rem}.h-\\[15\\%\\]{height:15%}.h-\\[160px\\]{height:160px}.h-\\[16px\\]{height:16px}.h-\\[200px\\]{height:200px}.h-\\[240px\\]{height:240px}.h-\\[24px\\]{height:24px}.h-\\[290px\\]{height:290px}.h-\\[300px\\]{height:300px}.h-\\[483px\\]{height:483px}.h-\\[48px\\]{height:48px}.h-\\[5\\%\\]{height:5%}.h-\\[50px\\]{height:50px}.h-\\[6\\%\\]{height:6%}.h-\\[60vh\\]{height:60vh}.h-\\[61vh\\]{height:61vh}.h-\\[70px\\]{height:70px}.h-full{height:100%}.h-screen{height:100vh}.min-h-\\[200px\\]{min-height:200px}.min-h-\\[55vh\\]{min-height:55vh}.min-h-\\[80vh\\]{min-height:80vh}.min-h-screen{min-height:100vh}.\\!w-8{width:2rem!important}.w-0{width:0}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-16{width:4rem}.w-\\[110\\%\\]{width:110%}.w-\\[130\\%\\]{width:130%}.w-\\[180px\\]{width:180px}.w-\\[233px\\]{width:233px}.w-\\[354px\\]{width:354px}.w-\\[48px\\]{width:48px}.w-\\[60\\%\\]{width:60%}.w-\\[80px\\]{width:80px}.w-full{width:100%}.min-w-\\[240px\\]{min-width:240px}.min-w-\\[40px\\]{min-width:40px}.min-w-\\[48px\\]{min-width:48px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow-0{flex-grow:0}.origin-right{transform-origin:right}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}.animate-bounce{animation:bounce 1s infinite}.cursor-pointer{cursor:pointer}.list-inside{list-style-position:inside}.list-disc{list-style-type:disc}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-10{gap:2.5rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.25rem;margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.25rem*var(--tw-space-x-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:.75rem;margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.justify-self-start{justify-self:start}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.\\!rounded{border-radius:.25rem!important}.rounded{border-radius:.25rem}.rounded-30{border-radius:30px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-none{border-radius:0}.rounded-xl{border-radius:.75rem}.rounded-bl-30{border-bottom-left-radius:30px}.rounded-bl-sm{border-bottom-left-radius:.125rem}.rounded-br-20{border-bottom-right-radius:20px}.rounded-br-30{border-bottom-right-radius:30px}.rounded-tl-20{border-top-left-radius:20px}.rounded-tl-30{border-top-left-radius:30px}.rounded-tl-60{border-top-left-radius:60px}.rounded-tl-\\[15px\\]{border-top-left-radius:15px}.rounded-tl-xl{border-top-left-radius:.75rem}.rounded-tr-30{border-top-right-radius:30px}.rounded-tr-60{border-top-right-radius:60px}.border{border-width:1px}.border-b-2{border-bottom-width:2px}.border-b-4{border-bottom-width:4px}.border-b-\\[24px\\]{border-bottom-width:24px}.border-t-2{border-top-width:2px}.border-solid{border-style:solid}.border-b-highlight{--tw-border-opacity:1;border-bottom-color:#f8cd8f;border-bottom-color:rgb(248 205 143/var(--tw-border-opacity))}.border-b-main-bg-gray{--tw-border-opacity:1;border-bottom-color:#f3f3f3;border-bottom-color:rgb(243 243 243/var(--tw-border-opacity))}.border-b-secondary{--tw-border-opacity:1;border-bottom-color:#ddaa97;border-bottom-color:rgb(221 170 151/var(--tw-border-opacity))}.border-b-transparent{border-bottom-color:transparent}.border-t-main-bg-gray{--tw-border-opacity:1;border-top-color:#f3f3f3;border-top-color:rgb(243 243 243/var(--tw-border-opacity))}.\\!bg-main-bg-gray{--tw-bg-opacity:1!important;background-color:#f3f3f3!important;background-color:rgb(243 243 243/var(--tw-bg-opacity))!important}.bg-\\[\\#34b1b1\\]{--tw-bg-opacity:1;background-color:#34b1b1;background-color:rgb(52 177 177/var(--tw-bg-opacity))}.bg-\\[\\#D9D9D9\\]{--tw-bg-opacity:1;background-color:#d9d9d9;background-color:rgb(217 217 217/var(--tw-bg-opacity))}.bg-\\[\\#F6F6F6\\]{--tw-bg-opacity:1;background-color:#f6f6f6;background-color:rgb(246 246 246/var(--tw-bg-opacity))}.bg-black\\/20{background-color:rgba(0,0,0,.2)}.bg-danger-light{--tw-bg-opacity:1;background-color:#fef0f0;background-color:rgb(254 240 240/var(--tw-bg-opacity))}.bg-highlight{--tw-bg-opacity:1;background-color:#f8cd8f;background-color:rgb(248 205 143/var(--tw-bg-opacity))}.bg-main-bg-dark{--tw-bg-opacity:1;background-color:#4a4d52;background-color:rgb(74 77 82/var(--tw-bg-opacity))}.bg-main-bg-gray{--tw-bg-opacity:1;background-color:#f3f3f3;background-color:rgb(243 243 243/var(--tw-bg-opacity))}.bg-main-bg-white{--tw-bg-opacity:1;background-color:#fdfdfd;background-color:rgb(253 253 253/var(--tw-bg-opacity))}.bg-main-bg-white\\/90{background-color:hsla(0,0%,99%,.9)}.bg-primary{--tw-bg-opacity:1;background-color:#34b1b1;background-color:rgb(52 177 177/var(--tw-bg-opacity))}.bg-primary\\/80{background-color:rgba(52,177,177,.8)}.bg-secondary{--tw-bg-opacity:1;background-color:#ddaa97;background-color:rgb(221 170 151/var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:#fff;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-fill{-o-object-fit:fill;object-fit:fill}.object-center{-o-object-position:center;object-position:center}.p-2{padding:.5rem}.p-4{padding:1rem}.px-0{padding-left:0;padding-right:0}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-12{padding-bottom:3rem;padding-top:3rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-2{padding-bottom:.5rem}.pb-24{padding-bottom:6rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-12{padding-left:3rem}.pl-4{padding-left:1rem}.pl-8{padding-left:2rem}.pr-2{padding-right:.5rem}.pr-6{padding-right:1.5rem}.pr-8{padding-right:2rem}.pt-12{padding-top:3rem}.pt-16{padding-top:4rem}.pt-2{padding-top:.5rem}.pt-6{padding-top:1.5rem}.pt-\\[95px\\]{padding-top:95px}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-extralight{font-weight:200}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.leading-relaxed{line-height:1.625}.tracking-normal{letter-spacing:0}.tracking-wide{letter-spacing:.025em}.tracking-wider{letter-spacing:.05em}.tracking-widest{letter-spacing:.1em}.text-\\[\\#3F3E3E\\]{--tw-text-opacity:1;color:#3f3e3e;color:rgb(63 62 62/var(--tw-text-opacity))}.text-\\[\\#8A6659\\]{--tw-text-opacity:1;color:#8a6659;color:rgb(138 102 89/var(--tw-text-opacity))}.text-danger{--tw-text-opacity:1;color:#f56c6c;color:rgb(245 108 108/var(--tw-text-opacity))}.text-main-bg-dark{--tw-text-opacity:1;color:#4a4d52;color:rgb(74 77 82/var(--tw-text-opacity))}.text-main-bg-white{--tw-text-opacity:1;color:#fdfdfd;color:rgb(253 253 253/var(--tw-text-opacity))}.text-main-dark{--tw-text-opacity:1;color:#3f3e3e;color:rgb(63 62 62/var(--tw-text-opacity))}.text-main-gray{--tw-text-opacity:1;color:#d9d9d9;color:rgb(217 217 217/var(--tw-text-opacity))}.text-primary{--tw-text-opacity:1;color:#34b1b1;color:rgb(52 177 177/var(--tw-text-opacity))}.text-red-400{--tw-text-opacity:1;color:#f87171;color:rgb(248 113 113/var(--tw-text-opacity))}.text-secondary{--tw-text-opacity:1;color:#ddaa97;color:rgb(221 170 151/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.\\!opacity-20{opacity:.2!important}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-80{opacity:.8}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 1px 2px 0 rgba(0,0,0,.05);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.drop-shadow-\\[2px_2px_1px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.25\\)\\]{--tw-drop-shadow:drop-shadow(2px 2px 1px rgba(0,0,0,.25));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) drop-shadow(2px 2px 1px rgba(0,0,0,.25));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.drop-shadow-\\[3px_3px_2px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.25\\)\\]{--tw-drop-shadow:drop-shadow(3px 3px 2px rgba(0,0,0,.25));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) drop-shadow(3px 3px 2px rgba(0,0,0,.25))}.drop-shadow-\\[3px_3px_2px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.25\\)\\],.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur:blur(4px);-webkit-backdrop-filter:blur(4px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:blur(4px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.\\!transition-all{transition-duration:.15s!important;transition-property:all!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.delay-100{transition-delay:.1s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}body{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:#fdfdfd;background-color:rgb(253 253 253/var(--tw-bg-opacity));color:#3f3e3e;color:rgb(63 62 62/var(--tw-text-opacity));overflow-x:hidden;width:100vw}h1{font-size:1.875rem;font-weight:700;letter-spacing:.05em;line-height:2.25rem;line-height:1.25}@media (min-width:768px){h1{font-size:60px}}p{font-size:1rem;letter-spacing:.025em;line-height:1.5rem;line-height:1.625;margin-bottom:.5rem}h2{font-size:1.25rem;font-weight:600;letter-spacing:.05em;line-height:1.75rem;line-height:1.375;margin-bottom:.5rem}@media (min-width:768px){h2{font-size:1.5rem;line-height:2rem;line-height:1.625}}h3{font-size:1.25rem;font-weight:600;letter-spacing:.05em;line-height:1.75rem;line-height:1.375}@media (min-width:768px){h3{line-height:1.625}}@media (min-width:1024px){h3{font-size:1.875rem;line-height:2.25rem}}h4{font-size:1.125rem;font-weight:600;letter-spacing:.025em;line-height:1.75rem}@media (min-width:768px){h4{font-size:1.25rem;line-height:1.75rem}}@media screen and (min-width:1440px){.container{max-width:1280px}}.first-letter\\:text-\\[36px\\]:first-letter{font-size:36px}.marker\\:text-primary ::marker{color:#34b1b1}.marker\\:text-primary::marker{color:#34b1b1}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:-right-0:after{content:var(--tw-content);right:0}.after\\:top-3:after{content:var(--tw-content);top:.75rem}.after\\:mx-2:after{content:var(--tw-content);margin-left:.5rem;margin-right:.5rem}.after\\:content-\\[\\'\\>\\'\\]:after{--tw-content:">";content:">";content:var(--tw-content)}.after\\:content-abstractwaves:after{--tw-content:url(` + __buildAssetsURL("abstract-waves.223d89b0.svg") + ");content:url(" + __buildAssetsURL("abstract-waves.223d89b0.svg") + ");content:var(--tw-content)}.last\\:mb-0:last-child{margin-bottom:0}.hover\\:-translate-y-1:hover{--tw-translate-y:-0.25rem;transform:translate(var(--tw-translate-x),-.25rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:-translate-y-1:hover,.hover\\:transform:hover{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-main-bg-gray:hover{--tw-bg-opacity:1;background-color:#f3f3f3;background-color:rgb(243 243 243/var(--tw-bg-opacity))}.hover\\:bg-main-gray:hover{--tw-bg-opacity:1;background-color:#d9d9d9;background-color:rgb(217 217 217/var(--tw-bg-opacity))}.hover\\:text-\\[\\#8A6659\\]:hover{--tw-text-opacity:1;color:#8a6659;color:rgb(138 102 89/var(--tw-text-opacity))}.hover\\:text-main-bg-white:hover{--tw-text-opacity:1;color:#fdfdfd;color:rgb(253 253 253/var(--tw-text-opacity))}.hover\\:text-primary:hover{--tw-text-opacity:1;color:#34b1b1;color:rgb(52 177 177/var(--tw-text-opacity))}.hover\\:text-secondary-dark:hover{--tw-text-opacity:1;color:#8a6659;color:rgb(138 102 89/var(--tw-text-opacity))}.group:hover .group-hover\\:border-b-\\[\\#2f9e9e\\]{--tw-border-opacity:1;border-bottom-color:#2f9e9e;border-bottom-color:rgb(47 158 158/var(--tw-border-opacity))}.group:hover .group-hover\\:opacity-95{opacity:.95}@media (min-width:640px){.sm\\:col-span-3{grid-column:span 3/span 3}.sm\\:mt-0{margin-top:0}.sm\\:block{display:block}.sm\\:flex{display:flex}.sm\\:w-2\\/3{width:66.666667%}.sm\\:flex-row{flex-direction:row}.sm\\:items-start{align-items:flex-start}.sm\\:justify-between{justify-content:space-between}.sm\\:justify-around{justify-content:space-around}}@media (min-width:768px){.md\\:absolute{position:absolute}.md\\:relative{position:relative}.md\\:z-0{z-index:0}.md\\:z-50{z-index:50}.md\\:col-span-2{grid-column:span 2/span 2}.md\\:mb-0{margin-bottom:0}.md\\:ml-0{margin-left:0}.md\\:ml-3{margin-left:.75rem}.md\\:ml-6{margin-left:1.5rem}.md\\:mr-3{margin-right:.75rem}.md\\:mt-0{margin-top:0}.md\\:mt-12{margin-top:3rem}.md\\:mt-2{margin-top:.5rem}.md\\:mt-3{margin-top:.75rem}.md\\:block{display:block}.md\\:inline-block{display:inline-block}.md\\:inline{display:inline}.md\\:flex{display:flex}.md\\:inline-flex{display:inline-flex}.md\\:grid{display:grid}.md\\:hidden{display:none}.md\\:h-20{height:5rem}.md\\:h-\\[100vh\\]{height:100vh}.md\\:h-\\[115px\\]{height:115px}.md\\:h-\\[172px\\]{height:172px}.md\\:h-\\[200px\\]{height:200px}.md\\:h-\\[304px\\]{height:304px}.md\\:h-\\[423px\\]{height:423px}.md\\:h-\\[60px\\]{height:60px}.md\\:h-\\[8\\%\\]{height:8%}.md\\:h-\\[90px\\]{height:90px}.md\\:h-auto{height:auto}.md\\:min-h-\\[519px\\]{min-height:519px}.md\\:w-1\\/2{width:50%}.md\\:w-1\\/3{width:33.333333%}.md\\:w-1\\/4{width:25%}.md\\:w-11\\/12{width:91.666667%}.md\\:w-2\\/3{width:66.666667%}.md\\:w-20{width:5rem}.md\\:w-4\\/5{width:80%}.md\\:w-40{width:10rem}.md\\:w-\\[116px\\]{width:116px}.md\\:w-\\[354px\\]{width:354px}.md\\:w-\\[60px\\]{width:60px}.md\\:w-auto{width:auto}.md\\:w-full{width:100%}.md\\:flex-row{flex-direction:row}.md\\:items-start{align-items:flex-start}.md\\:items-center{align-items:center}.md\\:gap-2{gap:.5rem}.md\\:gap-3{gap:.75rem}.md\\:space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.25rem;margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.25rem*var(--tw-space-x-reverse))}.md\\:rounded-none{border-radius:0}.md\\:rounded-b{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.md\\:rounded-bl-60{border-bottom-left-radius:60px}.md\\:rounded-br-60{border-bottom-right-radius:60px}.md\\:rounded-tl-30{border-top-left-radius:30px}.md\\:rounded-tl-60{border-top-left-radius:60px}.md\\:rounded-tr-60{border-top-right-radius:60px}.md\\:bg-main-bg-white{--tw-bg-opacity:1;background-color:#fdfdfd;background-color:rgb(253 253 253/var(--tw-bg-opacity))}.md\\:p-0{padding:0}.md\\:p-4{padding:1rem}.md\\:px-0{padding-left:0;padding-right:0}.md\\:px-3{padding-left:.75rem;padding-right:.75rem}.md\\:px-4{padding-left:1rem;padding-right:1rem}.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.md\\:px-8{padding-left:2rem;padding-right:2rem}.md\\:py-0{padding-bottom:0;padding-top:0}.md\\:py-10{padding-bottom:2.5rem;padding-top:2.5rem}.md\\:py-12{padding-bottom:3rem;padding-top:3rem}.md\\:py-2{padding-bottom:.5rem;padding-top:.5rem}.md\\:py-6{padding-bottom:1.5rem;padding-top:1.5rem}.md\\:pb-16{padding-bottom:4rem}.md\\:pb-4{padding-bottom:1rem}.md\\:pr-4{padding-right:1rem}.md\\:pt-4{padding-top:1rem}.md\\:pt-8{padding-top:2rem}.md\\:pt-\\[55px\\]{padding-top:55px}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\\:opacity-100{opacity:1}.md\\:shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.md\\:shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:0 0 #0000,0 0 #0000,0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.md\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 1px 2px 0 rgba(0,0,0,.05);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.md\\:first-letter\\:text-7xl:first-letter{font-size:4.5rem;line-height:1}.md\\:after\\:-right-12:after{content:var(--tw-content);right:-3rem}}@media (min-width:1024px){.lg\\:col-span-2{grid-column:span 2/span 2}.lg\\:inline-block{display:inline-block}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:min-h-\\[45vh\\]{min-height:45vh}.lg\\:w-2\\/3{width:66.666667%}.lg\\:w-3\\/4{width:75%}.lg\\:gap-4{gap:1rem}.lg\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.5rem;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.5rem*var(--tw-space-x-reverse))}.lg\\:p-4{padding:1rem}.lg\\:py-24{padding-bottom:6rem;padding-top:6rem}.lg\\:pb-14{padding-bottom:3.5rem}.lg\\:pt-14{padding-top:3.5rem}.lg\\:pt-24{padding-top:6rem}}";
export {
  tailwind as default
};
//# sourceMappingURL=css-styles-1.mjs-ff6ae177.js.map