import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import {
    selectIsLogged,
    selectErrors,
    selectLoading,
    selectIsLogout,
    selectUserInfo
} from "modules/auth/selectors";
import { verifyToken } from "modules/auth/actions";
import ReactResizeDetector from "react-resize-detector";
import { createStructuredSelector } from "reselect";
import "./private-layout.scss";
import Loading from "../../Atoms/Loading/Loading";
import { NavigatorProvider } from "../../../context/BottomNavigatorContextAPI";

const { Content } = Layout;

class PrivateLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            openKeys: [],
            pathname: window.location.pathname,
            currentTabSidebar: window.location.pathname
        };
        this.interval = null;
    }

    componentDidMount() {
       
    }

    

    componentDidUpdate(prevProps) {
        
    }

    componentWillUnmount() { }

    handleResize = () => {
        const windowSize = window.innerWidth;
    };

    onResize = () => { };

    render() {
        const { children, loading } = this.props;
        if (loading) {
            return (
                <Layout id="gp-private-layout" theme="dark" className="dark">
                    <Layout>
                        <div
                            className="content-layout wide-container"
                            id="main-layout"
                        >
                            <div className="header-control"></div>
                            <ReactResizeDetector
                                handleHeight
                                handleWidth
                                onResize={this.onResize}
                            >
                                <Content className="body-wrapper">
                                    <Loading />
                                </Content>
                            </ReactResizeDetector>
                        </div>

                    </Layout>
                </Layout>
            )
        }
        return (
            <Layout id="gp-private-layout" theme="dark" className="dark">
                <Layout>
                    <div
                        className="content-layout wide-container"
                        id="main-layout"
                    >
                        <div className="header-control"></div>
                        <ReactResizeDetector
                            handleHeight
                            handleWidth
                            onResize={this.onResize}
                        >
                            <Content className="body-wrapper">
                                <NavigatorProvider>
                                    {children}
                                </NavigatorProvider>
                            </Content>
                        </ReactResizeDetector>
                    </div>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isLogged: selectIsLogged(),
    errors: selectErrors(),
    loading: selectLoading(),
    logout: selectIsLogout(),
    userInfo: selectUserInfo()
});
const mapDispatchToProps = {
    verifyTokenFnc: verifyToken,
};

export default connect(mapStateToProps, mapDispatchToProps)((PrivateLayout));
