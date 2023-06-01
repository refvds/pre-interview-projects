import {  Center, Text } from '@mantine/core'

export const InfoState = ({icon, info}) => {
  return (
      <Center h={560} mx='auto' w={243}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: 243, color: 'var(--secondary-color)'}}>
            <img src={icon} alt='icon'/>
            <Text align='center' mt={40} fz={22} weight={400}>{info}</Text>   
        </div>
        </Center>
  )
}
