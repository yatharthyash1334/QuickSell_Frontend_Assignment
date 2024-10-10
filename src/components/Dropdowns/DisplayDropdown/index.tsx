import React, { useCallback, useEffect, useRef, useState, ChangeEvent } from 'react';
import './displayDropdown.css';
import { LuSettings2 } from "react-icons/lu";
import { BiChevronDown } from "react-icons/bi";

interface DisplayDropdownProps {
  grouping: string;
  setGrouping: (grouping: string) => void;
  ordering: string;
  setOrdering: (ordering: string) => void;
}

const DisplayDropdown: React.FC<DisplayDropdownProps> = ({ grouping, setGrouping, ordering, setOrdering }) => {
  const [visible, setVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>(null);

  // Toggle dropdown visibility
  const toggleDropdown = useCallback(() => {
    setVisible((prevVisible) => !prevVisible);
  }, []);

  // Handle click outside dropdown to close
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
      setVisible(false);
    }
  }, []);

  // Grouping change handler
  const onGroupingChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => setGrouping(e.target.value), [setGrouping]);

  // Ordering change handler
  const onOrderingChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => setOrdering(e.target.value), [setOrdering]);

  // Add event listener to detect clicks outside the dropdown
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className='display-dropdown' ref={componentRef}>
      <div className='dropdown-label-container' onClick={toggleDropdown}>
        <LuSettings2 color='#6b6f76' />
        <div className='dropdown-label'>Display</div>
        <BiChevronDown color='#6b6f76' />
      </div>

      <div className={`dropdown-content-container ${visible ? "visible" : ""}`}>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Grouping</div>
          <select name="grouping" id="grouping" value={grouping} onChange={onGroupingChange}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>

        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Ordering</div>
          <select name="ordering" id="ordering" value={ordering} onChange={onOrderingChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DisplayDropdown;
