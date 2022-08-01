import React from 'react';
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
import { HeaderCustom } from '../components/Header/Header';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

export default function NotFoundTitle() {
  const { classes } = useStyles();
  return (<>
    <HeaderCustom links={
        [
          {"label": "Strona Główna", "link": "/"},
          {"label": "Dokumenty", "link": "/", "links": [
            {
              "label": "Prywatność", 
              "link": "/"
            },
            {
              "label": "Regulamin", 
              "link": "/"
            }
          ]
        },
        {"label": "Status", "link": "/"},
        {"label": "Serwer Discord", "link": "https://discord.gg/TgU6XrfXzg"},
        {"label": "Panel użytkownika", "link": "/"},
        ]
      } />
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>Znalazłeś sekretne miejsce.</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
      Niestety to tylko strona 404. Być może błędnie wpisałeś adres lub strona
        została przeniesiony pod inny adres URL.
      </Text>
      <Group position="center">
        <Button variant="subtle" size="md" color={'yellow'}>
        Zabierz mnie z powrotem na stronę główną
        </Button>
      </Group>
    </Container></>
  );
}