import React from 'react';
import { createStyles, Image, Accordion, Grid, Col, Container, Title } from '@mantine/core';
import image from './image.svg';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
  },
}));

const placeholder =
  'Chuj wam w dupe';

export function Faq() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="lg" mt={50}>
        <Grid id="faq-grid" gutter={50}>
          <Col span={12} md={6}>
            <Image src={image.src} alt="Frequently Asked Questions" />
          </Col>
          <Col span={12} md={6}>
            <Title order={2} align="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion iconPosition="right" initialItem={0}>
              <Accordion.Item label="Jak zresetować hasło?" className={classes.item}>
                {placeholder}
              </Accordion.Item>
              <Accordion.Item label="Ile mam na start miejsca?" className={classes.item}>
                {placeholder}
              </Accordion.Item>
              <Accordion.Item
                label="Czy moje dane są bezpieczne?"
                className={classes.item}
              >
                {placeholder}
              </Accordion.Item>
              <Accordion.Item
                label="Mam problem z oprogramowaniem Sharex"
                className={classes.item}
              >
                {placeholder}
              </Accordion.Item>
              <Accordion.Item
                label="Mam problem z płatnością"
                className={classes.item}
              >
                {placeholder}
              </Accordion.Item>
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}