import HomeHeader from './HomeHeader'
import DashFooter from './DashFooter'
import Home from './Home'

const HomeContainer = () => {
    return (
        <>
            {/* Render the Header and Body for the Home page when the User is not logged in */}
            <HomeHeader />
            <Home />
            <DashFooter />
        </>
    )
}
export default HomeContainer