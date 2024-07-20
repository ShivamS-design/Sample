"use client";

import { Card } from '@/components/ui/card';
import './style.css';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { FaThumbsDown, FaTruckMedical } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Progress } from '@/components/ui/progress';
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { GoTriangleRight } from "react-icons/go";
import { useState, useEffect } from 'react';

// Define types for the reactions, replies, and polls
interface Reaction {
    type: string;
    selected: boolean;
    index: number;
}

interface Reply {
    name: string;
    message: string;
}

interface Poll {
    poll_title: string;
    poll_progress: number;
    poll_check: boolean;
    poll_counter: number;
}

interface FeedbackChatsProps {
    reactions: Reaction[];
    replies: Reply[];
    polls: Poll[];
    message_text: string; // Assuming this prop is also passed
}

export default function FeedbackChats(props: FeedbackChatsProps) {
    const [reaction, updateReaction] = useState<Reaction[]>(props.reactions);
    const [replies, updateReplies] = useState<Reply[]>(props.replies);
    const [all_polls, updateAll_polls] = useState<Poll[]>(props.polls);
    const [reactions_view, setReactions] = useState<JSX.Element[]>([]);
    const [polls_view, setPolls_view] = useState<JSX.Element[]>([]);

    function DisplayMessage(message: string) {
        const split_messages = message.split(" ");
        const checked_message = split_messages.map((word, index) =>
            word.includes("@") ? (
                <b key={index} className='chat-mentions'>{word}</b>
            ) : (
                <span key={index}> {" " + word + " "}</span>
            )
        );
        return checked_message;
    }

    function showPolls(polls: Poll[]) {
        return polls.map((poll, index) => {
            const coloring = [
                {
                    primary: 'rgba(12, 140, 233,0.04)',
                    secondary: 'rgba(12, 140, 233,0.2)'
                },
                {
                    primary: 'rgba(201, 199, 199,0.5)',
                    secondary: 'rgba(201, 199, 199,0.04)'
                },
            ];

            return (
                <div className='chat-poll' key={index}>
                    <div className='poll-progress-container'>
                        <Progress style={{ background: coloring[Math.floor(Math.random() * 2)].primary }} value={poll.poll_progress} className="poll-progress" />
                        {poll.poll_check ? <FaCheckCircle className="poll-vote-check" /> : <MdOutlineRadioButtonUnchecked className="poll-vote-uncheck" />}
                    </div>
                    <p className='poll-vote-title'>{poll.poll_title} {poll.poll_counter}</p>
                </div>
            );
        });
    }

    function showReactions(react_: Reaction[]) {
        const reactions_to_show: JSX.Element[] = [];

        function reactionHandler(id: number) {
            const newReaction = [...reaction];
            newReaction.forEach((r, index) => {
                r.selected = index === id ? !r.selected : false;
                r.index += r.selected ? 1 : -1;
            });
            updateReaction(newReaction);
        }

        react_.forEach((react, index) => {
            let reaction_view = (
                <Card
                    key={index}
                    onClick={() => reactionHandler(index)}
                    className={`w-[34px] h-[20px] reaction ${react.selected ? 'reaction-selected' : ''}`}>
                    {react.type === 'thumbs_up' ? (
                        <FaThumbsDown
                            style={{ color: react.selected ? '#ffc815' : '#F24822', fontSize: '14px' }}
                            className='w-[11.5px] h-[11.5px] ml-[3px] mt-[2px]' />
                    ) : (
                        <FaTimes
                            style={{ color: '#F24822', fontSize: '14px' }}
                            className='w-[11.5px] h-[11.5px] ml-[3px] mt-[2px]' />
                    )}
                    <b className='reaction-counter'>{react.index}</b>
                </Card>
            );
            reactions_to_show.push(reaction_view);
        });

        return reactions_to_show;
    }

    useEffect(() => {
        setReactions(showReactions(reaction));
    }, [reaction]);

    useEffect(() => {
        setPolls_view(showPolls(all_polls));
    }, [all_polls]);

    return (
        <div className='chat-bubble'>
            <div className='chat-title-bar'>
                <Avatar className='w-[20px] h-[20px] ml-[14px] mt-[10px]'>
                    <AvatarImage src="https://github.com/shadcn.png" alt="user chat icon" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='chat-user-name'>Liam Rodriguez</p>
            </div>

            <div className='chat-message-view'>
                {DisplayMessage(props.message_text)}
            </div>

            {reactions_view.length > 0 && (
                <div className='chat-reactions'>
                    {reactions_view}
                </div>
            )}

            {polls_view.length > 0 && (
                <div className='polls-view'>
                    {polls_view}
                </div>
            )}

            {replies.length > 0 && (
                <div className='more-replies'>
                      <Card>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger style={{ border: 'none', width: '200px' }}>
                                    <div className='chat-title-bar mt-[-20px]'>
                                        <Avatar className='w-[20px] h-[20px] ml-[14px] mt-[10px]'>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="user chat icon" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <p style={{ position: 'absolute' }} className='chat-user-name ml-[64px] mt-[-1px]'>
                                            <b style={{ opacity: '0.77', textAlign: 'right' }}>{replies[replies.length - 1].name} </b>
                                            <b>{replies[replies.length - 1].message}</b>
                                        </p>
                                        <GoTriangleRight className='replies-angle-icon' />
                                    </div>
                                    <p className='ml-[35px] mt-[25px]' style={{ color: 'rgba(12, 140, 233,0.9)', fontSize: '10px', position: 'absolute', fontWeight: 'bold' }}>
                                        {replies.length > 0 ? replies.length + " reply" : replies.length + " replies"}
                                    </p>
                                </AccordionTrigger>
                                <AccordionContent style={{ paddingLeft: '35px' }}>
                                    <p>Replies goes here</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                </div>
            )}
        </div>
    );
}
