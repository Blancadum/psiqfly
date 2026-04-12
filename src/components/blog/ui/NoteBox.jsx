export const NoteBox = ({ emoji = '💙', content }) => {
  if (!content) return null;

  return (
    <div className="my-8 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30 px-6 py-5 flex gap-4">
      <span className="text-2xl flex-shrink-0 mt-0.5">{emoji}</span>
      <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">{content}</p>
    </div>
  );
};
