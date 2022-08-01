import { Button, Container, createStyles, Group, PasswordInput, Text, Anchor, TextInput, Center } from "@mantine/core";
import { BrandDiscord, Login } from "tabler-icons-react";

const classes = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: 120,
        paddingBottom: 80,
    
        '@media (max-width: 755px)': {
          paddingTop: 80,
          paddingBottom: 60,
        },
      },
}))
export function LoginInit() {
    return (
        <>
            <Center>
            <Container className={classes.wrapper} size={750}>
            <TextInput 
            label="E-mail lub Nazwa użytkownika"
            placeholder='Twoj E-mail lub nazwa użytkownika'
            required
            />
            <Group position="apart" mb={5}>
                    <Text component="label" htmlFor="your-password" size="sm" weight={500}>
                        Hasło
                    </Text>

                    <Anchor<'a'>
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    sx={(theme) => ({
                        paddingTop: 2,
                        color: '#fcef7c',
                        fontWeight: 500,
                        fontSize: theme.fontSizes.xs,
                    })}
                    >
                    Zapomniałeś hasła?
                    </Anchor>
                </Group>
                <PasswordInput placeholder="Twoje hasło" id="your-password"/>
            <Group position="center" sx={{ padding: 15 }}>
            <Button leftIcon={<Login />} variant="default" color="gray">
            <Text size="sm">Zaloguj sie poprzez Email lub Nick</Text>
            </Button>
            <Button
                leftIcon={<BrandDiscord />}
                sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? '#5865F2' : '#7289da',
                '&:hover': {
                    backgroundColor:
                    theme.colorScheme === 'dark'
                        ? theme.fn.lighten('#5865F2', 0.05)
                        : theme.fn.darken('#7289da', 0.05),
                },
                })}
            >
                <Text size="sm">Zaloguj sie poprzez konto Discord</Text>
            </Button>
            </Group>
            </Container></Center>
        </>
    )
}