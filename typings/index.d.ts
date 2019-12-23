/// <reference types="react" />
/// <reference types="react-dom" />





declare module '*.js' {
   
  const src: string;
  export default src;
}

declare module '*.jsx' {
   
    const src: string;
    export default src;
  }

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
  }
  
