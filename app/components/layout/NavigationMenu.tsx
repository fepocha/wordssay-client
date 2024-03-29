import classNames from 'classnames';
import { useState } from 'react';
import { NavLink } from 'remix';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const NAVIGATION = [
  {
    path: '/word/new',
    displayName: 'Add a new word',
  },
  {
    path: '/play',
    displayName: 'Play Games',
  },
  {
    path: '/tutorial',
    displayName: 'Tutorial',
  },
];

export function NavigationMenu() {
  const [isExpanded, setExpanded] = useState(false);

  const handleMenuToggle = () => {
    setExpanded(prevExpanded => !prevExpanded);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleMenuToggle}
        className="text-black-dark w-6 h-6"
      >
        {isExpanded ? <XIcon className="w-full h-full" />: <MenuIcon className="w-full h-full" />}
      </button>
      {isExpanded && (
        <nav className="fixed top-header-height left-0 w-full z-10 bg-white-mid text-center h-[calc(100vh-theme(space.header-height))] py-14">
          <ul className="grid gap-10">
            {NAVIGATION.map(({ path, displayName }) => (
              <li key={path} className="text-2xl">
                <NavLink
                  to={path}
                  prefetch="intent"
                  className={({ isActive }) =>
                    classNames('relative', {
                      'after:absolute after:bottom-0 after:left-0 after:block after:w-full after:h-2 after:bg-orange-dark after:-z-10':
                        isActive,
                    })
                  }
                  onClick={handleMenuToggle}
                >
                  {displayName}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
