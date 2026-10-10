type Props = {
  tags: string[];
  selectedTags: string[];
  onToggle: (tag: string) => void;
  onClear: () => void;
};

export default function FilterBar({
  tags,
  selectedTags,
  onToggle,
  onClear,
}: Props) {
  return (
    <div className="filter" role="group" aria-label="Filtrera projekt">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`tag-btn ${selectedTags.includes(tag) ? "active" : ""}`}
          aria-pressed={selectedTags.includes(tag)}
          onClick={() => onToggle(tag)}
        >
          {tag}
        </button>
      ))}
      {selectedTags.length > 0 && (
        <button className="clear" onClick={onClear}>
          Rensa filter ✕
        </button>
      )}
    </div>
  );
}