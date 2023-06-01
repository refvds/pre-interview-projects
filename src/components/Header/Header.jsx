import { Header as MantineHeader, Container, TextInput, Flex } from "@mantine/core"
import ghLogo from '../../assets/icons/gh-logo.svg';
import searchIcon from '../../assets/icons/sm-search-icon.svg';

export const Header = ({searchHandler, logoHandler}) => {
  return (
    <MantineHeader bg={'var(--primary-color)'} w={'100%'} h={72} mb={28}> 
        <Container py={16} size={1317}>
            <Flex gap={22}>
                <a onClick={logoHandler}><img src={ghLogo} /></a>
                <TextInput 
                    styles={{
                        icon: { marginLeft: 8 }, 
                        input: { height: 40, fontFamily: 'var(--fonts)', fontWeight: 400, fontSize: 14, lineHeight: 17, paddingLeft:'2.7rem!important'},
                    }} 
                    w={500} 
                    radius={6} 
                    placeholder="Enter Github username" 
                    icon={<img src={searchIcon}/>}
                    onKeyDown={(e)=> searchHandler(e)}
                />
            </Flex>
        </Container>
    </MantineHeader>
  );
}
