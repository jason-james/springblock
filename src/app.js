import React from 'react';
import { withRouter } from 'react-router';

// Components
import { Sidebar } from './common/nav';

class AppLayout extends React.Component {
    static propTypes = {
        router: React.PropTypes.object.isRequired,
        location: React.PropTypes.shape({
            pathname: React.PropTypes.string.isRequired,
            query: React.PropTypes.object.isRequired,
        }),
    }

    render() {
        console.log(this.props.children)
        return (
            <div>
                <main className=''>
                    <Sidebar {...this.props} />
                    {/*<PageTop location={this.props.location} user={this.state.user} />*/}

                    <div className="al-main">
                        <div className="al-content">
                            {React.cloneElement(this.props.children)}
                        </div>
                    </div>

                    <footer className="al-footer clearfix">
                        <div className="al-footer-right">Created with <i className="ion-heart"></i></div>
                        <div className="al-footer-main clearfix">
                            <div className="al-copy">React Webpack Skeleton</div>
                            <ul className="al-share clearfix">
                                <li><i className="socicon socicon-facebook"></i></li>
                                <li><i className="socicon socicon-twitter"></i></li>
                                <li><i className="socicon socicon-google"></i></li>
                                <li><i className="socicon socicon-github"></i></li>
                            </ul>
                        </div>
                    </footer>

                    <back-top></back-top>
                </main>
            </div>
        );
    }
}

export default withRouter(AppLayout);