import Header from './Header';
import Slidebar from './Sildebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Slidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
export default DefaultLayout;
