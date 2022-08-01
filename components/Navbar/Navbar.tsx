import React, { useState } from 'react';
import { Navbar, SegmentedControl, Text, createStyles } from '@mantine/core';
import {
  Messages,
  Fingerprint,
  Settings,
  Logout,
  BrandDiscord,
  Home,
  ExternalLink,
  AppWindow,
  ColorSwatch,
  Tools,
  Photo,
  User,
  Notification,
  Language,
} from 'tabler-icons-react';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');

  return {
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    },

    title: {
      textTransform: 'uppercase',
      letterSpacing: -0.25,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: "#1a1b1e",
        color: "#fcef7c",
        [`& .${icon}`]: {
          color: "#fcef7c",
        },
      },
    },

    footer: {
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
      paddingTop: theme.spacing.md,
    },
  };
});

const tabs = {
  system: [
    { link: '', label: 'Strona głowna', icon: Home },
    { link: '', label: 'Ustawienia domeny', icon: ExternalLink },
    { link: '', label: 'Ustawienia embed', icon: ColorSwatch },
    { link: '', label: 'Ustawienia linków', icon: AppWindow },
    { link: '', label: 'Narzędzia', icon: Tools },
    { link: '', label: 'Galeria', icon: Photo },
    { link: '', label: 'Inne', icon: Settings },
  ],
  account: [
    { link: '', label: 'Profil', icon: User },
    { link: '', label: 'Ustawienia profilu', icon: Settings },
    { link: '', label: 'Bezpieczeństwo', icon: Fingerprint },
    { link: '', label: 'Logi', icon: Messages },
    { link: '', label: 'Zaproszenia', icon: Notification },
    { link: '', label: 'Język', icon: Language },
  ],
};

export function NavbarUse() {
  const { classes, cx } = useStyles();
  const [section, setSection] = useState('system');
  const [active, setActive] = useState('Strona głowna');

  const links = tabs[section].map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section>
        <Text weight={500} size="sm" className={classes.title} color="dimmed" mb="xs">
          root@Xmon.eu.org
        </Text>

        <SegmentedControl
          value={section}
          onChange={setSection}
          transitionTimingFunction="ease"
          fullWidth
          data={[
            { label: 'System', value: 'system' },
            { label: 'Konto', value: 'account' },
          ]}
        />
      </Navbar.Section>

      <Navbar.Section grow mt="xl">
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <BrandDiscord  className={classes.linkIcon} />
          <span>Discord</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <Logout className={classes.linkIcon} />
          <span>Wyloguj</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}