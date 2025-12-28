'use client';

import { useEffect, useRef, useState } from 'react';

export default function ExpandableText({
  text,
}: {
  text: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setOverflowing(ref.current.scrollHeight > ref.current.clientHeight);
    }
  }, []);

  return (
    <>
      <p
        ref={ref}
        style={{
          marginTop: '14px',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: expanded ? 'unset' : 3,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {text}
      </p>

      {overflowing && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            marginTop: '6px',
            fontSize: '14px',
            color: 'var(--purple-2)',
            background: 'none',
            padding: 0,
            fontWeight: 500,
          }}
        >
          {expanded ? 'See less' : 'See more'}
        </button>
      )}
    </>
  );
}
