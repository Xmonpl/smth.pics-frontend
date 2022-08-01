import { HeaderCustom } from "../components/Header/Header";
import { Text } from '@mantine/core';
import { LoginInit } from "../components/Login/Login";

export default function Login() {
    return (
        <>
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
            <Text
            component="h1"
            align="center"
            variant="gradient"
            gradient={{ deg: 133, from: '#fcef7c', to: '#faeb64' }}
            size="xl"
            style={{ fontSize: 32 }}
            weight={700}
            >
            Logowanie
            </Text>
            <LoginInit />
        </>
  );
}