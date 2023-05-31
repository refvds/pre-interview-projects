import { Container, Group, MantineProvider, Stack, Title } from "@mantine/core";
import { Header } from "../Header";
import { User } from "../User";
import { ReposList } from "../ReposList";

export const App = () => {
  return (
    <MantineProvider theme={{
      fontFamily: 'var(--fonts)',
    }}>
    <Header />
      <Container size={1274} p={0} pl={10} pr={10} mah={591}>
        <Group align="flex-start" spacing='5.5rem' noWrap h={'100%'}> 
          <User style={{flexShrink:0, backgroundColor: 'transparent'}}/> 
            <Stack style={{flexGrow:1}} spacing={28}>
              <Title order={1} size={32}>Repositories ({249})</Title>
              <ReposList repos={repos} style={{backgroundColor: 'transparent'}}/>
            </Stack>
        </Group>
        </Container>    
    </MantineProvider>
  )
}
