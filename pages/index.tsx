import { HeaderCustom } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { Features } from '../components/Features/Features';
import { Faq } from '../components/Faq/Faq';
import { StatsGrid } from '../components/Stats/Stats';
import { Icons, UserPlus } from 'tabler-icons-react';
import { Footer } from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <HeaderCustom links={
        [
          {"label": "Strona Główna", "link": "/"},
          {"label": "Dokumenty", "link": "/", "links": [
            {
              "label": "Prywatność", 
              "link": "/privacy"
            },
            {
              "label": "Regulamin", 
              "link": "/regulations"
            }
          ]
        },
        {"label": "Status", "link": "/status"},
        {"label": "Serwer Discord", "link": "https://discord.gg/TgU6XrfXzg"},
        {"label": "Panel użytkownika", "link": "/panel"},
        ]
      } />
      <Hero />
      <StatsGrid data={[
        {
          "title": "Liczba użytkowników",
          "value": "123",
          "diff": 50, 
          "icon": "user"
        },
        {
          "title": "Przesłanych plików",
          "value": "123",
          "diff": 50, 
          "icon": "user"
        },
        {
          "title": "Zarejestrowanych użytkowników",
          "value": "123",
          "diff": 50, 
          "icon": "user"
        }
      ]} />
      <Features />
      <Faq />
      <Footer data={[
        {
          "title": "Ważne linki",
          "links": [
            {"label": "Prywatność", "link": ""},
            {"label": "Regulamin", "link": ""},
            {"label": "Kontakt", "link": ""},
          ]
        },
        {
          "title": "Ważne linki",
          "links": [
            {"label": "Prywatność", "link": ""},
            {"label": "Regulamin", "link": ""},
            {"label": "Kontakt", "link": ""},
          ]
        },{
          "title": "Ważne linki",
          "links": [
            {"label": "Prywatność", "link": ""},
            {"label": "Regulamin", "link": ""},
            {"label": "Kontakt", "link": ""},
          ]
        }
      ]} />
    </>
  );
}
