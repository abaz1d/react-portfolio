import{G as t,r as a,j as s,F as e,a as c,b as o}from"../js/index.js";function r(a){return t({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 13c0.552 0 1 0.448 1 1v1c0 0.552-0.448 1-1 1s-1-0.448-1-1v-1c0-0.552 0.448-1 1-1zM8 3c-0.552 0-1-0.448-1-1v-1c0-0.552 0.448-1 1-1s1 0.448 1 1v1c0 0.552-0.448 1-1 1zM15 7c0.552 0 1 0.448 1 1s-0.448 1-1 1h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h1zM3 8c0 0.552-0.448 1-1 1h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h1c0.552 0 1 0.448 1 1zM12.95 11.536l0.707 0.707c0.39 0.39 0.39 1.024 0 1.414s-1.024 0.39-1.414 0l-0.707-0.707c-0.39-0.39-0.39-1.024 0-1.414s1.024-0.39 1.414 0zM3.050 4.464l-0.707-0.707c-0.391-0.391-0.391-1.024 0-1.414s1.024-0.391 1.414 0l0.707 0.707c0.391 0.391 0.391 1.024 0 1.414s-1.024 0.391-1.414 0zM12.95 4.464c-0.39 0.391-1.024 0.391-1.414 0s-0.39-1.024 0-1.414l0.707-0.707c0.39-0.391 1.024-0.391 1.414 0s0.39 1.024 0 1.414l-0.707 0.707zM3.050 11.536c0.39-0.39 1.024-0.39 1.414 0s0.391 1.024 0 1.414l-0.707 0.707c-0.391 0.39-1.024 0.39-1.414 0s-0.391-1.024 0-1.414l0.707-0.707z"}},{tag:"path",attr:{d:"M8 4c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"}}]})(a)}function d(){const[t,d]=a.useState(!1),[l,n]=a.useState(!1);return a.useEffect((()=>{const t=localStorage.getItem("prefersDarkMode");t&&d(JSON.parse(t)),n(!0)}),[]),a.useEffect((()=>{l&&(localStorage.setItem("prefersDarkMode",t),document.body.classList.toggle("dark",t))}),[t,l]),s(e,{children:c("div",{onClick:()=>{d(!t)},className:"fixed right-[80px] bottom-4 z-[9999] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full p-4 text-slate-600 transition duration-300 hover:animate-pulse dark:text-slate-200",children:[s(r,{className:"sun-toggle block h-6 w-14 dark:hidden","data-aos":"fade-up","data-aos-duration":"500"}),s(o,{className:"moon-toggle hidden h-6 w-14 dark:block","data-aos":"fade-down","data-aos-duration":"500"})]})})}export{d as default};
