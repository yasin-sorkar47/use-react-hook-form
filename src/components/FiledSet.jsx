export default function FiledSet({ label, children }) {
  return (
    <fieldset className="m-2 border-none p-0">
      {label && <legend className=" text-2xl font-bold mb-1">{label}</legend>}
      <div className="flex flex-col justify-between self-start">{children}</div>
    </fieldset>
  );
}
