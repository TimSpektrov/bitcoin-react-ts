import './filter.sass';
import {useState} from "react";

interface IFilter {
  options: string[];
  onSelect: (option: string) => void;
}
export function Filter({ options, onSelect }: IFilter ) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
      <div className="dropdown">
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedOption || 'Выберите опцию'}
        </div>
        {isOpen && (
            <ul className="dropdown-list">
              {options.map((option, index) => (
                  <li
                      key={index}
                      className="dropdown-item"
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
