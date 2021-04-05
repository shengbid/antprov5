import React from 'react'
import Project4 from './four'

const Project3: React.Fc = (props) => {

  return <div>
    项目第三层组件
    <Project4 onSuccess={(name)=> {
      // console.log(3, name)
      props.onSuccess(name)
    }}></Project4>
  </div>
}

export default Project3