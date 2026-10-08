import { useEffect, useState } from 'react';

/**
 * Devolve o id da seção mais visível no momento, para destacar o link
 * correspondente no menu.
 */
export function useScrollSpy(sectionIds: string[], offset = 120): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Última seção cujo topo já passou pela linha de leitura.
      let current = sectionIds[0] ?? '';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) current = id;
      }

      // No fim da página, destaca sempre a última seção.
      const reachedBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      if (reachedBottom) current = sectionIds[sectionIds.length - 1] ?? current;

      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
