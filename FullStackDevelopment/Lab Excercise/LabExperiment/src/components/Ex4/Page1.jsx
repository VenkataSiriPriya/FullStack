import React from 'react'

function Page1({store}) {
    function navigation(event){
        store.dispatch({"type":"page","data":event.currentTarget.getAttribute("val")})
    }
  return (
    <div>
        <a onClick={navigation} val={"Page1"}>Page 1</a>
        <br /><br /><br />
        <a onClick={navigation} val={"P2p1"}>Page 2</a>
        <br /><br /><br />
        <div className='content1'>
            This is Page 1234
        </div>
    </div>
  )
}

export default Page1