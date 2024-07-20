import { Card } from '@/components/ui/card';
import Feed from './feed';
import Sidebar from './sidebar';
import './style.css';
import { ScrollArea } from '@/components/ui/scroll-area';
import TasksView from './tasks';

export default function Home() {
  const latest_tasks = [
    {
      id: 1, // Unique ID
      duration: '1 Jun — 5 Jun',
      title: 'Homepage',
      description: 'Create a modern, visually appealing, and responsive homepage design that captures user attention.',
      points: '16pts',
      budget: '$1,500 estimate',
      teams: [
        { id: 0 },
        { id: 1 },
        { id: 2 },
      ],
    },
    {
      id: 2, // Unique ID
      duration: '4 Jun — 6 Jun',
      title: 'Implement Authentication',
      description: 'Develop robust user login and registration functionalities, ensuring security and ease of use.',
      points: '8pts',
      budget: '$800 estimate',
      teams: [
        { id: 0 },
        { id: 1 },
        { id: 2 },
      ],
    },
  ];

  return (
    <main className="main-container">
      <div className='side-bar-layout'>
        <Sidebar />
      </div>

      <div className='feed-layout'>
        <Feed />
      </div>

      <div className='body-layout'>
        <div className='body-top-bar'>
          <h3>Echoverse</h3>
          <Card className='body-top-bar-description' style={{fontSize:'10.6px',height:'80px',padding:'10px'}}>
            EchoVerse is an experimental project aiming to create an immersive audio experience through collaborative soundscapes. 
            Participants contribute various sounds, from everyday noises to musical snippets.
          </Card>
        </div>

        <div className='task-view'>
          <p style={{ fontWeight: 'bold', fontSize: '12px', fontFamily: 'sans-serif' }}>This week’s tasks</p>
          <ScrollArea style={{ display: 'grid', gridTemplateColumns: '1fr', gridGap: '20px' }}>
            {latest_tasks.map((value) => (
              <TasksView key={value.id} prop={value} />
            ))}
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
