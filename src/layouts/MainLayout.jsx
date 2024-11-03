import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div>
      <h1 className='text-4xl text-center my-12 p-5 bg-green-500'>MainLayout Nav</h1>
      <Outlet></Outlet>
      <h1 className='text-4xl text-center my-12 p-5 bg-green-500'>MainLayout Footer</h1>
    </div>
  )
}

export default MainLayout
