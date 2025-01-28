// Importing Dependencies
import { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../../Routes/Routers.jsx';

const Layout = () => {
    return(
        <Fragment>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </Fragment>
    )
};
export default Layout;