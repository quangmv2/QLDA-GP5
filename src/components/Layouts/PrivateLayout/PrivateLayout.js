import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import { fetchService } from "services";
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
import { ROUTE } from "constants";
import "./private-layout.scss";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../constants/auth";
import { URL_REDIRECT_LOGIN } from "../../../constants/variables";
import Loading from "../../Atoms/Loading/Loading";
import BottomNavigator from "../../Molecules/BottomNav/BottomNavigator";
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
        this.redirectLogin = this.redirectLogin.bind(this);
    }

    componentDidMount() {
        const accesstoken = localStorage.getItem(ACCESS_TOKEN);
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        const { verifyTokenFnc, userInfo } = this.props;
        if (accesstoken && accesstoken != "") {
            fetchService.addTokenHeader({ access_token: accesstoken });
            verifyTokenFnc(accesstoken, refreshToken);
        }

        else {
            this.redirectLogin();
        }
    }

    redirectLogin = () => {
        const { history, location } = this.props;
        history.push(ROUTE.LOGIN);
    };

    componentDidUpdate(prevProps) {
        const { isLogged, logout, userInfo } = this.props;
        if (prevProps.isLogged === isLogged) return false;
        if (!isLogged) {
            if (!logout) localStorage.setItem(URL_REDIRECT_LOGIN, location.pathname);
            this.redirectLogin();
        }
        if (userInfo && userInfo.roles && userInfo.roles.length < 1) {
            this.props.history.push(ROUTE.CHOOSEROLE);
        }
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
