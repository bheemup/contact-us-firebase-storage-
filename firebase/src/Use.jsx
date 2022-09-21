import React from 'react'

function Use({item,count1}) {
  
  return (
    <tr>
      <td>{count1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.mobile}</td>
      <td>{item.query}</td>
    </tr>
  )
}

export default Use