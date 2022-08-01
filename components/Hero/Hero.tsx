import React from 'react';
import { createStyles, Title, Text, Button, Container, useMantineTheme, Center } from '@mantine/core';
import { Dots } from './Dots';
import { SmthLogo } from '../SmthLogo/SmthLogo';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 120,
    paddingBottom: 80,

    '@media (max-width: 755px)': {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    '@media (max-width: 755px)': {
      display: 'none',
    },
  },

  primaryColor: {
    color: '#fcef7c'
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    '@media (max-width: 520px)': {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
      backgroundColor: '#fcef7c',
      color: '#1b1b1b'
    },

    '@media (max-width: 520px)': {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Center>
        <SmthLogo />
        </Center>
        <Title className={classes.title}>
          Hosting{' '}
          <Text component="span" className={classes.primaryColor} inherit>
            plików, zdjęć
          </Text>{' '}
          dla każdego!
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Tworzymy dla naszych użytkowników, w 100% darmową możliwość hostowania plików! W ciekawy, sposób.. Przetestuj sam!
          </Text>
        </Container>

        <div className={classes.controls}>
          <Link href={'/login'}>
            <Button className={classes.control} size="lg" variant="default" color="gray">
              Zaloguj się
            </Button>
          </Link>
          <Link href={'/register'}>
            <Button className={classes.control} size="lg">
              Zarejestruj się
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}