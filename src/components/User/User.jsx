import { Card, Avatar, Title, Group } from "@mantine/core"
import { compactNumber } from "../../utilities";
import followerIcon from '../../assets/icons/users-icon.svg';
import followersIcon from '../../assets/icons/user-icon.svg';

export const User = ({name, username, avatar, followers, following, link}) => {
    const formattedFollowers = compactNumber(followers);
    const formattedFollowing = compactNumber(following);
    return (
    <Card p={0}>
        <Card.Section mb={28} pt={16} pl={16}>
            <Avatar src={avatar} size={280} radius={"50%"} p={0} />
        </Card.Section>
        <Title order={2} weight={600} mb={12}>{name}</Title>
        <a style={{cursor: 'pointer'}} href={link} target="_blank"  rel="noreferrer">
        <Title order={3} weight={400} fz={18} color='var(--primary-color)' lh='22px'>{username}</Title>
        </a>
        <Group mt={32} p={0} spacing={'1.5rem'}>
            <Group p={0} spacing={'.5rem'}>
                <img src={followerIcon} alt="" />
                <Title fz={16} lh={1.5} weight={400}>
                    {formattedFollowers} followers
                </Title>
            </Group>
            <Group p={0} spacing={'.5rem'}>
                <img src={followersIcon} alt="" />
                <Title fz={16} lh={1.5} weight={400}>
                    {formattedFollowing} following
                </Title>
            </Group>
        </Group>
    </Card>
  )
}
