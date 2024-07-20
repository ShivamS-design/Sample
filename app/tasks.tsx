"use client"

import { Card } from "@/components/ui/card";
import TaskTeamAvatar from "./task-team";

interface Team {
  id: number;
}

interface TaskProps {
  duration: string;
  title: string;
  description: string;
  points: string | number;
  budget: string | number;
  teams: Team[];
}

export default function TasksView({ prop }: { prop: TaskProps }) {
  const displayTeamAvatars = (teams: Team[]) => {
    const left_padding = [0, 10, 20];
    return teams.slice(0, 3).map((team, index) => (
      <TaskTeamAvatar key={team.id} left={left_padding[index]} />
    ));
  };

  return (
    <Card className="task-layout mt-[20px]">
      <p style={{ opacity: '0.7', fontSize: '11px', fontFamily: 'sans-serif' }}>{prop.duration}</p>
      <h5 className="mt-[9.5px]" style={{ opacity: '0.79', fontFamily: 'sans-serif', fontWeight: 'bold' }}>{prop.title}</h5>
      <p className="mt-[9.5px]" style={{ opacity: '0.5', fontFamily: 'sans-serif', fontSize: '13px' }}>
        {prop.description}
      </p>
      <div className="footer-view">
        <div className="avatar-footer-view" style={{ flex: '1', cursor: 'pointer' }}>
          {displayTeamAvatars(prop.teams)}
        </div>
        <p className="ml-[-10px]" style={{ color: 'black', fontSize: '12px', flex: '0.5', textAlign: 'left' }}>{prop.points}</p>
        <p className="ml-[-20px]" style={{ color: 'rgba(12, 140, 233, 0.8)', fontSize: '12px', flex: '0.5', textAlign: 'left' }}>{prop.budget}</p>
      </div>
    </Card>
  );
}
