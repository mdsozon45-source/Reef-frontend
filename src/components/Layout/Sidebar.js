import logo200Image from '../../../src/asset/images/logo/logo_text_transparent.png';
import sidebarBgImage from '../../asset/images/sidebar/sidebar-4.jpg';
import React from 'react';
import {
  MdBorderAll,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdKeyboardArrowDown,
  MdSend,
  MdWeb,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from '../../utils/bemnames';

const sidebarBackground = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navComponents = [
  { to: '/forms', name: 'forms', exact: false, Icon: MdChromeReaderMode },
];

const navContents = [
  // { to: '/tables', name: 'tables', exact: false, Icon: MdBorderAll },
];

const navItems = [
  { to: '/', name: 'dashboard', exact: true, Icon: MdDashboard },
  { to: '/substrate', name: 'SubStrate', exact: false, Icon: MdWeb },
  { to: '/fish-invertebrates', name: 'Fish & Invertebrates', exact: false, Icon: MdWeb },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <div className="navbar-brand d-flex">
              <img
                src={logo200Image}
                width="40"
                height="30"
                className="pr-2"
                alt=""
              />
              <span className="text-white">
                Reef.io
              </span>
            </div>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            {/*<NavItem*/}
            {/*  className={bem.e('nav-item')}*/}
            {/*  onClick={this.handleClick('Components')}*/}
            {/*>*/}
            {/*  <BSNavLink className={bem.e('nav-item-collapse')}>*/}
            {/*    <div className="d-flex">*/}
            {/*      <MdExtension className={bem.e('nav-item-icon')} />*/}
            {/*      <span className=" align-self-start">COMPONENTS</span>*/}
            {/*    </div>*/}
            {/*    <MdKeyboardArrowDown*/}
            {/*      className={bem.e('nav-item-icon')}*/}
            {/*      style={{*/}
            {/*        padding: 0,*/}
            {/*        transform: this.state.isOpenComponents*/}
            {/*          ? 'rotate(0deg)'*/}
            {/*          : 'rotate(-90deg)',*/}
            {/*        transitionDuration: '0.3s',*/}
            {/*        transitionProperty: 'transform',*/}
            {/*      }}*/}
            {/*    />*/}
            {/*  </BSNavLink>*/}
            {/*</NavItem>*/}
            {/*<Collapse isOpen={this.state.isOpenComponents}>*/}
            {/*  {navComponents.map(({ to, name, exact, Icon }, index) => (*/}
            {/*    <NavItem key={index} className={bem.e('nav-item')}>*/}
            {/*      <BSNavLink*/}
            {/*        id={`navItem-${name}-${index}`}*/}
            {/*        className="text-uppercase"*/}
            {/*        tag={NavLink}*/}
            {/*        to={to}*/}
            {/*        activeClassName="active"*/}
            {/*        exact={exact}*/}
            {/*      >*/}
            {/*        <Icon className={bem.e('nav-item-icon')} />*/}
            {/*        <span className="">{name}</span>*/}
            {/*      </BSNavLink>*/}
            {/*    </NavItem>*/}
            {/*  ))}*/}
            {/*</Collapse>*/}


            {/*<NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdSend className={bem.e('nav-item-icon')} />
                  <span className="">CONTENTS</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenContents}>
              {navContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>*/}


          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
