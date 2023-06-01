import { useState } from "react";
import { Container, Group, MantineProvider, Stack, Title } from "@mantine/core";
import { Header } from "../Header";
import { User } from "../User";
import { ReposList } from "../ReposList";
import { InfoState } from "../InfoState";
import searchIcon from '../../assets/icons/search-icon.svg';
import notFoundIcon from '../../assets/icons/not-found-icon.svg';
import emptyRepoIcon from '../../assets/icons/empty-repo-icon.svg';
import {  getUserInfo } from "../../api/dataFetch";

export const App = () => {

  const [reposState, setRepos] = useState(null);
  const [userState, setUser] = useState(null)

  const logoHandler = () => {
    setUser(null);
    setRepos(null);
  }
  
  const searchHandler = async(event) => {
    if (event.key === 'Enter'){
      setUser(null);
      setRepos(null);
      const {user, repos}= await getUserInfo(event.target.value);
      if (event.target.value === '') {
        setUser(null)
        setRepos(null);
      } else if (user.message ) {
        setUser('not-found');
        setRepos(null);
      } else if ((repos.length === 0 || repos.message)){
          setRepos(null)
      }else{
        setUser(user);
        setRepos(repos);
      }
      event.target.value = '';
      }
      
  }
  return (
    <MantineProvider theme={{
      fontFamily: 'var(--fonts)',
    }}>
    <Header searchHandler={searchHandler} logoHandler={logoHandler}/>
      <Container size={1274} p={0} pl={10} pr={10} mah={591}>
        {userState === null 
          ? <InfoState icon={searchIcon} info='Start with searching a GitHub user'/> 
          : userState === 'not-found'
          ?<InfoState icon={notFoundIcon} info='User not found'/>
          : <Group align="flex-start" spacing='5.5rem' noWrap h={'100%'}> 
              <User style={{flexShrink:0, backgroundColor: 'transparent'}} user={userState}/> 
              {reposState 
              ?<Stack style={{flexGrow:1}} spacing={28}>
               <Title order={1} size={32}>Repositories ({reposState.length})</Title>
               <ReposList repos={reposState} style={{backgroundColor: 'transparent'}}/>
              </Stack>
              :<InfoState icon={emptyRepoIcon} info='Repository list is empty'/>  
              }
            </Group> 
        }
        {  }
        </Container>    
    </MantineProvider>
  )
}
