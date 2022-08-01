import React, { useState, useRef } from 'react';
import { Autocomplete, Loader, Text, Center, Box, Progress, PasswordInput, Group, Container, createStyles, TextInput } from '@mantine/core';
import { Check, X } from 'tabler-icons-react';
import { useInputState } from '@mantine/hooks';
import {ButtonProgress} from '../RegisterButton/RegisterButton'

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
    return (
      <Text color={meets ? 'teal' : 'red'} mt={5} size="sm">
        <Center inline>
          {meets ? <Check size={14} /> : <X size={14} />}
          <Box ml={7}>{label}</Box>
        </Center>
      </Text>
    );
  }
  
  const requirements = [
    { re: /[0-9]/, label: 'Zawiera cyfry' },
    { re: /[a-z]/, label: 'Zawiera małe litery' },
    { re: /[A-Z]/, label: 'Zawiera duże litery' },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Zawiera symbol specjalny' },
  ];
  
  function getStrength(password: string) {
    let multiplier = password.length > 5 ? 0 : 1;
  
    requirements.forEach((requirement) => {
      if (!requirement.re.test(password)) {
        multiplier += 1;
      }
    });
  
    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
  }

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

export function RegisterInit() {
  const timeoutRef = useRef<number>(-1);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const [valuee, setValuee] = useInputState('');
  const strength = getStrength(valuee);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(valuee)} />
  ));
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ bar: { transitionDuration: '0ms' } }}
        value={
          valuee.length > 0 && index === 0 ? 100 : strength >= ((index + 1) / 4) * 100 ? 100 : 0
        }
        color={strength > 80 ? 'teal' : strength > 50 ? 'yellow' : 'red'}
        key={index}
        size={4}
      />
    ));
  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0 || val.includes('@')) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
      }, 250);
    }
  };
  return (
      <>
      <Container className={classes.wrapper} size={500}>
      <Autocomplete
      value={value}
      data={data}
      onChange={handleChange}
      rightSection={loading ? <Loader size={16} /> : null}
      label="Adres E-mail"
      placeholder="Twój E-mail"
      required
    />
    <TextInput 
    label="Nazwa użytkownika"
    placeholder='Twoja nazwa użytkownika'
    required
    />
    <TextInput 
    label="Kod zaproszeniowy"
    placeholder='Twój kod zaproszeniowy'
    required
    />
    <div>
      <PasswordInput
        value={valuee}
        onChange={setValuee}
        placeholder="Twoje hasło"
        label="Hasło"
        required
      />

      <Group spacing={5} grow mt="xs" mb="md">
        {bars}
      </Group>

      <PasswordRequirement label="Ma co najmniej 6 znaków" meets={valuee.length > 5} />
      {checks}
    </div>

    <ButtonProgress />
    </Container>
      </>
    
    
  );
}