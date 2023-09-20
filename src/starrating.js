export default function StarRating(params) {
  return (
    <div>
      <div>
        {Array.from({ Length: 5 }, (v, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
    </div>
  );
}
