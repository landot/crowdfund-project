import bookmarkIcon from '../assets/images/icon-bookmark.svg';
import selectedBookmarkIcon from '../assets/images/icon-bookmark-selected.svg';
import { useState } from 'react';
import './Button.css';
import './BookmarkButton.css';

export function BookmarkButton(props: {isMobile: boolean}) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  function handleClick() {
    setIsBookmarked(prev => !prev);
  }

  return (
    <div 
      className={`bookmark-container ${isBookmarked ? 'bookmarked': ''}`}
      onClick={handleClick}
    >
        {!props.isMobile && 
            <button className='bookmark'>
                Bookmark
            </button>
        }
        <img 
            src={isBookmarked ? selectedBookmarkIcon: bookmarkIcon} 
            className='bookmark-icon'
            alt="bookmark icon" 
        />
    </div>
  );
}
