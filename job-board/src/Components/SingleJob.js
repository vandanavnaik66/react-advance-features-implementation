import React from 'react'

export const SingleJob = ({by,time,title,url}) => {
    const timeFormat= new Date(time*1000).toLocaleString();
  return (
    <div className='single-job-container'>
        <h4>
            <a href={url}
             target='_blank'
            className={url ? "" : "inActiveUrl"}>{title} </a></h4>
        <span>By ${by} . ${timeFormat}</span>
    </div>
  )
}
