import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

const Dashboard = () => {
    return (
        <>
            <DashHeader />
            <Outlet />
                {/* This outlet should contain the Dashboard page, Profile, List, and Search page */}
            <DashFooter />
        </>
    )
}
export default Dashboard