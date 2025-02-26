import React from 'react'
import Page1 from './Page1'
import P2p1 from './P2p1'
import P2p2 from './P2p2'

function Content({store}) {

     function Page(){
          switch(store.getState()){
               case "Page1":
                    return (<div><Page1 store={store} /> </div>)
               case "P2p1":
                    return (<div><P2p1 store={store} /></div>)
               case "P2p2":
                         return (<div><P2p2 store={store} /></div>)
               default:
                    return (<div><Page1 store={store} /> </div>)
          }
     }

  return (
    <div>

          <Page />


    </div>
  )
}

export default Content