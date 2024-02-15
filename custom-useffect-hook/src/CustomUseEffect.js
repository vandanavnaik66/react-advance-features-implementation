import React, { useRef } from 'react'

export const CustomUseEffect = (callBackFun,dep) => {
    const firstRender=useRef(true)  //don't forget to use .current property while accessing the useRef
    const preDependency= useRef([])


    if(firstRender.current){
        firstRender.current=false;
       const cleanup= callBackFun();
        if(cleanup && typeof cleanup ==='function'){
            cleanup();
        }
    }

   const depChanged = dep? JSON.stringify(dep)!== JSON.stringify(preDependency.current) : true;

if(depChanged){
    const cleanup= callBackFun();

        if(cleanup && typeof cleanup ==='function' && dep){
            cleanup();
        }
}

preDependency.current=dep||[]

  return (
    <div>

    </div>
  )
}
