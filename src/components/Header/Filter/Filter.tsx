import './filter.sass';
import {useEffect, useRef, useState} from "react";

interface IFilter {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}
export function Filter({ options, onSelect, selectedOption}: IFilter ) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    // setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
      <div className="dropdown" ref={ref}>
        <div className="dropdown__heading" onClick={toggleDropdown}>
          {selectedOption || 'Выберите опцию'}
        </div>
        {isOpen && (
            <ul className="dropdown__list">
              {options.map((option, index) => (
                  <li
                      key={index}
                      className="dropdown__item"
                      onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
}
