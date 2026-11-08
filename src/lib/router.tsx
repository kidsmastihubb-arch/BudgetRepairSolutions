import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from 'react';

const NAVIGATE_EVENT = 'app:navigate';

export function usePathname() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const sync = () => setPath(window.location.pathname);
    window.addEventListener('popstate', sync);
    window.addEventListener(NAVIGATE_EVENT, sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener(NAVIGATE_EVENT, sync);
    };
  }, []);

  return path;
}

export function navigate(to: string) {
  if (to !== window.location.pathname) {
    window.history.pushState({}, '', to);
    window.dispatchEvent(new Event(NAVIGATE_EVENT));
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export function Link({ to, onClick, ...rest }: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    navigate(to);
  };

  return <a href={to} onClick={handleClick} {...rest} />;
}
