import { useState } from "react"
import { Card, Title, Pagination, Group } from "@mantine/core";
import { usePagination } from "@mantine/hooks";

export const ReposList = ({repos, style}) => {
    const total = Math.ceil(repos.length /4);
    const [currentRepos, setRepos] = useState(repos.slice(0,4));
    const pagination = usePagination({
        total: total,
        initialPage: 1,
        onChange: (currentPage) => {
            const start = (currentPage - 1) * 4;
            const end = start + 4;
            setRepos(repos.slice(start, end));
        }
    })
    
    return (
        <div style={{...style,maxWidth: 877, }}>

            <div style={{height: 520}}>
                {
                      currentRepos.map(repo=>(
                        <Card key={repo.id} mb={24} h={112} px={32} py={24} radius={6}>
                            <a href={repo.html_url} style={{display: "inline-block",marginBottom: 12}}>
                                <Title order={3} weight={500} size={24} color='var(--primary-color)' >{repo.name}</Title>
                            </a>
                            <Title order={4} fz='1rem' weight={400}>{repo.description}</Title>
                        </Card>
                    ))
                }
                </div>
              
<Group position="right">
            <Pagination 
            mt={24}
                value={pagination.active}
                onChange={pagination.setPage}
                total={total}
                noWrap
                styles={{
                    control: {
                        background: 'transparent',
                        border: 'transparent',
                        fontFamily: 'var(--fonts)',
                        fontSize: 14,
                        fontWeight: 400,
                        height: '25px',
                        minWidth: '21px',
                        padding: '2px 6px 2px 6px',
                        color: 'var(--secondary-color)',
                        '&[data-active]': {
                            backgroundColor: 'var(--primary-color)',
                        },
                        '&>svg:hover': {
                            '&>path': {
                                fill: 'var(--primary-color)'
                            }
                        },
                        '&:not([data-active]):hover': {
                            color: 'var(--primary-color)'
                        }
                    },
                }}
            />
            </Group>
        </div>
  )
}
