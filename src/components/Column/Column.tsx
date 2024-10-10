import React, { useMemo } from 'react';
import Card from '../Card';
import "./column.css";
import { GrAdd } from 'react-icons/gr';
import { LuMoreHorizontal } from 'react-icons/lu';
import { Ticket, User } from '../../interfaces';
import { getPriorityIcon, getStatusIcon } from '../../utils/helper';
import UserIcon from '../UserIcon';

interface ColumnProps {
    tickets: Ticket[];
    grouping: string;
    groupBy: string;
    userIdToData: Record<string, User>;
}

const Column: React.FC<ColumnProps> = ({ tickets, grouping, groupBy, userIdToData }) => {
    const title = useMemo(() => {
        if (grouping === "status" || grouping === "priority") {
            return groupBy;
        }
        return userIdToData[groupBy]?.name || '';
    }, [grouping, groupBy, userIdToData]);

    const icon = useMemo(() => {
        if (grouping === "status") {
            return getStatusIcon(groupBy);
        } else if (grouping === "priority") {
            return getPriorityIcon(groupBy);
        } else if (grouping === "user") {
            const user = userIdToData[groupBy];
            return user ? <UserIcon name={user.name} available={user.available} /> : null;
        }
        return null;
    }, [grouping, groupBy, userIdToData]);

    return (
        <div className='column'>
            <div className='column-header'>
                <div className='column-header-left-container'>
                    {icon}
                    <div className='column-title'>
                        {title}
                        <span className='count'>{tickets.length}</span>
                    </div>
                </div>
                <div className='column-header-right-container'>
                    <GrAdd color="#797d84" size={12} />
                    <LuMoreHorizontal color="#797d84" size={14} />
                </div>
            </div>
            <div className='cards-container'>
                {tickets.map((ticket: Ticket) => (
                    <Card 
                        key={ticket.id} 
                        ticket={ticket} 
                        userData={userIdToData[ticket.userId]} 
                        hideStatusIcon={grouping === "status"} 
                        hideProfileIcon={grouping === "user"} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Column;
