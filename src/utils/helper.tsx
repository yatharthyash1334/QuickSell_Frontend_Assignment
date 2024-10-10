import { BiRadioCircle } from 'react-icons/bi';
import { LuMoreHorizontal } from 'react-icons/lu';
import { TbProgress } from 'react-icons/tb';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';
import { BiSignal2, BiSignal3, BiSignal4 } from 'react-icons/bi';
import UrgentPriorityIcon from '../assets/icons/SVG - Urgent Priority colour.svg';
import HighPriorityIcon from '../assets/icons/Img - High Priority.svg';
import MediumPriorityIcon from '../assets/icons/Img - Medium Priority.svg';
import LowPriorityIcon from '../assets/icons/Img - Low Priority.svg';
import NoPriorityIcon from '../assets/icons/No-priority.svg';
import BackLogIcon from '../assets/icons/Backlog.svg';
import ToDoIcon from '../assets/icons/To-do.svg';
import InProgressIcon from '../assets/icons/in-progress.svg';
import DoneIcon from '../assets/icons/Done.svg';
import CanceledICon from '../assets/icons/Cancelled.svg';


export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "Urgent": return <img src={UrgentPriorityIcon} alt="Urgent Priority" />;
        case "High": return <img src={HighPriorityIcon} alt="High Priority" />;
        case "Medium": return <img src={MediumPriorityIcon} alt="Medium Priority" />;
        case "Low": return <img src={LowPriorityIcon} alt="Low Priority" />;
        default: return <img src={NoPriorityIcon} alt="No Priority" />;
    }
}

export const getStatusIcon = (priority: string) => {
    switch (priority) {
        case "Backlog": return <img src = {BackLogIcon} alt='Backlog'/>;
        case "Todo": return <img src={ToDoIcon} alt = 'Todo'/>;
        case "In progress": return <img src = {InProgressIcon} alt = 'In Progress'/>;
        case "Done": return <img src = {DoneIcon} alt = 'Done'/>;
        case "Canceled": return <img src = {CanceledICon} alt = 'Cancelled' />;
        default: return <img src = {BackLogIcon} alt = 'backlog'/>;
    }
}