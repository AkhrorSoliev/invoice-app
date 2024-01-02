import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      {/* NAVBAR */}
      <Outlet />
      {/* FOOTER */}
    </div>
  )
}

export default RootLayout
