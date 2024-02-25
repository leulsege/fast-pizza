import "../index.css";

export default function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-50/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}
