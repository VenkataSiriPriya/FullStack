import React from 'react'

function P2p2({store}) {
    function navigation(event){
        store.dispatch({"type":"page","data":event.currentTarget.getAttribute("val")})
    }
  return (
    <div>
        <a onClick={navigation} val={"Page1"}>Page 1</a>
        <a onClick={navigation} val={"P2p1"}>Page 2</a>
        <br /><br /><br />
        <a onClick={navigation} val={"Page1"}>P2-P1</a>
        <a onClick={navigation} val={"P2p2"}>P2-P2</a>
        <br /><br /><br />
        <div className='content1'>
            This is Page 2 - Page 2
        </div>
    </div>
  )
}

export default P2p2