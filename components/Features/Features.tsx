import React from 'react';
import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, Container } from '@mantine/core';
import { ReceiptOff, Flame, CircleDotted, FileCode, Man, Fingerprint } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  button: {
    color: '#1b1b1b',
  }
}));

const features = [
  {
    icon: ReceiptOff,
    title: 'Darmowy',
    description: 'Podstawa uploadera jest w 100% darmowa, każdy użytkownik może z niego korzystać bez żadnych kosztów.',
  },
  {
    icon: FileCode,
    title: 'Zoptymalizowany',
    description: 'Smth.pics to projekt stworzony tak, aby był przyjazny Tobie oraz działał bez żadnych najszybciej jak to możliwe.',
  },
  {
    icon: Man,
    title: 'Moderacja',
    description:
      'Nasza moderacja to doświadczony zespół, który w razie problemów lub jakichkolwiek pytań zawsze Ci pomoże.',
  },
  {
    icon: Fingerprint,
    title: 'Bezpieczeństwo',
    description:
      'Nasz hosting jest ponad przeciętnie bezpieczny, szyfrowane hasła, najbezpieczniejsza metoda generowania tokenów, wyizolowana sieć to dopiero podstawa 😎',
  },
];

export function Features() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: '#fcef7c', to: '#faeb64' }}
      >
        <feature.icon size={26}  color={'#1b1b1b'}/>
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container size={1400}>
        <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Jedna aplikacja, tyle możliwości 😱
          </Title>
          <Text color="dimmed">
            Po prawej stronie znajdują się nasze mocne strony, przekonaj się sam!
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: '#fcef7c', to: '#faeb64' }}
            size="lg"
            radius="md"
            mt="xl"
            className={classes.button}
          >
            Zarejestruj się
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
    </Container>
  );
}