import { Container, MantineProvider } from "@mantine/core";
import { Header } from "../Header";
import { User } from "../User";

export const App = () => {
  return (
    <MantineProvider theme={{
      fontFamily: 'var(--fonts)',
    }}>
    <Header />
      <Container size={1253} p={0}>
        <User /> 
        </Container>    
    </MantineProvider>
  )
}
