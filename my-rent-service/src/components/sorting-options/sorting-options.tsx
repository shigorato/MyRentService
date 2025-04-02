import { SortOffersType } from "../../const";
import { useState, KeyboardEvent } from "react";
import { SortOffer } from "../../types/sort";
import classNames from 'classnames';

type SortPlacesProps = { 
    activeSorting: SortOffer;
    onChange: (newSorting: SortOffer) => void;
}

function SortOptions({activeSorting, onChange}: SortPlacesProps) {
    const [isOpen, setIsOpen] = useState(false);

    const iconStyle = {
        transform: `translateY(-50%) ${isOpen ? 'rotate(180deg)' : ''}`
    }; 

    const handleKeyDown = (evt: KeyboardEvent) => {
        if(evt.key === 'Escape' && isOpen) {
            evt.preventDefault();
            setIsOpen(false);
        }
    };

    const handleTypeClick = () => {
        setIsOpen((prev) => !prev);
    };

    // Исправлено название функции (добавлена буква 'g')
    const handleSortingItemClick = (type: SortOffer) => {
        onChange(type);
        setIsOpen(false);
    };

    return (
        <form className="places__sorting" action="#" method="get" onKeyDown={handleKeyDown}>
            <span className="places__sorting-caption">Sort by </span>
            <span className="places__sorting-type" tabIndex={0} onClick={handleTypeClick}>
                {activeSorting}
                <svg className="places__sorting-arrow" width="7" height="4" style={iconStyle}>
                    <use href="#icon-arrow-select" />
                </svg>
            </span>
            <ul className={classNames('places__options', 'places__options--custom', { 'places__options--opened': isOpen })}>
                {Object.values(SortOffersType).map((type) => (
                    <li 
                        key={type} 
                        className={classNames('places__option', { 'places__option--active': type === activeSorting })}
                        tabIndex={0}
                        // Исправлено: добавлена стрелочная функция
                        onClick={() => handleSortingItemClick(type as SortOffer)}
                    >
                        {type}
                    </li>
                ))}
            </ul>
        </form>
    );
}

export default SortOptions;