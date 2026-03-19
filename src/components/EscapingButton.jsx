import { useState, useRef, useCallback } from 'react';

const POSITIVES = [
  { emoji: '🧠', label: 'Problem solver' },
  { emoji: '📚', label: 'Always learning' },
  { emoji: '✨', label: 'Clean coder' },
  { emoji: '🎯', label: 'Detail-oriented' },
  { emoji: '💪', label: 'Never gives up' },
  { emoji: '🤝', label: 'Collaborative' },
  { emoji: '🎨', label: 'Creative thinker' },
  { emoji: '🔍', label: 'Curious mind' },
];

const TAUNTS = [
  'Running away... 😏',
  'Nice try! 👀',
  'Almost got me! 😅',
  'So close!! 😂',
  'Okay okay... 🏳️',
];

export default function EscapingButton() {
  const [tries, setTries] = useState(0);
  const [surrendered, setSurrendered] = useState(false);
  const [pos, setPos] = useState(null);
  const [taunt, setTaunt] = useState('');
  const [showPulse, setShowPulse] = useState(true);
  const timerRef = useRef(null);
  const MAX_TRIES = 5;

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const surrender = useCallback(() => {
    clearTimeout(timerRef.current);
    setSurrendered(true);
    setPos(null);
    setTaunt('');
  }, []);

  const escape = useCallback(() => {
    if (surrendered) return;
    setShowPulse(false);
    const next = tries + 1;
    setTries(next);

    if (next >= MAX_TRIES) {
      surrender();
      return;
    }

    setTaunt(TAUNTS[Math.min(next - 1, TAUNTS.length - 1)]);

    const padding = 24;
    const btnW = 200, btnH = 52;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const x = Math.random() * (vw - btnW - padding * 2) + padding;
    const y = Math.random() * (vh - btnH - padding * 2) + padding;
    setPos({ x, y });

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(surrender, 5000);
  }, [tries, surrendered, surrender]);

  const reset = () => {
    clearTimeout(timerRef.current);
    setTries(0);
    setSurrendered(false);
    setPos(null);
    setTaunt('');
    setShowPulse(true);
  };

  const btnStyle = pos
    ? {
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        transition: 'left 0.2s cubic-bezier(.36,.07,.19,.97), top 0.2s cubic-bezier(.36,.07,.19,.97)',
        zIndex: 9999,
      }
    : {};

  if (surrendered) {
    return (
      <div className="escaping-surrender">
        <div className="escaping-surrender__icon">✦</div>
        <h3 className="escaping-surrender__title">Still hunting for negatives?</h3>
        <p className="escaping-surrender__sub">
          You tried {tries} time{tries !== 1 ? 's' : ''}… but look what you found instead:
        </p>
        <div className="escaping-surrender__grid">
          {shuffle(POSITIVES).slice(0, 6).map(({ emoji, label }) => (
            <span key={label} className="escaping-surrender__pill">
              {emoji} {label}
            </span>
          ))}
        </div>
        <button className="escaping-surrender__reset" onClick={reset}>
          ↩ try again
        </button>
      </div>
    );
  }

  return (
    <div className="escaping-wrapper">
      <button
        className={`escaping-btn${showPulse ? ' escaping-btn--pulse' : ''}`}
        style={btnStyle}
        onMouseEnter={escape}
        onClick={escape}
      >
        <span className="escaping-btn__icon">😈</span>
        My bad qualities
      </button>
      {taunt && pos && (
        <p className="escaping-taunt">{taunt}</p>
      )}
      {!pos && tries === 0 && (
        <p className="escaping-hint">← click if you dare</p>
      )}
    </div>
  );
}