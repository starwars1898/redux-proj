import React from 'react'

function Contents({ children }) {

  const classes = {
    contentsMainBody: `h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] w-screen content-color1`
  }

  return (
    <div className={classes.contentsMainBody}>{children}</div>
  )
}

export default Contents