import React from 'react'

const styles = {
    bodyMain: `w-screen h-screen`
}

function Layout({ children }) {

  return (
    <div className={styles.bodyMain}>{children}</div>
  )
}

export default Layout