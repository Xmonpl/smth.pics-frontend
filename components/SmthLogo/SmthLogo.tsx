import React from 'react';
import { useMantineTheme } from '@mantine/core';
interface SmthLogoProps extends React.ComponentPropsWithoutRef<'svg'> {
  variant?: 'white' | 'default';
  width?: number;
}

export function SmthLogo({ variant = 'default', width = 110}: SmthLogoProps) {
  const theme = useMantineTheme();
  return (
    <img src={'https://cdn.discordapp.com/attachments/996844021685157982/998175918973538344/smthpicswb.png'}  width={width} />
  );
}
