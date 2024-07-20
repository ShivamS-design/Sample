import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import './style.css';
import { FaPlus } from 'react-icons/fa6';

interface TaskTeamAvatarProps {
    left: number; // Define the type for 'left' prop
}

export default function TaskTeamAvatar({ left }: TaskTeamAvatarProps) {
    return (
        <Avatar 
            className='w-[18px] h-[18px] mt-[0px]' 
            style={{
                backgroundColor: 'whitesmoke',
                marginLeft: `${left}px`,
                borderRadius: '100px',
                position: 'absolute',
                border: '1px solid gray'
            }}
        >
            <AvatarImage style={{borderRadius:'100px'}} src="https://github.com/shadcn.png" alt="user chat icon" />
            {left === 20 ? (
                <AvatarFallback style={{ padding: '1.5px' }}>
                    <FaPlus style={{ transform: 'scale(0.7,0.7)' }} />
                </AvatarFallback>
            ) : (
                <div />
            )}
        </Avatar>
    );
}
