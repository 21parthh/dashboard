import React, { useState } from 'react';
import { UnstyledButton, Tooltip, Title, rem } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconArrowBarLeft,
} from '@tabler/icons-react';
import classes from './DoubleNavbar.module.css';

export function DoubleNavbar() {
  const [active, setActive] = useState('Dashboard'); // Set default active component to 'Dashboard'
  const [activeLink, setActiveLink] = useState('Settings');
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className={`${classes.navbar} ${collapsed ? classes.collapsed : ''}`}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            {/* <MantineLogo type="mark" size={30} /> */}
          </div>
          <Tooltip label="Home" position="right" withArrow transitionProps={{ duration: 0 }}>
            <UnstyledButton
              onClick={() => setActive('Home')}
              className={classes.mainLink}
              data-active={active === 'Home' || undefined}
            >
              <IconHome2 style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
            </UnstyledButton>
          </Tooltip>
          <Tooltip label="Dashboard" position="right" withArrow transitionProps={{ duration: 0 }}>
            <UnstyledButton
              onClick={() => setActive('Dashboard')}
              className={classes.mainLink}
              data-active={active === 'Dashboard' || undefined}
            >
              <IconGauge style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
            </UnstyledButton>
          </Tooltip>
          <Tooltip label="Analytics" position="right" withArrow transitionProps={{ duration: 0 }}>
            <UnstyledButton
              onClick={() => setActive('Analytics')}
              className={classes.mainLink}
              data-active={active === 'Analytics' || undefined}
            >
              <IconDeviceDesktopAnalytics style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
            </UnstyledButton>
          </Tooltip>
          <Tooltip label="Releases" position="right" withArrow transitionProps={{ duration: 0 }}>
            <UnstyledButton
              onClick={() => setActive('Releases')}
              className={classes.mainLink}
              data-active={active === 'Releases' || undefined}
            >
              <IconCalendarStats style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
            </UnstyledButton>
          </Tooltip>
          <Tooltip label="Account" position="right" withArrow transitionProps={{ duration: 0 }}>
            <UnstyledButton
              onClick={() => setActive('Account')}
              className={classes.mainLink}
              data-active={active === 'Account' || undefined}
            >
              <IconUser style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
            </UnstyledButton>
          </Tooltip>
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            <span style={{ position: 'absolute', left: '20px' }}>Logo</span>
            <span style={{ position: 'absolute', left: '180px' }}><IconArrowBarLeft/></span>
          </Title>
          <a
            className={classes.link}
            data-active={activeLink === 'Dashboard' || undefined}
            href="#"
            onClick={(event) => {
              event.preventDefault();
              setActiveLink('Dashboard');
            }}
          >
            Dashboard
          </a>
          <a
            className={classes.link}
            data-active={activeLink === 'Portfolio' || undefined}
            href="#"
            onClick={(event) => {
              event.preventDefault();
              setActiveLink('Portfolio');
            }}
          >
            Portfolio
          </a>
          <a
            className={classes.link}
            data-active={activeLink === 'Membership & Services' || undefined}
            href="#"
            onClick={(event) => {
              event.preventDefault();
              setActiveLink('Membership & Services');
            }}
            style={{ wordBreak: 'break-word', hyphens: 'auto' }}
          >
            Membership
          </a>
          <a
            className={classes.link}
            data-active={activeLink === 'Orders' || undefined}
            href="#"
            onClick={(event) => {
              event.preventDefault();
              setActiveLink('Orders');
            }}
          >
            Buy & Sell
          </a>
          <a
            className={classes.link}
            data-active={activeLink === 'Orders' || undefined}
            href="#"
            onClick={(event) => {
              event.preventDefault();
              setActiveLink('Orders');
            }}
          >
            Knowledge
          </a>
          <div className={classes.bottomLinks}>
            <a
              className={classes.link}
              data-active={activeLink === 'Settings' || undefined}
              href="#"
              onClick={(event) => {
                event.preventDefault();
                setActiveLink('Settings');
              }}
            >
              <IconSettings style={{ width: rem(22), height: rem(22), marginRight: '8px' }} stroke={1.5} />
              Settings
            </a>
            <a
              className={classes.link}
              data-active={activeLink === 'Logout' || undefined}
              href="#"
              onClick={(event) => {
                event.preventDefault();
                setActiveLink('Logout');
              }}
            >
              <IconLogout style={{ width: rem(22), height: rem(22), marginRight: '8px' }} stroke={1.5} />
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
