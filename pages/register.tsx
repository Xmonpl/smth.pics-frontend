import { HeaderCustom } from "../components/Header/Header";
import { RegisterInit } from "../components/Register/Register";
import { Text } from '@mantine/core';

export default function Register() {
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
            Formualarz rejestracyjny
            </Text>
            <RegisterInit />
        </>
  );
}