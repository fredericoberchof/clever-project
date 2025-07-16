interface FormFieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export default function FormField({
  label,
  value,
  onChange,
  placeholder = "",
  className = "",
}: FormFieldProps) {
  return (
    <label className={`w-full ${className}`}>
      <span className="block mb-2 text-[14px] font-bold">
        {label}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        aria-label={label}
        className="w-full h-[44px] px-4 border border-gray-400 rounded-lg text-[14px]
          focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </label>
  );
}
